import { default as MapChart } from "../../components/MapChart";

import Events from "./events";
import { translate } from "../../helper/backHelper";

export class Map {

    constructor() {

        this.form = document.querySelector('form[id="national_income"]');
        this.selects = this.form.querySelectorAll('select');
        this.selectsInstance = [];


        this.selectAll = translate(lang, 'select')
        this.usaDollar = translate(lang, 'usaDollar')
        this.year = translate(lang, 'year')
        this.quarter = translate(lang, 'quarter')
        this.month = translate(lang, 'month')
        this.titleShablonObj = translate(lang, 'titleShablonObj')


        this.mapChart = {};
    }


    async loadData(params) {

        const data = await axios({
            method: 'get',
            url: '/api/mapData',
            params
        })
     
        return data;


    }
    
    async selectsData(tableName, columnName) {

        const data = await axios({
            method: 'get',
            url: '/api/selectsData',
            params: {
                tableName,
                columnName,
                lang: lang
            }
        })

        return data;

    }
     
   

    async renderSelect(divName, tableName, columnName) {


        var value, desc, red;

        const hs2 = await this.selectsData(tableName, columnName);

        red = Object.keys(hs2.data.data).reduce(function(previous, key) {
            value = tableName == 'CountryGroup' ? key : hs2.data.data[key];
            desc = tableName == 'CountryGroup' ? { description: hs2.data.data[key] } : {};
            previous[key] = { value: value, selected: true, group: "#", disabled: false, ...desc }
            return previous
        }, {});

    

        this.selectsInstance[divName].options.add({...red });
        this.selectsInstance[divName].options.unselect({...red })

    }


    async lastTrade() {

        const data = await axios({
            method: 'get',
            url: '/api/lastTrade'
        })

        return data;

    }
    



    async render() {

        //$(this.form).submit();

        this.showSpinner();

        this.ready();
        
        await this.renderSelect('hs4', 'Hs4', 'hs4_id')
        await this.renderSelect('country', 'Country', 'country_id')
        await this.renderSelect('bec1', 'Bec', 'id')
        await this.renderSelect('country_group', 'CountryGroup', 'name')

        const params = new URLSearchParams(new FormData(this.form))
        if (params.get('flow') && params.get('flow') == 'E') {
            params.set('flow[]', 'RE')
            params.append('flow[]', 'DE')
        }

        //console.log('dasdasd', params.get('type') )

        params.append('lang', lang);
        const mapData = await this.loadData(params);

        //console.log('mapData', mapData)
        this.mapChartConst = new MapChart();
        this.mapChart = await this.mapChartConst.render(mapData.data.data)
      
        $("body").find("[aria-labelledby]:role").hide();

        this.hideSpinner();


        //hs2.data.data.map(()=>{
        //console.log('sssss')
        //})




        //this.mapChart


    }
  




};


Object.assign(Map.prototype, Events);


/*

var MyClass = function() {
    this._events = {};
};
MyClass.prototype = {
  addListener: function(eventName, callback) {
      var events = this._events,
          callbacks = events[eventName] = events[eventName] || [];
      callbacks.push(callback);
  },
  raiseEvent: function(eventName, args) {
      var callbacks = this._events[eventName];
      for (var i = 0, l = callbacks.length; i < l; i++) {
          callbacks[i].apply(null, args);
      }
  },
  test : function() {
    this.raiseEvent('ON_TEST', [1,2,3]); // whatever args to pass to listeners
  }
};


function triggerFunction(eventType) {
  if (this instanceof HTMLInputElement && eventType === 'click') {
    return HTMLElement.prototype.click.call(this);
  }
  const event = new CustomEvent(eventType, {
    bubbles: true,
    cancelable: true
  });
  this.dispatchEvent(event);
}
if (!EventTarget.prototype.trigger) {
  EventTarget.prototype.trigger = triggerFunction;
}

const button = document.querySelector('button');
const input = document.querySelector('input');
button.addEventListener('click', () => {
  input.trigger('click'); // Works
});

<div>
  <button type="button">{UPLOAD}</button>
  <input type="file">
</div>

*/