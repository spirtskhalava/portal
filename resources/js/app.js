import {
    translate
} from './helper';


const GetByID = id => {
    return document.getElementById(id);
};



$.extend($.expr[':'], {
    role: function (obj, index, meta) {
        return $(obj).is(":not([role])");
    }
})

document.addEventListener("DOMContentLoaded", async () => {
    localStorage.setItem('currentMonth', $('#month :selected').val());
    var stopAllYouTubeVideos = () => {
        var iframes = document.querySelectorAll('iframe');
        Array.prototype.forEach.call(iframes, iframe => {
            iframe.contentWindow.postMessage(JSON.stringify({
                event: 'command',
                func: 'stopVideo'
            }), '*');
        });
    }
    $('#exampleModalCenter').on('hidden.bs.modal', function () {
        stopAllYouTubeVideos();
    });

    var all = document.getElementById('all');
    var world = document.getElementById('world');


    var segments = window.location.pathname.split('/').filter(function (i) {
        return i !== ""
    });
    //secondLastSegment = segments[segments.length];

    if (segments[1] == "map") {
        const importMap = await
        import( /* webpackChunkName: "dynamicMap"*/ './page/map');
        const mapConst = new importMap.Map();
        mapConst.render()

        //let  mapObj = new map();
        //console.log('mapConst', mapConst)
        //console.log('axsios', axios)


    } else {

        
        var instance = [];


        let yearValue = document.getElementById("year").value;
        let costValue = document.getElementById("cost").value;
        let checkIDs = [
            "flow",
            "year",
            "quarter",
            "month",
            "hssec",
            "hs2",
            "hs4",
            "hs6",
            "bec",
            "sitc",
            "country",
            "transout",
            "cost",
            "grp",
            "parameters"
        ];
    
       
        var selectsInstance = {};
        var groupSelector = document.getElementById("grp");
        var len = groupSelector.selectedOptions.length;
        const tailSelect = id => {
            
            var sel = document.getElementById(id);
            var length = sel.selectedOptions.length;
            var isYear = id == "year" ? true : false;
            var isQuarter = id == "quarter" ? true : false;
            var isMonth = id == "month" ? true : false;
            var isType = id == "flow" ? true : false;
            var isCountry = id == "country" ? true : false;
            var isGrp = id == "grp" ? true : false;
            var isTransport = id == "transout" ? true : false;
            var isCost = id == "cost" ? true : false;
            var isHss = id == "hssec" ? true : false;
            var isHs2 = id == "hs2" ? true : false;
            var isHs4 = id == "hs4" ? true : false;
            var isHs6 = id == "hs6" ? true : false;
            var bec = id == "bec" ? true : false;
            var sitc = id == "sitc" ? true : false;
            var parameters = id == "parameters" ? true : false;
            instance[id] = tail("#"+id,{
                // !isType &&
                //     !isCost &&
                //     !isYear &&
                //     !isQuarter && !isCountry
                multiPinSelected:true,
                multiSelectAll:true,
            multiple: isType ? false : true,
            deselect: true,
            placeholder: '',
            search:
                !isType &&
                !isGrp &&
                !isCost &&
                !isYear &&
                !isQuarter &&
                !isMonth &&
                !parameters ?
                true : false,
            multiShowCount: false,
            multiContainer: length > 1 ? false : true,
            locale: lang,
            descriptions: true,
            searchMinLength: 1,
            sortItems: true,
            disabled:
                !isYear &&
                !isType &&
                !isCountry &&
                !isGrp &&
                !isTransport &&
                !isCost ?
                true : false,
            stayOpen: true,
            hideSelected: isHs4 && isHs6 ? true : false,
            });
        };
     

      checkIDs.map(item => {
        tailSelect(item);
       });
      

        var clientHeight = document.getElementById("two").clientHeight;
        document.getElementById("one").style.height = clientHeight + "px";
        document.getElementById("three").style.height = clientHeight + "px";
        const resize = () => {
            clientHeight = document.getElementById("two").clientHeight;
            document.getElementById("one").style.height = clientHeight + "px";
            document.getElementById("three").style.height = clientHeight + "px";
        };
        window.addEventListener("resize", resize);

        var ToDisable = document.querySelectorAll('input[dataName="groupOne"]');
        [...ToDisable].forEach((el) => {
            el.addEventListener('click', function (event) {
                if (event.target.dataset.selectid == 'quarter') {
                    instance['month'].options.all('unselect');
                } else {
                    instance['quarter'].options.all('unselect');
                }

            });
        });
        const renderSelect = (id, tableName, colmName) => {
            instance[id].on("open", e => {
                let hs4Input = instance[id].search.querySelector("input");
                hs4Input.addEventListener("input", event => {
                    if (event.target.value.length > 1) {
                        axios
                            .get("api/getDataHs4", {
                                params: {
                                    val: event.target.value,
                                    lang: lang,
                                    tableName: tableName,
                                    colmName: colmName
                                }
                            })
                            .then(response => {
                                let data = response.data;
                                let htmlData = data.html;
                                if (htmlData) {
                                    GetByID(id).innerHTML = htmlData;
                                } else {
                                    GetByID(id).innerHTML = "";
                                }
                                instance[id].reload();
                                instance[id].open(true);
                                let hs4Input = instance[id].search.querySelector(
                                    "input"
                                );
                                hs4Input.value = event.target.value;
                                //console.log(response.data);
                            })
                            .catch(error => {
                                console.log(error);
                            });
                    }
                });
            });
        };
        
        axios
            .get("api/getDataHs2", {
                params: {
                    lang: lang
                }
            })
            .then(response => {
                let data = response.data;
                let htmlData = data.html;
                GetByID("hs2").innerHTML = htmlData;
                //console.log(data);
            })
            .catch(error => {
                //console.log(error);
            });
        renderSelect("hs4", "Hs4", "hs4_id");
        renderSelect("hs6", "Hs6", "hs6_id");
        $('[data-toggle="tooltip"]').tooltip();

        function cbclick(e) {
            e = e || event;
            var cb = e.srcElement || e.target;
            if (cb.type !== 'checkbox') {
                return true;
            }
            var cbxs = document.querySelectorAll('input[dataName="groupThree"]');
            var cbs = document.querySelectorAll('input[dataName="groupOne"]');
            let i = cbxs.length;
            let j = cbs.length;
            while (i--) {
                if (cbxs[i].type && cbxs[i].type == 'checkbox' && cbxs[i].id !== cb.id) {
                    cbxs[i].checked = false;
                }
            }
            while (j--) {
                if (cbs[j].type && cbs[j].type == 'checkbox' && cbs[j].id !== cb.id) {
                    cbs[j].checked = false;
                }
            }
        }
        const clearSelect = (arr) => {
            arr.map(elm => {
                instance[elm.dataset.selectid].config("disabled", true);
            });
            //return arr.some(elem => elem.checked == true);
        };
        const showLoader = () => {
            JsLoadingOverlay.show({
                'overlayBackgroundColor': '#666666',
                'overlayOpacity': 0.6,
                'spinnerIcon': 'line-scale-party',
                'spinnerColor': '#0080be',
                'spinnerSize': '2x',
                'overlayIDName': 'overlay',
                'spinnerIDName': 'spinner',
            });
        };
        const hideLoader = () => {
            JsLoadingOverlay.hide();
        };
        const activeSelect = (instance, selectId, activeOrdisable) => {
            const activeelect = Object.keys(instance)
                .filter(key => selectId == key)
                .map(elm => {
                    return instance[elm];
                })[0];
            activeelect.config("disabled", activeOrdisable);
        }
        const activeOrDisabledChekbox = (arr, type, clear = true) => event => {
            let _this = event.currentTarget;
            let selectId = _this.dataset.selectid;
            // instance[selectId].init();
            if (type == 'groupOne') {
                instance[selectId].options.all('unselect');
                clearSelect(arr);
                activeSelect(instance, selectId, !_this.checked);
            } else if (type == "groupTwo") {
                instance[selectId].options.all('unselect');
                // clearSelect(arr);
                activeSelect(instance, selectId, !_this.checked);
            } else if (type == "groupThree") {
                instance[selectId].options.all('unselect');
                clearSelect(arr);
                activeSelect(instance, selectId, !_this.checked);
            }
        };
        let nestedChekbox = document.querySelectorAll('input[dataName="groupTwo"]');
        let checkboxses = document.querySelectorAll('input[dataName="groupThree"]');
        let checkboxsesFirstTab = document.querySelectorAll(
            'input[dataName="groupOne"]'
        );
        //[...nestedChekbox].map(elm => {
        //console.log("elm", elm);
        // elm.disabled = false;
        //});
        [...checkboxses].map(elem => {
            elem.addEventListener("click", cbclick);
            elem.addEventListener(
                "input",
                activeOrDisabledChekbox([...checkboxses], 'groupThree', true)
            );
        });
        [...checkboxsesFirstTab].map(elem => {
            elem.addEventListener("click", cbclick);
            elem.addEventListener(
                "input",
                activeOrDisabledChekbox([...checkboxsesFirstTab], 'groupOne', true)
            );
        });
        [...nestedChekbox].map(elem => {
            // console.log("elem", elem);
            elem.addEventListener(
                "input",
                activeOrDisabledChekbox([...nestedChekbox], 'groupTwo',
                    false)
            );
        });

        const thousands_separators = (num) => {
            var num_parts = num.toString().split(".");
            num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return num_parts.join(".");
        }
        var mystr = '';
        var clicked = '';

        function currencyFormatDE(num) {
            return (
                num
                .toFixed(1) // always two decimal digits
                .replace('.', '.') // replace decimal point character with ,
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
            ) // use . as a separator
        }

        function currencyFormat(num) {
            return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        }
        function currencyFormatTwo(num) {
            return num.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        }
        const resData = (params, ifParams) => {
            let sumCheck = document.getElementById('sumval');
            let monthtitle = document.getElementById('monthtitle');
            let quartertitle = document.getElementById('quartertitle');
            let marker = document.getElementById('marker');
            var style = 'none';
            marker.style.display = "none";
            axios
                .get("api/displayTable", {
                    params,
                    lang
                })
                .then(response => {
                    var regParams = Object.keys(ifParams).reduce(function (previous, key) {
                        var regKey = key.replace(/[\W_]+/g, "");
                        previous[regKey] = ifParams[key]
                        return previous;
                    }, {});

                    //console.log('regParams', regParams);

                    //if (regParams.grp && !regParams.country) {
                    //regParams.country = true;
                    //}

                    let data = response.data;
                    let htmlData = data.data;
                    console.log(data)
                    let tablelang = (lang == 'ka') ? 'https://cdn.datatables.net/plug-ins/1.10.20/i18n/Georgian.json' : 'http://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/English.json';
                    let align, rowWidth, rowBreak, suppStyle, tonsStyle, exportLang, stringTitle;
                    lang=='ka' ? stringTitle='მონაცემები ტრანსპორტირების სახეების მიხედვით ხელმისაწვდომია 2016 წლიდან.' :stringTitle='მონაცემები ტრანსპორტირების სახეების მიხედვით ხელმისაწვდომია 2016 წლიდან.';
                    if (htmlData.length == 1 && regParams.country && regParams.grp) {

                        delete regParams.country;
                    }

                    if (htmlData !== null) {
                        if (document.getElementById('table_id').innerHTML.trim() !== "") {
                            $('#table_id').DataTable().clear().destroy();
                        }
                        let html = '<thead>';
                        html += '<tr>';
                        Object.keys(htmlData[0]).forEach(function (key) {
                            if (key == 'grp') {
                                marker.style.display = "block";
                            }

                            if (key == 'year') {
                                align = 'center';
                            } else if (key == 'month' || key == 'flow' || key == 'quarter' || key == 'country' || key == 'trasout' || key == 'hssec' || key == 'hs2' || key == 'hs4' || key == 'hs6' || key == 'bec1' || key == 'sitc1') {
                                align = 'center';
                            } else if (key === "usd1000total" || key === "tonstotal" || key === "supputotal") {
                                align = 'right';
                            }
                            if (sumCheck.checked) {

                                if (key == 'month' || key == 'quarter') {
                                    style = 'contents';
                                    if (lang == 'ka') {
                                        mystr = ' (მოცემულ ველში ასახულია ის პერიოდები როცა განხორციელდა სავაჭრო ნაკადი)';
                                    } else {
                                        mystr = ' (Actual trade flows are presented in the current field)';
                                    }
                                } else {
                                    mystr = '';
                                    style = 'none';
                                }

                            }
                            if ((key !== 'type_name' && regParams[key] !== undefined) || (key === "usd1000total" || key === "tonstotal")) {
                                if(key=='transout' && $('#transout :selected').text()!==''){
                                    html += '<th style="text-align:' + align + ';">' + translate(lang, key) + ' <i class="fas fa-info-circle hideClass"  title="'+stringTitle+'"></i></th>';
                                }else{
                                html += '<th style="text-align:' + align + ';">' + translate(lang, key) + ' <i class="fas fa-info-circle hideClass" id="info" style="display:' + style + ';" title="' + mystr + '"></i></th>';
                            }
                            } else if (key == 'supputotal') {
                                html += '<th id="suppu" style="text-align:' + align + ';">' + translate(lang, key) + ' <i class="fas fa-info-circle hideClass" id="info" style="display:' + style + ';" title="' + mystr + '"></i></th>';
                                html += '<th id="" style="text-align:' + align + ';">' + translate(lang,'unit') + ' <i class="fas fa-info-circle hideClass" id="info" style="display:' + style + ';" title="' + mystr + '"></i></th>';
                                
                            }
                             

                        });
                        html += '</tr>';
                        html += '</thead>';
                        let name;
                        var sum = 0;
                        html += '<tbody>';
                        htmlData.forEach((value, key) => {
                            html += '<tr>';
                            Object.keys(value).forEach((nKey) => {
                                nKey == 'month' ? rowWidth = '23%' : rowWidth = '';
                                nKey == 'month' ? rowBreak = 'break-all' : rowBreak = '';
                                if ($('#hs2 :selected').val() == 77 || $('#hs4 :selected').val() == 7700 || $('#hs6 :selected').val() == 770000) {
                                    suppStyle = 'none';
                                } else {
                                    suppStyle = 'table-cell';
                                }
                                if ($('#hs6 :selected').val() == 271111) {
                                    tonsStyle = 'none';
                                } else {
                                    tonsStyle = 'table-cell';
                                }
                                if (nKey == 'year') {
                                    align = 'center';
                                } else
                                if (nKey == 'month' || nKey == 'flow' || nKey == 'quarter' || nKey == 'country' || nKey == 'trasout' || nKey == 'hssec' || nKey == 'hs2' || nKey == 'hs4' || nKey == 'hs6' || nKey == 'bec1' || nKey == 'sitc1') {
                                    align = 'left';
                                } else if (nKey === "usd1000total" || nKey === "tonstotal" || nKey === "supputotal") {
                                    align = 'right';
                                }
                                if ((nKey !== 'type_name' && regParams[nKey] !== undefined) || nKey == 'supputotal' || (nKey === "usd1000total" || nKey === "tonstotal")) {
                                    if (nKey == 'usd1000total') {
                                        html += '<td style="text-align:' + align + ';width:' + rowWidth + ';">' + currencyFormat(value[nKey]) + '</td>';
                                    } else if (nKey == 'supputotal') {
                                        if (($('#country :selected').text() !== '' || $('#grp :selected').text() !== '' || $('#transout :selected').text() !== '') && ($('#hs4 :selected').val() == 0 || $('#hs4 :selected').val() == 2716 || $('#hs6 :selected').val() == 271600 || $('#hs6 :selected').val() == 271121 || $('#hs6 :selected').val() == 0) && $('#country :selected').val() !== 'all') {
                                           if( document.getElementById("addTxt")){document.getElementById("addTxt").style.display = "block";}
                                           html += '<td style="text-align:' + align + ';width:' + rowWidth + ';display:' + suppStyle + ';">' + "..." + '</td>';
                                           html += '<td style="text-align:' + align + ';width:' + rowWidth + ';">' + "..." + '</td>';
                                          
                                        } else {
                                            html += '<td style="text-align:' + align + ';width:' + rowWidth + ';display:' + suppStyle + ';">' + currencyFormatTwo(value[nKey]) + '</td>';
                                            html += '<td style="text-align:' + align + ';width:' + rowWidth + ';display:' + suppStyle + ';">' + value['unit'] + '</td>';
                                           
                                        }
                                    } else if (nKey == 'tonstotal') {
                                        html += '<td style="text-align:' + align + ';width:' + rowWidth + ';display:' + tonsStyle + ';">' + currencyFormat(value[nKey]) + '</td>';
                                    } else {
                                        if (document.getElementById("addTxt")) {
                                            document.getElementById("addTxt").style.display = "none";
                                        }
                                        html += '<td style="text-align:' + align + ';width:' + rowWidth + ';word-break:' + rowBreak + ';">' + value[nKey] + '</td>';
                                    }

                                }
                            });

                            html += '</tr>';
                        })
                        html += '</tbody>';
                        document.getElementById("table_id").innerHTML = html;
                        var table = $("#table_id").DataTable({
                            pageLength: 30,
                            lengthChange: false,
                            searching: false,
                            language: {
                                url: tablelang
                            },
                            colReorder: true,
                            autoWidth: false,
                            sScrollX: "100%",
                            sScrollXInner: "100%",
                            bScrollCollapse: true,
                            colReorder: true,
                            dom: "lBfrtip",
                            buttons: [{
                                extend: 'excelHtml5',
                                text: exportLang = (lang == 'ka') ? 'ჩამოტვირთვა' : 'Download Data',
                                exportOptions: {
                                    format: {
                                        body: function (data, row, column, node) {
                                            // Strip $ from salary column to make it numeric


                                            var regExp =
                                                new RegExp('([0-9.+])(,)([0-9.+])', 'g');

                                            if (data.match(regExp)) {

                                                data = data.replace(regExp, "$1$3");

                                            }



                                            return data;
                                        }
                                    }
                                },
                                charset: 'utf-8',
                                fieldSeparator: ';',
                                fieldBoundary: '',
                                filename: 'Download Data',
                                bom: true,
                                action: function (e, dt, node, config) {
                                    $.fn.dataTable.ext.buttons.excelHtml5.action.call(this, e, dt, node, config);
                                }
                            }],
                        });
                        hideLoader();
                        if (($('#country :selected').text() !== '' || $('#grp :selected').text() !== '' || $('#transout :selected').text() !== '' || $('#hs4 :selected').val() == 0) && ($('#hs2 :selected').val() == 77 || $('#hs4 :selected').val() == 7700 || $('#hs6 :selected').val() == 770000)) {
                            document.getElementById("suppu").style.display = "none";
                        }
                    } else {
                        $('#table_id').DataTable().clear();
                        // hideLoader();
                    }
                })
                .catch(error => {
                    hideLoader();
                    console.log(error);
                });

        }


        const groupParamsByKey = (params) => [...params.entries()].reduce((acc, tuple) => {
            const [key, val] = tuple;
            if (acc.hasOwnProperty(key)) {
                if (Array.isArray(acc[key])) {
                    acc[key] = [...acc[key], val]
                } else {
                    acc[key] = [acc[key], val];
                }
            } else {
                acc[key] = val;
            }
            return acc;
        }, {});
        const changeTypeOption = function (SearchParams) {


            if (SearchParams.get('flow[]') && SearchParams.get('flow[]') == 'E') {
                SearchParams.set('flow[]', 'RE')
                SearchParams.append('flow[]', 'DE')
            } else if (SearchParams.get('flow[]') && SearchParams.get('flow[]') == 'CI') {

                SearchParams.set('flow[]', 'RE')
                SearchParams.append('flow[]', 'DE')
                SearchParams.append('flow[]', 'I')
                SearchParams.append('flow[]', 'I')
            } else if (SearchParams.get('flow[]') && SearchParams.get('flow[]') == 'BA') {


                SearchParams.set('flow[]', 'RE')
                SearchParams.append('flow[]', 'DE')
                SearchParams.append('flow[]', 'I')
                SearchParams.append('flow[]', 'BA')

            }

        }

        const submitBtn = document.getElementById('filterSubmit');
        const form = document.getElementById('filterForm');
        var formData = new FormData(form);
        formData.append('lang', lang);
        formData.append('default', 'true');
        var SearchParams = new URLSearchParams(formData);
        const entries = SearchParams.entries();
        const params = groupParamsByKey(SearchParams);
        changeTypeOption(SearchParams)
        resData(SearchParams, params);
        submitBtn.addEventListener('click', (event) => {
            event.preventDefault();
            form.dispatchEvent(new Event('submit'));
            //form.submit();
        })

        function logSubmit(e) {
            showLoader();
            var formData = new FormData(e.target);

            formData.append('lang', lang);
            formData.append('default', 'false');
            var SearchParams = new URLSearchParams(formData);


            changeTypeOption(SearchParams);

            const params = groupParamsByKey(SearchParams);
            resData(SearchParams, params);
            return false;
        }

        form.onsubmit = logSubmit;
        let chkMonth = document.querySelectorAll("[data-selectid='month']");
        chkMonth.checked = true;
        if (chkMonth.checked) {
            instance[chkMonth[0].dataset.selectid].config("disabled", false);
        }

        var arraofids=[
            'year',
            'quarter',
            'month',
            'cost',
            'country',
            'grp',
            'transout',
            'hssec',
            'hs2',
            'hs4',
            'hs6',
            'bec',
            'sitc',
        ];
        const addIDs=()=>{
            var buttonsnList=document.getElementsByClassName("tail-all");
            for(var i=0; i<buttonsnList.length;i++){
            buttonsnList[i].dataset.id=arraofids[i];
            buttonsnList[i].onclick = function(){
                instance[this.getAttribute('data-id')].label.innerHTML = `<span class="label-inner">${translate(lang, 'MultipleValuesChoose')}</span>`;
            }
            }
            
        }

        checkIDs.map(ids => {
            instance[ids].on('open', function (item, state) {
                
                addIDs();
            })
        })

      
        const checkDropdownID = () => {
           
            arraofids.map(items => {
            
                instance[items].on('change', function (item, state) {
                         if(instance[items].value()){
                        if(instance[items].value().length < 1 || instance[items].value().length == undefined){
                            instance[items].value().forEach((itm)=>{
                                var undo = instance[items].options.get(itm, '#');
                                instance[items].update({...undo, selected: true});
                            })
                        }else if (instance[items].value().length >1){
                            instance[items].label.innerHTML = `<span class="label-inner">${translate(lang, 'MultipleValues')}</span>`;
                           }else{
                            instance[items].value().forEach((itm)=>{
                                var undo = instance[items].options.get(itm, '#');
                                instance[items].update({...undo, selected: true});
                            })
                               
                           }
                        }
                });
            });
        }
        arraofids.map(items => {
        instance[items].on('change', function (item, state) {
        checkDropdownID();
         })
      });

      
      instance["parameters"].on('open', function (item, state) {
      var fooEls = document.querySelector("#groups > .tail-select > .select-dropdown > .dropdown-inner > .dropdown-action");
      var node = document.createElement("div");
      var textnode = document.createTextNode(translate(lang, "close")); 
      node.appendChild(textnode);   
      node.classList.add('mybtn');
      fooEls.appendChild(node);  
      fooEls.addEventListener('click', function(e) {
        instance["parameters"].close("true");
        });
    });
       
    instance["parameters"].on('close', function (item, state) {
        var fooEls = document.querySelector("#groups > .tail-select > .select-dropdown > .dropdown-inner > .dropdown-action > .mybtn");
        fooEls.remove();
      });
        var arrToAdd=[
            'year',
            'quarter',
            'month',
            'cost',
            'country',
            'grp',
            'transout',
            'hssec',
            'hs2',
            'hs4',
            'hs6',
            'bec',
            'sitc',
        ];
        let dropdownNames = [
            "flow",
            "year",
            "quarter",
            "hssec",
            "month",
            "cost",
            "hs2",
            "hs4",
            "hs6",
            "bec",
            "sitc",
            "country",
            "grp",
            "transout",
           
            
        ];
        const addChildren=()=>{
            
            var node = document.createElement("div");              
            var textnode = document.createTextNode(translate(lang, "close")); 
            var dropdownList=document.getElementsByClassName("dropdown-action");
            node.classList.add('mybtn');
            node.appendChild(textnode); 
            for(var i=0; i<dropdownList.length;i++){
            node.dataset.id=arrToAdd[i];
            dropdownList[i].appendChild(node.cloneNode(true)); 
            }
            
        }
        const removeChildren=()=>{
            var buttonList=document.getElementsByClassName("mybtn");
            for(var u=0; u<buttonList.length;u++){
                while (buttonList.length > 0) {
                    buttonList[u].remove();
                }
            }
            
        }
        
        
        dropdownNames.map(itm => {
            instance[itm].on('open', function (item, state) {
                removeChildren();
                addChildren();
            });
    
            instance[itm].on('close', function (item, state) {
                removeChildren();
            });
    
        });

      
    
        checkIDs.map(itms => {
            instance[itms].on('open', function (item, state) {
                var clsButton =document.querySelectorAll('[data-id]');
                if(clsButton){
                    for(var i = 0; i<clsButton.length; i++) {
                        clsButton[i].addEventListener('click', function(e) {
                            instance[e.target.dataset.id].close("true");
                            var dropdownLabel = document.getElementById(itms);
                            var optionlength = dropdownLabel.selectedOptions.length;
                            removeChildren();
                            });
                    }
               
                }
            });
    
        
        });
        

        var items = {};
        const getDropdownByName = () => {
           
            var el;
            
            dropdownNames.forEach(function(item) {
               var names = document.getElementById(item);
               names.onchange = function(e) {
                   el = e.currentTarget.id;
                   items[el] = translate(lang, el);
                   instance["parameters"].config("disabled",false);
                   instance["parameters"].config("items",items);
                   if( instance["parameters"]){
                       if($('#flow :selected').val()=='DE' ||  $('#flow :selected').val()=='RE'){
                    instance["parameters"].options.remove("year","#", true);
                }
                }
               }
              
               
           })
           
        }

      getDropdownByName();
      
       
        
        const DisableYear = (sflow) => {
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
            } 
            else {
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
       
        instance['flow'].on('change', function(item, state) {
         
            DisableYear(item.key);
            if(item.key=='RE' || item.key=='DE' ){
            instance['year'].options.all("unselect","#");
        }
        });
        instance['year'].on('change', function(item, state) {
            //var assign = assignFlow;
            var iterate, div_list, div_array;
            //DisableYear(item.key);
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
        });
        

        const hssTitle = () => {
            var langs = {
                ka: [
                    "ცოცხალი ცხოველები; ცხოველური წარმოშობის პროდუქტები",
                    "მცენარეული წარმოშობის პროდუქტები",
                    "ცხოველური ან მცენარეული წარმოშობის ცხიმები და ზეთები და მათი გახლეჩის პროდუქტები; მზა საკვები ცხიმები; ცხოველური ან მცენარეული წარმოშობის ცვილები",
                    "კვების მზა პროდუქტები; ალკოჰოლიანი და უალკოჰოლო სასმელები და ძმარი; თამბაქო და მისი შემცვლელები",
                    "მინერალური პროდუქტები",
                    "ქიმიური და მასთან დაკავშირებული მრეწველობის დარგების პროდუქცია",
                    "პლასტმასები და მათი ნაწარმი; კაუჩუკი, რეზინი და მათი ნაწარმი",
                    "დაუმუშავებელი ტყავები, გამოქნილი ტყავი, ნატურალური ბეწვი და მათი ნაწარმი; სასარაჯო-საუნაგირე ნაწარმი და აკაზმულობა; სამგზავრო ნივთები, ქალის ჩანთები და ანალოგიური საქონელი; ნაწარმი ცხოველების ნაწლავებისაგან (აბრეშუმის ჭიის ფიბრიონის ბოჭკოს გარდა)",
                    "მერქანი და მერქნის ნაწარმი; ხის ნახშირი; კორპი და მისი ნაწარმი; ჩალის, ალფის ან სხვა მასალის წნული; კალათები და სხვა მოწნული ნაწარმი",
                    "მასა მერქნის ან სხვა ბოჭკოვანი და ცელულოზური მასალებისგან; რეგენერირებული ქაღალდი ან მუყაო (მაკულატურა და ნარჩენები); ქაღალდი, მუყაო და მათი ნაწარმი",
                    "ტექსტილის (საფეიქრო) მასალები და ტექსტილის ნაწარმი",
                    "ფეხსაცმელი, თავსაბურავები, ქოლგები, მზისაგან დასაცავი ქოლგები, ხელჯოხები და ხელჯოხ-დასაჯდომები, შოლტები, მათრახები და მათი ნაწილები; დამუშავებული ნაკრტენი და მისი ნაწარმი; ხელოვნური ყვავილები; ნაწარმი ადამიანის თმისაგან",
                    "ქვის, თაბაშირის, ცემენტის, აზბესტის, ქარსის ან ანალოგიური მასალების ნაწარმი; კერამიკული ნაწარმი; მინა და მისი ნაწარმი",
                    "მარგალიტი ბუნებრივი ან კულტივირებული, ძვირფასი ან ნახევრადძვირფასი ქვები; ძვირფასი ლითონები, ძვირფასი ლითონებით მიტკეცილი ლითონები და მათი ნაწარმი; ბიჟუტერია; მონეტები",
                    "არაძვირფასი ლითონები და მათი ნაწარმი",
                    "მანქანები, მოწყობილობები და მექანიზმები; ელექტროტექნიკური მოწყობილობები; მათი ნაწილები; ბგერათჩამწერი და ბგერათაღმწარმოებელი აპარატურა; სატელევიზიო გამოსახულებისა და ხმის ჩამწერი და აღმწარმოებლი აპარატურა, მათი ნაწილები და საკუთნოები",
                    "მიწისზედა სატრანსპორტო საშუალებები, საფრენი აპარატები, მცურავი საშუალებები და ტრანსპორტთან დაკავშირებული მოწყობილობები და დანადგარები",
                    "ინსტრუმენტები და აპარატები ოპტიკური, ფოტოგრაფიული, კინემატოგრაფიული, საზომი, საკონტროლო, პრეციზიული, სამედიცინო ან ქირურგიული; ყველა სახის საათები; მუსიკალური ინსტრუმენტები; მათი ნაწილები და საკუთნოები",
                    "იარაღი და საბრძოლო მასალები; მათი ნაწილები და საკუთნოები",
                    "სხვადასხვა სამრეწველო საქონელი",
                    "ხელოვნების ნიმუშები, საკოლექციო ნივთები და ანტიკვარიატი",
                    "კლასიფიკაციის განსაკუთრებული პირობები; საქონელი, რომელიც არ არის განკუთვნილი ეკონომიკური საქმიანობისათვის;"
                ],
                en: [
                    "Live animals; animal products",
                    "Vegetable products",
                    "Animal or vegetable fats and oils and their cleavage products; prepared edible fats; animal or vegetable waxes",
                    "Prepared foodstuffs; beverages, spirits and vinegar; tobacco and manufactured tobacco substitutes",
                    "Mineral products",
                    "Products of the chemical or allied industries",
                    "Plastics and articles thereof; rubber and articles thereof",
                    "Raw hides and skins, leather, fur skins and articles thereof; saddlery and harness; travel goods, handbags and similar containers; articles of animal gut (other than silk-worm gut)",
                    "Wood and articles of wood; wood charcoal; cork and articles of cork; manufactures of straw, of esparto or of other plaiting materials; basketware and wickerwork",
                    "Pulp of wood or of other fibrous cellulosic material; recovered (waste and scrap) paper or paperboard; paper and paperboard and articles thereof",
                    "Textiles and textile articles",
                    "Footwear, headgear, umbrellas, sun umbrellas, walking-sticks, seat-sticks, whips, riding-crops and parts thereof; prepared feathers and articles made therewith; artificial flowers; articles of human hair",
                    "Articles of stone, plaster, cement, asbestos, mica or similar materials; ceramic products; glass and glassware",
                    "Natural or cultured pearls, precious or semi-precious stones, precious metals, metals clad with precious metal and articles thereof; imitation jewellery; coin",
                    "Base metals and articles of base metal",
                    "Machinery and mechanical appliances; electrical equipment; parts thereof; sound recorders and reproducers, television image and sound recorders and reproducers, and parts and accessories of such articles",
                    "Vehicles, aircraft, vessels and associated transport equipment",
                    "Optical, photographic, cinematographic, measuring, checking, precision, medical or surgical instruments and apparatus; clocks and watches; musical instruments; parts and accessories thereof",
                    "Swords, cutlasses and similar arms and parts, scabbards and sheaths therefor",
                    "Miscellaneous manufactured articles",
                    "Works of art, collector's pieces and antiques",
                    "Special classification provisions; Goods not intended for economic activity"
                ]
            }
            var x = document.getElementById("hssHover");
            var y = x.childNodes[3].childNodes[1].childNodes[1].childNodes[1].childNodes;

            for (var i = 0; i < y.length; i++) {
                y[i].setAttribute("title", langs[lang][i]);
            }
        }
        instance['hssec'].on('open', function (item, state) {
            hssTitle();
        });


        const selectsData = async (tableName, columnName) => {

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

        const renderSelects = async (divName, tableName, columnName) => {


            var value, desc, red;

            const hs2 = await selectsData(tableName, columnName);
            red = Object.keys(hs2.data.data).reduce(function (previous, key) {
                value = tableName == 'CountryGroup' ? key : hs2.data.data[key];
                desc = tableName == 'CountryGroup' ? {
                    description: hs2.data.data[key]
                } : {};
                previous[key] = {
                    value: value,
                    selected: true,
                    group: "#",
                    disabled: false,
                    ...desc
                }
                return previous
            }, {});

            instance[divName].options.add({
                ...red
            });
            instance[divName].options.unselect({
                ...red
            });


        }
        await renderSelects('grp', 'CountryGroup', 'name');
    

        const getFirstDigit =(x)=> {
            while (x > 9) {
                x /= 10;
            }
            return x;
        }
        Array.prototype.remove = function () {
            var what, a = arguments,
                L = a.length,
                ax;
            while (L && this.length) {
                what = a[--L];
                while ((ax = this.indexOf(what)) !== -1) {
                    this.splice(ax, 1);
                }
            }
            return this;
        };

        const getAllHSData = (key,length) => {
            axios.get("api/getAllHSData", {
                    params: {
                        codes: key,
                        len: length,
                        lang: lang
                    }
                })
                .then(response => {
                   
                     let data = response.data;
                     let dataHS2 = data.hs2;
                     let dataHS4 = data.hs4;
                     let dataHS6 = data.hs6;
                     if (dataHS2 && dataHS4 && dataHS6) {
                        if(response.data.length==2 || response.data.length==3){
                         GetByID('hs4').innerHTML = dataHS4;
                         GetByID('hs6').innerHTML = dataHS6;
                        }else if(response.data.length==4 || response.data.length==5){
                         GetByID('hs2').innerHTML = dataHS2; 
                         GetByID('hs6').innerHTML = dataHS6;
                        } else if(response.data.length==6 || response.data.length==7){
                         GetByID('hs2').innerHTML = dataHS2;
                         GetByID('hs4').innerHTML = dataHS4;
                        }
                     }else {
                     GetByID('hs2').innerHTML = dataHS2;
                     GetByID('hs4').innerHTML = dataHS4;
                     GetByID('hs6').innerHTML = dataHS6;
                    }
                    instance['hs2'].reload();
                    instance['hs4'].reload();
                    instance['hs6'].reload();
                })
                .catch(error => {
                    console.log(error);
                });
        }


        const getHSData = (key, length) => {
            axios.get("api/filterHSData", {
                    params: {
                        codes: key,
                        len: length,
                        lang: lang
                    }
                })
                .then(response => {
                     let data = response.data;
                     let dataHS2 = data.hs2;
                     let dataHS4 = data.hs4;
                     let dataHS6 = data.hs6;
                   if (dataHS2 && dataHS4 && dataHS6) {
                       if(response.data.length==2 || response.data.length==3){
                        GetByID('hs4').innerHTML = dataHS4;
                        GetByID('hs6').innerHTML = dataHS6;
                       }else if(response.data.length==4 || response.data.length==5){
                        GetByID('hs2').innerHTML = dataHS2; 
                        GetByID('hs6').innerHTML = dataHS6;
                       } else if(response.data.length==6 || response.data.length==7){
                        GetByID('hs2').innerHTML = dataHS2;
                        GetByID('hs4').innerHTML = dataHS4;
                       }
                    } else {
                     GetByID('hs2').innerHTML = "";
                     GetByID('hs4').innerHTML = "";
                     GetByID('hs6').innerHTML = "";
                    }
                    //instance['hs2'].reload();
                    instance['hs4'].reload();
                    instance['hs6'].reload();
                })
                .catch(error => {
                    console.log(error);
                });
        }


        var isHs2Changed = document.getElementById('hs2').id;
        var isHs4Changed = document.getElementById('hs4').id
        var isHs6Changed = document.getElementById('hs6').id;
        var arrToCheck=[isHs2Changed];
        var itemKey,selected = [];
        var reg = /^-?\d{2}/;
       arrToCheck.forEach((el) => {
            instance[el].on('change', function (item, state) {
                const len = Math.ceil(Math.log10(item.key + 1));
                item.key<10? itemKey=0+getFirstDigit(item.key) : itemKey=item.key.toString().match(reg)[0]; 
            if (state == 'select') {
                selected.push(itemKey);
                getHSData(selected,len);
            }else if(state == 'unselect'){
                selected.remove(itemKey);
                getAllHSData(selected,len);
            }
            });

        })




        var isHs4Check = document.querySelector('[name="hs4"]');
        var isHs6Check = document.querySelector('[name="hs6"]');


        if (instance['cost']) {

            instance['cost'].options.disable('tons', '#');
            instance['cost'].options.disable('suppu', '#')

        }

        [isHs4Check, isHs6Check].forEach((el) => {
            el.addEventListener('change', (event) => {

                var isSomeCheck = [isHs4Check, isHs6Check].some(el => el.checked == true)


               

                if (isSomeCheck) {

                    instance['cost'].options.enable('tons', '#');
                    instance['cost'].options.enable('suppu', '#')

                } else {

                    instance['cost'].options.disable('tons', '#');
                    instance['cost'].options.disable('suppu', '#')
                }

            })

        })




        let sitcGroup = document.querySelectorAll('input[dataName="groupTwo"]');
        let sitcGroup2 = document.querySelectorAll('input[dataName="groupThree"]');

        [...sitcGroup, ...sitcGroup2].forEach((el) => {


            el.addEventListener('change', (event) => {

                var isSomeCheck = [...sitcGroup, ...sitcGroup2].some(el => el.checked == true);

                if (isSomeCheck) {

                    instance['flow'].options.disable('CI', '#');
                    instance['flow'].options.disable('BA', '#')

                } else {

                    instance['flow'].options.enable('CI', '#');
                    instance['flow'].options.enable('BA', '#')
                }

            })

        })


        if (instance['flow']) {

            instance['flow'].on('change', function (item, state) {

                if (this.value() == 'CI' || this.value() == 'BA') {

                    [...sitcGroup, ...sitcGroup2].map((el) => {

                        el.disabled = true;
                        el.style.backgroundColor = "#fff";
                    })

                } else {

                    [...sitcGroup, ...sitcGroup2].map((el) => {

                        el.disabled = false
                        el.style.backgroundColor = "";
                    })

                }

                //instance['flow'].options.disable('all', '#')

            })

        }





        if (instance['country']) {

            if (instance['country'].value().includes("world")) {
                instance['country'].options.disable('all', '#');
            } else if (instance['country'].value().includes("all")) {
                instance['country'].options.disable('world', '#');
            }

        }

        instance['country'].on('change', function (item, state) {



            if (item.key == 'world' && (state == 'select' || state == 'unselect')) {

                if (instance['country'].options.get('all', '#').disabled == true) {

                    instance['country'].options.handle('enable', 'all', '#', true)

                } else if (instance['country'].options.get('all', '#').disabled == false) {

                    instance['country'].options.handle('disable', 'all', '#', true)
                }



            } else if (item.key == 'all' && (state == 'select' || state == 'unselect')) {

                if (instance['country'].options.get('world', '#').disabled == true) {

                    instance['country'].options.handle('enable', 'world', '#', true)

                } else if (instance['country'].options.get('world', '#').disabled == false) {

                    instance['country'].options.handle('disable', 'world', '#', true)
                }
            }

            var That = this;


            if (


                ((item.key == 'all' || item.key == 'world') && state == 'select')
            ) {

                Object.keys(That.options.items['#']).map(
                    (elm) => {

                        if (That.options.is('select', elm, '#')) {

                            if (elm !== 'all' && elm !== 'world') {



                                That.options.unselect(elm, '#')

                            }


                        }


                    })



            } else if (
                (item.key !== 'all' || item.key !== 'world') && state == 'select') {


                Object.keys(That.options.items['#']).map(
                    (elm) => {


                        if (That.options.is('select', elm, '#') && (
                                elm == 'all' ||
                                elm == 'world')) {

                            That.options.unselect(elm, '#')

                        }

                    }
                )


            }


            if (state == 'select') {
                //selectsInstance.config("disabled", true);
                //selectsInstance.options.all('unselect');
            } else {
                //instance['country'].config("disabled", false);
                //selectsInstance.config("disabled", false);
               // instance.options.all('unselect');
            }
        });
        var countryArr = [];
        const getAllCountries = (par) => {
            axios.get("api/getAllCountry", {
                    params: {
                        code: par,
                        lang: lang
                    }
                })
                .then(response => {
                    let data = response.data;
                    let htmlData = data.html;
                    if (htmlData) {
                        GetByID('country').innerHTML = htmlData;
                    } else {
                        GetByID('country').innerHTML = "";
                    }
                    instance['country'].reload();
                })
                .catch(error => {
                    console.log(error);
                });
        }
        const getCountry = (param) => {
            axios.get("api/getCountry", {
                    params: {
                        code: param,
                        lang: lang
                    }
                })
                .then(response => {
                    let data = response.data;
                    let htmlData = data.html;
                    if (htmlData) {
                        GetByID('country').innerHTML = htmlData;
                    } else {
                        GetByID('country').innerHTML = "";
                    }
                    instance['country'].reload();
                })
                .catch(error => {
                    console.log(error);
                });
        }
        instance && instance["grp"].on('change', function (item, state) {
            if (state == 'select') {
                countryArr.push(item.value);
                getCountry(countryArr)
                // instance['country'].options.all('unselect');
                //instance['country'].config("disabled", true);
            } else if (state == 'unselect') {

                countryArr.remove(item.value);
                console.log(countryArr);
                //selectsInstance.config("disabled", false);
                getAllCountries(countryArr);
                instance['country'].options.all('unselect');
                //instance['country'].config("disabled", false);
            }
        });


    }


});
