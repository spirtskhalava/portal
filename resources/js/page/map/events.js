import { translate } from "../../helper/backHelper";
const DisableYear =(sflow) => {
   var iterator, div_list, div_array;
   if (sflow == 'RE' || sflow == 'DE') {
       for (var i = 1; i <= 6; i++) {
           iterator = 2014 - i;
           div_list = document.querySelectorAll("[data-key='" + iterator + "']");
           div_array = [...div_list]; 
           div_array.forEach(div => {
               div.style.pointerEvents = "none";
               div.style.color = "lightgrey";
           });
       }
   } else {
       for (var i = 1; i <= 6; i++) {
           iterator = 2014 - i;
           div_list = document.querySelectorAll("[data-key='" + iterator + "']");
           div_array = [...div_list]; 
           div_array.forEach(div => {
               div.style.pointerEvents = "";
               div.style.color = "";
           });
       }

   }



}

const Events = {

    
        async ready() {

            
            let lastTrade = await this.lastTrade();

            //console.log('lastTrade', lastTrade);

            let month = `${translate(lang, 0, 'month')},${translate(lang, lastTrade.data.data.month, 'month') }`;
            let quarter = translate(lang, lastTrade.data.data.quarter, 'quarter');

            //this.lastTradeObj = {...lastTrade.data.data, ...{flow : translate(lang, 'export')}, ...{month : month} };
            this.lastTradeObj = {... {}, ... {}, ... {} };


            this.onDocumentLoad();

            var That = this;

            That.selectsInstance['flow'].on('change', function(item, state) {
                DisableYear(item.key);
                if(item.key=='RE' || item.key=='DE' ){
                for (var k = 1; k <= 6; k++) {
                    var iterate = 2014 - k;
                    var div_list = document.querySelectorAll("[data-key='" + iterate + "']");
                    var div_array = [...div_list];
                    div_array.forEach(div => {
                        div.classList.remove("selected");
                        document.getElementsByClassName('label-inner')[1].innerHTML = translate(lang, 'select');
                    });
                }
            }
                

                
            }),
            That.selectsInstance['year'].on('change', function(item, state) {
                //var assign = assignFlow;
                var iterate, div_list, div_array;
                DisableYear(item.key);
                var e = document.getElementById("flow");
                var strUser = e.value;
                if (strUser == 'RE' || strUser == 'DE') {
                    for (var k = 1; k <= 6; k++) {
                        iterate = 2014 - k;
                        div_list = document.querySelectorAll("[data-key='" + iterate + "']");
                        div_array = [...div_list];
                        div_array.forEach(div => {
                            div.style.pointerEvents = "none";
                            div.style.color = "lightgrey"
                        });
                    }
                }
            }),

            $(this.selects).on('change', (e) => {

                if (That.selectsInstance['year'].value() && That.selectsInstance['flow'].value()) {
                    $(this.form).submit();
                    return false;
                }



            });
            this.form.onsubmit = this.onSubmitForm.bind(this);

            //this.titleShablon(this.lastTradeObj)


        },

        showSpinner() {

            JsLoadingOverlay.show({
                'overlayBackgroundColor': '#ccc',
                'overlayOpacity': 0.6,
                'spinnerIcon': 'line-scale',
                'spinnerColor': '#0080be',
                'spinnerSize': '3x',
                'overlayIDName': 'overlay',
                'spinnerIDName': 'spinner',
            });
        },

        hideSpinner() {

            JsLoadingOverlay.hide();

        },

        //titleShablon(obj = {}){

        //this.titleShablonObj = {...this.titleShablonObj, ...obj}
        //return this.titleShablonObj
        //},

        titleShablon({ flow = '', year = '', month = '', quarter = '' }) {

            let titelDiv = document.getElementById('title');
            let shablon = ` ${ flow ?  `<div>${flow} - ${this.usaDollar}  </div>` : ''} <div>  ${ year ?  `<div>${this.year} - ${year}  </div>` : ''}  </div>  ${ quarter ?  `<div>${this.quarter} - ${quarter}</div>` : ''}     ${ month ?  `<div>${this.month} - ${month}</div>` : ''}  `;

        return titelDiv.innerHTML = shablon;

    },


    removeKey(obj, prop){
        let {[prop]: omit, ...res} = obj
        return res
    },

    getSelectValueForSahablon(curent, selectedValue){
        let result = null;
        if (Array.isArray(selectedValue) ) {
            result =
                [...curent.e.options]
                    .filter(opt=>opt.selected == true)
                    .sort((a, b) => a - b)
                    .reduce(function (str, val, index, dd) {
                        var deppice = str.length ? "," : "";
                        //var comma = (index == dd.length - 1) ? ", " : "";

                        //if (index == 0 || index == dd.length - 1) {
                            str = str + deppice + val.text
                        //}

                            return str;
                        }, '');

        }else if( selectedValue ){

            result = curent.e.options[curent.e.selectedIndex].text ;
        }

        return result;

    },

    disablefuturemonthsAndQuarter(month, quarter, select){

        var d = new Date();
        var n = d.getMonth()+1;

        if (select) {

            for (var i = n; i <= 12; i++) {

                if (month.options.is('enable', i.toString(), '#')) {

                    month.options.disable(i.toString(), '#')

                }
            }

        }else{


            for (var i = n; i <= 12; i++) {

                if (month.options.is('disable', i.toString(), '#')) {

                    month.options.enable(i.toString(), '#')

                }
            }
        }


        var today = new Date();
        var cuurentQuarter = Math.floor((today.getMonth() + 3) / 3)+1;

        if (select) {

            for (var i = cuurentQuarter; i <= 4; i++) {

                if (quarter.options.is('enable', i.toString(), '#')) {

                    quarter.options.disable(i.toString(), '#')

                }
            }

        }else{


            for (var i = cuurentQuarter; i <= 4; i++) {

                if (quarter.options.is('disable', i.toString(), '#')) {

                    quarter.options.enable(i.toString(), '#')

                }
            }
        }

    },


    disableOrEnable(id,  That, rend, first, secend){


        if (id == first  ) {

                    if (That.selectsInstance[first].value()) {



                        Object.keys(That.selectsInstance[secend].options.items['#']).map((elm)=>{



                            if( That.selectsInstance[secend].options.is('enable', elm, '#')){

                                That.selectsInstance[secend].options.disable(elm, '#')

                            }

                        })

                        rend[secend] = '';
                    }else{

                        Object.keys(That.selectsInstance[secend].options.items['#']).map((elm)=>{

                            if( That.selectsInstance[secend].options.is('disable', elm, '#')){

                                That.selectsInstance[secend].options.enable(elm, '#')

                            }

                        })
                    }

                }else if(id == secend){


                    if (That.selectsInstance[secend].value()) {



                        Object.keys(That.selectsInstance[first].options.items['#']).map((elm)=>{



                            if( That.selectsInstance[first].options.is('enable', elm, '#')){

                                That.selectsInstance[first].options.disable(elm, '#')

                            }

                        })

                        rend[first] = '';
                    }else{

                        Object.keys(That.selectsInstance[first].options.items['#']).map((elm)=>{

                            if( That.selectsInstance[first].options.is('disable', elm, '#')){

                                That.selectsInstance[first].options.enable(elm, '#')

                            }

                        })
                    }

                }

    },

    onDocumentLoad(){

        const That = this;

        [...this.selects].map((elm)=>{

            const id = elm.getAttribute("id");
            const params = JSON.parse(elm.getAttribute("params"));

            this.selectsInstance[id] = tail(`#${id}`, {

                placeholder : this.selectAll,
                sortItems : true,
                locale:lang,
                ...params,
                items: {
                },
                descriptions: true,
            });

            this.selectsInstance[id].on('change', function(item, state) {

                let select = this.e;
                let needed = ['year', 'flow', 'month', 'quarter'];
                var clearMonth = {};
                var clearQuarter = {};
                let rend = {};

                if (That.selectsInstance['year'].value() == That.lastTradeObj.year) {
                    That.disablefuturemonthsAndQuarter(That.selectsInstance['month'], That.selectsInstance['quarter'],  true);
                }else{
                    That.disablefuturemonthsAndQuarter(That.selectsInstance['month'], That.selectsInstance['quarter'], false);
                }



                needed.forEach((elm, index)=>{
                    var curent = That.getSelectValueForSahablon(That.selectsInstance[elm], That.selectsInstance[elm].value())
                    var append = (curent) ? { [elm] : curent} : {};
                    if (Number(That.selectsInstance['year'].value()) !== That.lastTradeObj.year && !That.selectsInstance['month'].value()) {
                        clearMonth = { month : ''}
                    }
                    if (Number(That.selectsInstance['year'].value()) !== That.lastTradeObj.year && !That.selectsInstance['quarter'].value()) {
                        clearQuarter = { quarter : ''}
                    }

                    //console.log('this.elm[id]', That.selectsInstance[elm].value())
                    rend = {...rend, ...append, ...clearMonth, ...clearQuarter }
                })

                //console.log('this.selectsInstance[id]', this.selectsInstance[id])

                if (id == 'quarter'  ) {
                    if (That.selectsInstance['quarter'].value()) {
                        That.selectsInstance['month'].disable();
                        rend['month'] = '';
                    }else{
                        That.selectsInstance['month'].enable();
                    }

                }else if(id == 'month'){
                    if (That.selectsInstance['month'].value()) {
                        That.selectsInstance['quarter'].disable();
                        rend['quarter'] = '';
                    }else{
                        That.selectsInstance['quarter'].enable();

                    }
                }




                That.disableOrEnable(id, That, rend, 'country', 'country_group')
                That.disableOrEnable(id, That, rend, 'hs4', 'bec1')


                if (That.selectsInstance[id].value() && Array.isArray( That.selectsInstance[id].value() )) {
                    if (That.selectsInstance[id].value().length  > 1) {
                        That.selectsInstance[id].label.innerHTML = `<span class="label-inner">${translate(lang, 'MultipleValues')}</span>`;
                    }else{

                        That.selectsInstance[id].value().forEach((itm)=>{
                            var undo = That.selectsInstance[id].options.get(itm, '#');
                            That.selectsInstance[id].update({...undo, selected: true})
                        })
                    }
                }


                if (That.selectsInstance[id].value()) {

 
                    That.titleShablon({...That.lastTradeObj, ...rend});

                }



            })

        })




        That.disablefuturemonthsAndQuarter(That.selectsInstance['month'], That.selectsInstance['quarter'],  true);

    },

    groupParamsByKey :  (params) => [...params.entries()].reduce((acc, tuple) => {
        const [key, val] = tuple;
        if(acc.hasOwnProperty(key)) {
            if(Array.isArray(acc[key])) {
                acc[key] = [...acc[key], val]
            } else {
                acc[key] = [acc[key], val];
            }
        } else {
            acc[key] = val;
        }
        return acc;
    }, {}),


    async onSubmitForm(e){

        console.log('dsadasdsad')

        e.preventDefault();

        this.showSpinner();

        var params = new URLSearchParams(new FormData(e.target))
        params.append('lang', lang);

        if ( params.get('flow') && params.get('flow') == 'E' ) {
            params.set('flow[]', 'RE')
            params.append('flow[]', 'DE')
        }

        var newData = await this.loadData(params);

        let copyed = JSON.parse(JSON.stringify(newData.data.data));
       
    let showSum = function(sums) {
        let titelDiv = document.getElementById('titleSum');
        let shablon = ` ${`<div>${translate(lang, 'sum')} - ${sums.toFixed(1)}  </div>`} `;

        return titelDiv.innerHTML = shablon;
      };
       // console.log('newData', newData.data.data.length)
       var newarr=[];
        if(newData.data.data.length>0){
            for (let i = 0; i < newData.data.data.length; i++) { 
                newarr.push(newData.data.data[i].value);
              }
            
        }
        var sum = newarr.reduce(function(accum, val) {return accum + Number(val);}, 0);
       if(sum>0){
       showSum(sum);
       }
       console.log('newData', sum)

        const magicalFunction = (a, s) => [...a, ...s];
        let ge = [{id : 'GE', value :  0, fill : '#FF0000' }];
        copyed = magicalFunction(copyed, ge)

        //console.log("newData", newData)

        this.mapChart.polygonSeries.data = copyed;
        this.mapChart.polygonSeries.invalidateData();

        $("body").find("[aria-labelledby]:role").hide();

        this.hideSpinner();

        //async added
        // alert('sds')
        //this.stakedChartConst.Axies2 = this.stakedChartConst.insertOrUpdateAxseas(this.stakedChartConst.Axies2 );


    },
};






export default Events