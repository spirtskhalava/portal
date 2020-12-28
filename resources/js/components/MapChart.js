import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


class MapChart {

    constructor() {

    }


    async build(data) {

        am4core.useTheme(am4themes_animated);

        var chart = am4core.create("chartdiv", am4maps.MapChart);
        chart.geodata = am4geodata_worldLow;

        chart.projection = new am4maps.projections.Miller();
        chart.language.locale["_thousandSeparator"] = " ";

        var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

        //console.log('polygonSeries', polygonSeries.mapPolygons)

        polygonSeries.heatRules.push({
            property: "fill",
            target: polygonSeries.mapPolygons.template,
            min: chart.colors.getIndex(1).brighten(1),
            max: chart.colors.getIndex(1).brighten(-0.3)
        });

        polygonSeries.exclude = ["AQ"];
        polygonSeries.useGeodata = true;

        const magicalFunction = (a, s) => [...a, ...s];
        let ge = [{ id: 'GE', value: 0, fill: '#FF0000' }];
        data = magicalFunction(data, ge)
        polygonSeries.data = data;

        var polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{countryName}: {value.formatNumber('#,###.0')}";

        polygonTemplate.adapter.add("tooltipText", function(text, target, key) {

            if (target.dataItem.value) {

                if (target.dataItem.value > 0.001 && target.dataItem.value < 0.5) {
                    return text.replace("{value.formatNumber('#,###.0')}", "{value}");
                } else {
                    return text
                }
            }

            //console.log('target.dataItem.value', target.dataItem.value)
            //return target.dataItem.value && "" + text + "";
        });
        polygonTemplate.nonScalingStroke = true;
        polygonTemplate.strokeWidth = 0.5;
        polygonTemplate.propertyFields.fill = "fill";

        let heatLegend = chart.createChild(am4maps.HeatLegend);
        heatLegend.series = polygonSeries;
        heatLegend.align = "right";
        heatLegend.valign = "bottom";
        heatLegend.width = am4core.percent(15);
        heatLegend.marginRight = am4core.percent(4);
        heatLegend.minValue = 0;
        heatLegend.maxValue = 1000;

        var minRange = heatLegend.valueAxis.axisRanges.create();
        minRange.value = heatLegend.minValue;
        minRange.label.text = "Min";
        var maxRange = heatLegend.valueAxis.axisRanges.create();
        maxRange.value = heatLegend.maxValue;
        maxRange.label.text = "Max";

        heatLegend.valueAxis.renderer.labels.template.adapter.add("text", function(labelText) {
            return "";
        });

        //var polygonTemplate = polygonSeries.mapPolygons.template;
        //polygonTemplate.tooltipText = "{name}: {value}";
        //polygonTemplate.nonScalingStroke = true;
        //polygonTemplate.strokeWidth = 0.5;

        var hs = polygonTemplate.states.create("hover");
        hs.properties.fill = am4core.color("#3c5bdc");


        polygonTemplate.events.on("over", function(ev) {
            !ev.target.dataItem.value ? ev.target.isHover = false : false;
        });

        chart.zoomControl = new am4maps.ZoomControl();

        return {
            chart,
            polygonSeries

        };

    }


    async render(data) {


        const chart = await this.build(data);

        return chart

    }

}

export default MapChart