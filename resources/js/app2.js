import { translate } from './helper';


const GetByID = id => {
    return document.getElementById(id);
};



$.extend($.expr[':'], {
    role: function(obj, index, meta) {
        return $(obj).is(":not([role])");
    }
})

document.addEventListener("DOMContentLoaded", async() => {


    var all = document.getElementById('all');
    var world = document.getElementById('world');


    var segments = window.location.pathname.split('/').filter(function(i) { return i !== "" });
    //secondLastSegment = segments[segments.length];

    if (segments[1] == "map") {

        const importMap = await
        import ( /* webpackChunkName: "dynamicMap"*/ './page/map');
        const mapConst = new importMap.Map();
        mapConst.render()

        //let  mapObj = new map();
        //console.log('mapConst', mapConst)
        //console.log('axsios', axios)


    } else {


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
            "grp",
            "transout",
            "cost"
        ];

        let dropdownNames = [
            "hssec",
            "hs2",
            "hs4",
            "hs6",
            "bec",
            "sitc",
            "country",
            "grp",
            "transout",
        ];
        var instance = {};
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

            instance[id] = tail("select#" + id, {
                multiSelectAll:
                    !isType &&
                    !isCost &&
                    !isYear &&
                    !isQuarter && !isCountry ?
                    true : false,
                multiple: isType || isGrp ? false : true,
                deselect: true,
                placeholder: '',
                search:
                    !isType &&
                    !isGrp &&
                    !isCost &&
                    !isYear &&
                    !isQuarter &&
                    !isMonth ?
                    true : false,
                multiShowCount: false,
                multiContainer: length > 1 ? false : true,
                locale: lang,
                searchMinLength: 1,
                sortItems: false,
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
        let allCheckboxes = [
            "hssec",
            "hs2",
            "hs4",
            "hs6",
            "bec",
            "hs2",
            "hs4",
            "hs6",
            "bec",
            "sitc"
        ];

        let disableCheck = document.querySelectorAll(".item1");
        var allcheck;
        Array.from(disableCheck).forEach(link => {
            link.addEventListener('click', function(event) {
                var mykey = event.currentTarget.children[0].children[0].children[1].dataset.selectid;
                if (mykey == 'hssec') {
                    instance['hs2'].options.all('unselect');
                    instance['hs4'].options.all('unselect');
                    instance['hs6'].options.all('unselect');
                    instance['bec'].options.all('unselect');
                    instance['sitc'].options.all('unselect');

                    instance['bec'].config("disabled", true);
                    instance['sitc'].config("disabled", true);
                    allcheck = document.querySelectorAll("[data-selectid='hs2']");
                    [...allcheck].forEach((el) => {
                        el.checked = false;
                        console.log(el);
                    });

                    allcheck = document.querySelectorAll("[data-selectid='hs4']");
                    [...allcheck].forEach((el) => {
                        el.checked = false;
                        console.log(el);
                    });

                    allcheck = document.querySelectorAll("[data-selectid='hs6']");
                    [...allcheck].forEach((el) => {
                        el.checked = false;
                        console.log(el);
                    });

                    allcheck = document.querySelectorAll("[data-selectid='bec']");
                    [...allcheck].forEach((el) => {
                        el.checked = false;
                        console.log(el);
                    });

                    allcheck = document.querySelectorAll("[data-selectid='sitc']");
                    [...allcheck].forEach((el) => {
                        el.checked = false;
                        console.log(el);
                    });

                } else if (mykey == 'hs2') {

                    instance['hssec'].options.all('unselect');
                    instance['hs4'].options.all('unselect');
                    instance['hs6'].options.all('unselect');
                    instance['bec'].options.all('unselect');
                    instance['sitc'].options.all('unselect');

                    instance['bec'].config("disabled", true);
                    instance['sitc'].config("disabled", true);
                    allcheck = document.querySelectorAll("[data-selectid='hssec']");
                    [...allcheck].forEach((el) => {
                        el.checked = false;
                        console.log(el);
                    });

                    allcheck = document.querySelectorAll("[data-selectid='hs4']");
                    [...allcheck].forEach((el) => {
                        el.checked = false;
                        console.log(el);
                    });

                    allcheck = document.querySelectorAll("[data-selectid='hs6']");
                    [...allcheck].forEach((el) => {
                        el.checked = false;
                        console.log(el);
                    });

                    allcheck = document.querySelectorAll("[data-selectid='bec']");
                    [...allcheck].forEach((el) => {
                        el.checked = false;
                        console.log(el);
                    });

                    allcheck = document.querySelectorAll("[data-selectid='sitc']");
                    [...allcheck].forEach((el) => {
                        el.checked = false;
                        console.log(el);
                    });

                } else if (mykey == 'hs4') {
                    instance['hs2'].options.all('unselect');
                    instance['hssec'].options.all('unselect');
                    instance['hs6'].options.all('unselect');
                    instance['bec'].options.all('unselect');
                    instance['sitc'].options.all('unselect');

                    instance['bec'].config("disabled", true);
                    instance['sitc'].config("disabled", true);
                    allcheck = document.querySelectorAll("[data-selectid='hs2']");
                    [...allcheck].forEach((el) => {
                        el.checked = false;
                        console.log(el);
                    });

                    allcheck = document.querySelectorAll("[data-selectid='hssec']");
                    [...allcheck].forEach((el) => {
                        el.checked = false;
                        console.log(el);
                    });

                    allcheck = document.querySelectorAll("[data-selectid='hs6']");
                    [...allcheck].forEach((el) => {
                        el.checked = false;
                        console.log(el);
                    });

                    allcheck = document.querySelectorAll("[data-selectid='bec']");
                    [...allcheck].forEach((el) => {
                        el.checked = false;
                        console.log(el);
                    });

                    allcheck = document.querySelectorAll("[data-selectid='sitc']");
                    [...allcheck].forEach((el) => {
                        el.checked = false;
                        console.log(el);
                    });

                } else if (mykey == 'hs6') {
                    instance['hs2'].options.all('unselect');
                    instance['hs4'].options.all('unselect');
                    instance['hssec'].options.all('unselect');
                    instance['bec'].options.all('unselect');
                    instance['sitc'].options.all('unselect');

                    instance['bec'].config("disabled", true);
                    instance['sitc'].config("disabled", true);
                    allcheck = document.querySelectorAll("[data-selectid='hs2']");
                    [...allcheck].forEach((el) => {
                        el.checked = false;
                        console.log(el);
                    });

                    allcheck = document.querySelectorAll("[data-selectid='hs4']");
                    [...allcheck].forEach((el) => {
                        el.checked = false;
                        console.log(el);
                    });

                    allcheck = document.querySelectorAll("[data-selectid='hssec']");
                    [...allcheck].forEach((el) => {
                        el.checked = false;
                        console.log(el);
                    });

                    allcheck = document.querySelectorAll("[data-selectid='bec']");
                    [...allcheck].forEach((el) => {
                        el.checked = false;
                        console.log(el);
                    });

                    allcheck = document.querySelectorAll("[data-selectid='sitc']");
                    [...allcheck].forEach((el) => {
                        el.checked = false;
                        console.log(el);
                    });

                } else if (mykey == 'bec') {
                    instance['hs2'].options.all('unselect');
                    instance['hs4'].options.all('unselect');
                    instance['hs6'].options.all('unselect');
                    instance['hssec'].options.all('unselect');
                    instance['sitc'].options.all('unselect');

                    instance['hssec'].config("disabled", true);
                    instance['hs2'].config("disabled", true);
                    instance['hs4'].config("disabled", true);
                    instance['hs6'].config("disabled", true);
                    allcheck = document.querySelectorAll("[data-selectid='hs2']");
                    [...allcheck].forEach((el) => {
                        el.checked = false;
                        console.log(el);
                    });

                    allcheck = document.querySelectorAll("[data-selectid='hs4']");
                    [...allcheck].forEach((el) => {
                        el.checked = false;
                        console.log(el);
                    });

                    allcheck = document.querySelectorAll("[data-selectid='hs6']");
                    [...allcheck].forEach((el) => {
                        el.checked = false;
                        console.log(el);
                    });

                    allcheck = document.querySelectorAll("[data-selectid='hssec']");
                    [...allcheck].forEach((el) => {
                        el.checked = false;
                        console.log(el);
                    });

                    allcheck = document.querySelectorAll("[data-selectid='sitc']");
                    [...allcheck].forEach((el) => {
                        el.checked = false;
                        console.log(el);
                    });
                } else if (mykey == 'sitc') {
                    instance['hs2'].options.all('unselect');
                    instance['hs4'].options.all('unselect');
                    instance['hs6'].options.all('unselect');
                    instance['bec'].options.all('unselect');
                    instance['hssec'].options.all('unselect');

                    instance['hssec'].config("disabled", true);
                    instance['hs2'].config("disabled", true);
                    instance['hs4'].config("disabled", true);
                    instance['hs6'].config("disabled", true);
                    allcheck = document.querySelectorAll("[data-selectid='hs2']");
                    [...allcheck].forEach((el) => {
                        el.checked = false;
                        console.log(el);
                    });

                    allcheck = document.querySelectorAll("[data-selectid='hs4']");
                    [...allcheck].forEach((el) => {
                        el.checked = false;
                        console.log(el);
                    });

                    allcheck = document.querySelectorAll("[data-selectid='hs6']");
                    [...allcheck].forEach((el) => {
                        el.checked = false;
                        console.log(el);
                    });

                    allcheck = document.querySelectorAll("[data-selectid='bec']");
                    [...allcheck].forEach((el) => {
                        el.checked = false;
                        console.log(el);
                    });

                    allcheck = document.querySelectorAll("[data-selectid='hssec']");
                    [...allcheck].forEach((el) => {
                        el.checked = false;
                        console.log(el);
                    });

                }

                // allCheckboxes = allCheckboxes.filter(function(item) {
                //     return item !== mykey;
                // })
                // console.log("getAll", mykey)
                // var arrayLength = allCheckboxes.length;
                // for (var i = 0; i < arrayLength; i++) {
                //     let getAll = document.querySelectorAll('data-selected-id[' + allCheckboxes[i] + ']');

                // }
            });
        });
        let setLabel;
        if (lang == 'ka') {
            setLabel = 'მონიშნულია რამდენიმე';
        } else {
            setLabel = 'Multiple values';
        }
        checkIDs.map(items => {
            var Label = document.getElementById(items);
            var optionLen = Label.selectedOptions.length;
            if (optionLen > 1) {
                instance[items].config("placeholder", setLabel);
                instance[items].config("stayOpen", true);
            } else {
                instance[items].config("multiContainer", true);
                instance[items].config("stayOpen", true);
            }
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

        var ToDisable = document.querySelectorAll('input[dataName="groupOne"]');;
        [...ToDisable].forEach((el) => {
            el.addEventListener('click', function(event) {
                console.log(event.target.dataset.selectid);
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
            .get("api/getDataHs2", { params: { lang: lang } })
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
            if (cb.type !== 'checkbox') { return true; }
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
                clearSelect(arr);
                activeSelect(instance, selectId, !_this.checked);
            } else if (type == "groupThree") {
                instance[selectId].options.all('unselect');
                clearSelect(arr);
                activeSelect(instance, selectId, !_this.checked)
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
                activeOrDisabledChekbox([...checkboxses], 'groupThree',
                    false)
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
            return num.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        }
        const resData = (params, ifParams) => {
            let sumCheck = document.getElementById('sumval');
            let monthtitle = document.getElementById('monthtitle');
            let quartertitle = document.getElementById('quartertitle');
            var style = 'none';

            axios
                .get("api/displayTable", {
                    params,
                    lang
                })
                .then(response => {
                    var regParams = Object.keys(ifParams).reduce(function(previous, key) {
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
                    console.log(data);
                    // let sum1 = document.getElementById("sum").innerHTML = `${ data.sum.toFixed(1)}`;
                    let tablelang = (lang == 'ka') ? 'https://cdn.datatables.net/plug-ins/1.10.20/i18n/Georgian.json' : 'http://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/English.json';
                    let exportLang;
                    let align;
                    let rowWidth;

                    if (htmlData.length == 1 && regParams.country && regParams.grp) {

                        delete regParams.country;
                    }

                    if (htmlData !== null) {
                        if (document.getElementById('table_id').innerHTML.trim() !== "") {
                            $('#table_id').DataTable().clear().destroy();
                        }
                        let html = '<thead>';
                        html += '<tr>';
                        Object.keys(htmlData[0]).forEach(function(key) {

                            if (key == 'year') { align = 'center'; } else if (key == 'month' || key == 'flow' || key == 'quarter' || key == 'country' || key == 'trasout' || key == 'hssec' || key == 'hs2' || key == 'hs4' || key == 'hs6' || key == 'bec1' || key == 'sitc1') { align = 'center'; } else if (key === "usd1000total" || key === "tonstotal" || key === "supputotal") { align = 'right'; }
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
                            if ((key !== 'type_name' && regParams[key] !== undefined) || (key === "usd1000total" || key === "tonstotal" || key === "supputotal")) {
                                html += '<th style="text-align:' + align + ';">' + translate(lang, key) + ' <i class="fas fa-info-circle hideClass" id="info" style="display:' + style + ';" title="' + mystr + '"></i></th>';
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
                                nKey == 'hssec' || nKey == 'hs2' || nKey == 'hs4' ||
                                    nKey == 'hs6' || nKey == 'bec1' || nKey == 'sitc1' ? rowWidth = '42%' : rowWidth = '';
                                if (nKey == 'year') { align = 'center'; } else
                                if (nKey == 'month' || nKey == 'flow' || nKey == 'quarter' || nKey == 'country' || nKey == 'trasout' || nKey == 'hssec' || nKey == 'hs2' || nKey == 'hs4' || nKey == 'hs6' || nKey == 'bec1' || nKey == 'sitc1') { align = 'left'; } else if (nKey === "usd1000total" || nKey === "tonstotal" || nKey === "supputotal") { align = 'right'; }
                                if ((nKey !== 'type_name' && regParams[nKey] !== undefined) || nKey == 'supputotal' || (nKey === "usd1000total" || nKey === "tonstotal")) {
                                    if (nKey == 'usd1000total' || nKey == 'tonstotal' || nKey == 'supputotal') {
                                        html += '<td style="text-align:' + align + ';width:' + rowWidth + ';">' + currencyFormat(value[nKey]) + '</td>';
                                    } else {
                                        html += '<td style="text-align:' + align + ';width:' + rowWidth + ';">' + value[nKey] + '</td>';
                                    }
                                }
                            });

                            html += '</tr>';
                        })
                        html += '</tbody>';
                        document.getElementById("table_id").innerHTML = html;
                        $("#table_id").DataTable({
                            pageLength: 30,
                            lengthChange: false,
                            searching: false,
                            language: {
                                url: tablelang
                            },
                            dom: "B<'#colvis row'><'row'><'row'<'col-md-6'l><'col-md-6'f>r>t<'row'<'col-md-4'i>><'row'p>",
                            buttons: [{
                                extend: 'excelHtml5',
                                text: exportLang = (lang == 'ka') ? 'ჩამოტვირთვა' : 'Download Data',
                                exportOptions: {
                                    format: {
                                        body: function(data, row, column, node) {
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
                                action: function(e, dt, node, config) {
                                    $.fn.dataTable.ext.buttons.excelHtml5.action.call(this, e, dt, node, config);
                                }
                            }],
                        });
                        hideLoader();
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
        const changeTypeOption = function(SearchParams) {


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


            changeTypeOption(SearchParams)


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

        let labelName;
        let chooseOne;
        if (lang == 'ka') {
            labelName = 'მონიშნულია რამდენიმე';
            chooseOne = 'აირჩიეთ';
        } else {
            labelName = 'Multiple values';
            chooseOne = 'Select';
        }
        const checkDropdownID = () => {
            checkIDs.map(items => {
                var label = document.getElementById(items);
                var optionlength = label.selectedOptions.length;
                if (optionlength > 1) {
                    instance[items].config("placeholder", labelName);
                    instance[items].config("stayOpen", true);
                } else {
                    instance[items].config("multiContainer", true);
                    instance[items].config("stayOpen", true);
                }
                if (optionlength == 0) {
                    instance[items].config("placeholder", chooseOne);
                }
                instance[items].on('change', function(item, state) {
                    var label1 = document.getElementById(items);
                    var optionlength1 = label1.selectedOptions.length;
                    if (optionlength1 > 1) {
                        instance[items].config("multiContainer", false);
                        instance[items].config("stayOpen", true);
                        instance[items].updateLabel(labelName);
                    } else {
                        instance[items].config("multiContainer", true);
                        instance[items].config("stayOpen", true);
                    }
                });
            });
        }
        checkDropdownID();
        const closeTail = () => {
            var focusName = document.querySelectorAll(".item1");
            if (focusName) {
                focusName.forEach(function(_el, idx) {
                    _el.addEventListener("mouseenter", function(e) {});
                    _el.addEventListener("mouseleave", function(e) {
                        checkIDs.map(currItem => {
                            instance[currItem].config("stayOpen", false);
                        });
                        checkDropdownID();
                    });
                })
            }
        }
        closeTail();
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
                    "Xინსტრუმენტები და აპარატები ოპტიკური, ფოტოგრაფიული, კინემატოგრაფიული, საზომი, საკონტროლო, პრეციზიული, სამედიცინო ან ქირურგიული; ყველა სახის საათები; მუსიკალური ინსტრუმენტები; მათი ნაწილები და საკუთნოები",
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
        const generateTitle = () => {
            var langsGrp = {
                ka: [
                    "ევროკავშირის ქვეყნები",
                    "დამოუკიდებელ სახელმწიფოთა თანამეგობრობის (დსთ) ქვეყნები",
                    "შავი ზღვის ეკონომიკური თანამშრომლობის ორგანიზაციის ქვეყნები",
                    "ეკონომიკური თანამშრომლობისა და განვითარების ორგანიზაციის ქვეყნები",
                    "სუამ-ის ქვეყნები",
                    "ევროპის თავისუფალი ვაჭრობის ასოციაცია"
                ],
                en: [
                    "European Union countries",
                    "Commonwealth of Independent States countries",
                    "Black Sea Economic Cooperation Organization countries",
                    "Organisation of Economic Cooperation and Development countries",
                    "GUAM countries",
                    "European Free Trade Association"
                ]
            }
            var w = document.getElementById("grpHover");
            var d = w.childNodes[3].childNodes[1].childNodes[0].childNodes[0].childNodes;
            for (var b = 0; b < d.length; b++) {
                d[b].setAttribute("title", langsGrp[lang][b]);
            }

        }

        instance['grp'].on('open', function(item, state) {
            generateTitle();
        });
        instance['hssec'].on('open', function(item, state) {
            hssTitle();
        });
        var obj = {};
        var arr = [];


        var instance1;
        const getDropdownByName = () => {

            instance1 = tail("select#parameters", {
                locale: lang,
                multiShowCount: false,
                multiple: false,
                multiContainer: true,
            });
            dropdownNames.map(items => {
                var names = document.getElementById(items);
                names.onchange = function(e) {

                    var el = document.getElementById(e.currentTarget.id);
                    var cnt = 0;
                    for (var i = 0; i < el.options.length; i++) {
                        if (el.options[i].selected) {
                            cnt++;
                        }
                    }
                    let removeArr = [
                        "country",
                        "grp",
                        "transout",
                    ];
                    let removeArr2 = [
                        "hssec",
                        "hs2",
                        "hs4",
                        "hs6",
                        "bec",
                        "sitc",
                    ];
                    var selectL = $('select#parameters option').length;
                    var show = document.getElementsByClassName("parameterClass");
                    var title3 = document.getElementsByClassName("paramtitle");
                    let checkboxName = document.querySelectorAll('input[dataName="groupTwo"]');
                    obj[e.currentTarget.id] = e.currentTarget.id;
                    instance1.config("items", obj);
                    arr.push(e.currentTarget.id);
                    var lis = document.querySelectorAll('.dropdown-option');

                    for (let u = 0; u < lis.length; ++u) {
                        if (lis[u].textContent == 'country' && lang == 'ka') {
                            lis[u].innerHTML = "ქვეყანა";
                        }
                        if (lis[u].textContent == 'grp' && lang == 'ka') {
                            lis[u].innerHTML = "ქვეყნის ჯგუფები";

                        }
                        if (lis[u].textContent == 'transout' && lang == 'ka') {
                            lis[u].innerHTML = "ტრანსპორტი";

                        }
                        if (lis[u].textContent == 'hssec' && lang == 'ka') {
                            lis[u].innerHTML = "კარი";

                        }
                        if (lis[u].textContent == 'hs2' && lang == 'ka') {
                            lis[u].innerHTML = "HS-2";

                        }
                        if (lis[u].textContent == 'hs4' && lang == 'ka') {
                            lis[u].innerHTML = "HS-4";

                        }
                        if (lis[u].textContent == 'hs6' && lang == 'ka') {
                            lis[u].innerHTML = "HS-6";

                        }
                        if (lis[u].textContent == 'bec' && lang == 'ka') {
                            lis[u].innerHTML = "BEC-1";

                        }
                        if (lis[u].textContent == 'sitc' && lang == 'ka') {
                            lis[u].innerHTML = "SITC-1";
                        }

                        if (lis[u].textContent == 'country' && lang == 'en') {
                            lis[u].innerHTML = "Country";
                        }
                        if (lis[u].textContent == 'grp' && lang == 'en') {
                            lis[u].innerHTML = "Country Groups";

                        }
                        if (lis[u].textContent == 'transout' && lang == 'en') {
                            lis[u].innerHTML = "Transport";

                        }
                        if (lis[u].textContent == 'hssec' && lang == 'en') {
                            lis[u].innerHTML = "Section";
                        }
                        if (lis[u].textContent == 'hs2' && lang == 'en') {
                            lis[u].innerHTML = "HS-2";

                        }
                        if (lis[u].textContent == 'hs4' && lang == 'en') {
                            lis[u].innerHTML = "HS-4";

                        }
                        if (lis[u].textContent == 'hs6' && lang == 'en') {
                            lis[u].innerHTML = "HS-6";

                        }
                        if (lis[u].textContent == 'bec' && lang == 'en') {
                            lis[u].innerHTML = "BEC-1";

                        }
                        if (lis[u].textContent == 'sitc' && lang == 'en') {
                            lis[u].innerHTML = "SITC-1";
                        }

                    }
                    if ($('select#parameters option').length >= 2) {

                        show[0].style.display = "none";
                        title3[0].style.display = "none";
                        for (var i = 0; i < dropdownNames.length; i++) {
                            var removed = false;
                            for (var j = 0; j < arr.length; j++) {
                                if (dropdownNames[i] == arr[j]) {
                                    delete dropdownNames[i];
                                    removed = true;
                                }
                            }
                        }
                        dropdownNames.map(item5 => {
                            instance[item5].config("disabled", true);
                        });
                        [...checkboxName].map(elem => {
                            elem.disabled = true;
                        });


                    } else {

                        [...checkboxName].map(elem => {
                            elem.disabled = false;
                        });
                    }
                    if (cnt == 0) {
                        show[0].style.display = "none";
                        title3[0].style.display = "none";
                        removeArr.map(item5 => {
                            instance[item5].config("disabled", false);
                        });
                        removeArr2.map(item6 => {
                            //   instance[item6].config("disabled", true);
                        });
                        [...checkboxName].map(elem => {
                            elem.disabled = false;
                        });
                        // [...checkboxName].map(elem => {
                        //     elem.checked = false;
                        // });

                    }

                }
            });

        }


        //getDropdownByName();

        // const selectags = document.querySelectorAll(".item1");
        // Array.from(selectags).forEach(link => {
        //     link.addEventListener('click', function(event) {
        //         var mykey = event.currentTarget.children[0].children[0].id;
        //         let checkboxes = instance[mykey];

        //         instance[mykey] && instance[mykey].on('change', function(item, state) {
        //             var lis = document.querySelectorAll('.dropdown-option');

        //             for (let u = 0; u < lis.length; ++u) {
        //                 if (lis[u].textContent == 'country' && lang == 'ka') {
        //                     lis[u].innerHTML = "ქვეყანა";
        //                 }
        //                 if (lis[u].textContent == 'grp' && lang == 'ka') {
        //                     lis[u].innerHTML = "ქვეყნის ჯგუფები";

        //                 }
        //                 if (lis[u].textContent == 'transout' && lang == 'ka') {
        //                     lis[u].innerHTML = "ტრანსპორტი";

        //                 }
        //                 if (lis[u].textContent == 'hssec' && lang == 'ka') {
        //                     lis[u].innerHTML = "კარი";

        //                 }
        //                 if (lis[u].textContent == 'hs2' && lang == 'ka') {
        //                     lis[u].innerHTML = "HS-2";

        //                 }
        //                 if (lis[u].textContent == 'hs4' && lang == 'ka') {
        //                     lis[u].innerHTML = "HS-4";

        //                 }
        //                 if (lis[u].textContent == 'hs6' && lang == 'ka') {
        //                     lis[u].innerHTML = "HS-6";

        //                 }
        //                 if (lis[u].textContent == 'bec' && lang == 'ka') {
        //                     lis[u].innerHTML = "BEC-1";

        //                 }
        //                 if (lis[u].textContent == 'sitc' && lang == 'ka') {
        //                     lis[u].innerHTML = "SITC-1";
        //                 }

        //                 if (lis[u].textContent == 'country' && lang == 'en') {
        //                     lis[u].innerHTML = "Country";
        //                 }
        //                 if (lis[u].textContent == 'grp' && lang == 'en') {
        //                     lis[u].innerHTML = "Country Groups";

        //                 }
        //                 if (lis[u].textContent == 'transout' && lang == 'en') {
        //                     lis[u].innerHTML = "Transport";

        //                 }
        //                 if (lis[u].textContent == 'hssec' && lang == 'en') {
        //                     lis[u].innerHTML = "Section";
        //                 }
        //                 if (lis[u].textContent == 'hs2' && lang == 'en') {
        //                     lis[u].innerHTML = "HS-2";

        //                 }
        //                 if (lis[u].textContent == 'hs4' && lang == 'en') {
        //                     lis[u].innerHTML = "HS-4";

        //                 }
        //                 if (lis[u].textContent == 'hs6' && lang == 'en') {
        //                     lis[u].innerHTML = "HS-6";

        //                 }
        //                 if (lis[u].textContent == 'bec' && lang == 'en') {
        //                     lis[u].innerHTML = "BEC-1";

        //                 }
        //                 if (lis[u].textContent == 'sitc' && lang == 'en') {
        //                     lis[u].innerHTML = "SITC-1";
        //                 }

        //             }
        //             if (state == 'unselect') {
        //                 // let checkToDisable = document.querySelectorAll('data-selected-id[' + mykey + ']');
        //                 // [...checkToDisable].map(elem => {
        //                 //     $(elem).prop('checked', false);
        //                 //     $(elem).removeAttr('disabled');
        //                 // });
        //                 if (mykey == 'country' || mykey == 'grp' || mykey == 'transout' || mykey == 'year' || mykey == 'month' || mykey == 'quarter' || mykey == 'cost') {
        //                     instance[mykey].config("disabled", false);
        //                     delete obj[mykey];
        //                 } else {
        //                     instance[mykey].config("disabled", true);
        //                     delete obj[mykey];
        //                     //$(mykey).prop('checked', false);
        //                     // $(mykey).removeAttr('disabled');
        //                 }

        //             }
        //         });

        //     });
        // });


        var isHs4Check = document.querySelector('[name="hs4"]');
        var isHs6Check = document.querySelector('[name="hs6"]');

        if (instance['cost']) {

            instance['cost'].options.disable('tons', '#');
            instance['cost'].options.disable('suppu', '#')

        }

        [isHs4Check, isHs6Check].forEach((el) => {

            el.addEventListener('change', (event) => {


                var isSomeCheck = [isHs4Check, isHs6Check].some(el => el.checked == true)


                //onsole.log('isSomeCheck', isSomeCheck)

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

            //console.log('el', el)


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

            instance['flow'].on('change', function(item, state) {

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

                instance['country'].options.disable('all', '#')
            } else if (instance['country'].value().includes("all")) {
                instance['country'].options.disable('world', '#')
            }

        }

        instance['country'].on('change', function(item, state) {



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


                                console.log('elm', elm)

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
                instance['grp'].config("disabled", true);
                instance['grp'].options.all('unselect');
            } else {
                instance['country'].config("disabled", false);
                instance['grp'].config("disabled", false);
                instance['grp'].options.all('unselect');
            }
        });

        instance['grp'] && instance['grp'].on('change', function(item, state) {
            if (state == 'select') {
                instance['country'].options.all('unselect');
                instance['country'].config("disabled", true);
            } else {
                instance['grp'].config("disabled", false);
                instance['country'].options.all('unselect');
                instance['country'].config("disabled", false);
            }
        });
        var change = document.getElementById("parameters");
        change.onchange = function(e) {
            var lititle = document.querySelectorAll('.label-inner');
            for (let t = 0; t < lititle.length; ++t) {
                if (lititle[t].textContent == 'country' && lang == 'ka') {
                    lititle[t].innerHTML = "ქვეყანა";
                }
                if (lititle[t].textContent == 'grp' && lang == 'ka') {
                    lititle[t].innerHTML = "ქვეყნის ჯგუფები";

                }
                if (lititle[t].textContent == 'transout' && lang == 'ka') {
                    lititle[t].innerHTML = "ტრანსპორტი";

                }
                if (lititle[t].textContent == 'hssec' && lang == 'ka') {
                    lititle[t].innerHTML = "კარი";

                }
                if (lititle[t].textContent == 'hs2' && lang == 'ka') {
                    lititle[t].textContent = "HS-2";

                }
                if (lititle[t].textContent == 'hs4' && lang == 'ka') {
                    lititle[t].textContent = "HS-4";

                }
                if (lititle[t].textContent == 'hs6' && lang == 'ka') {
                    lititle[t].textContent = "HS-6";

                }
                if (lititle[t].textContent == 'bec' && lang == 'ka') {
                    lititle[t].textContent = "BEC-1";

                }
                if (lititle[t].textContent == 'sitc' && lang == 'ka') {
                    lis[u].innerHTML = "SITC-1";
                }

                if (lititle[t].textContent == 'country' && lang == 'en') {
                    lis[u].innerHTML = "Country";
                }
                if (lititle[t].textContent == 'grp' && lang == 'en') {
                    lis[u].innerHTML = "Country Groups";

                }
                if (lititle[t].textContent == 'transout' && lang == 'en') {
                    lis[u].innerHTML = "Transport";

                }
                if (lititle[t].textContent == 'hssec' && lang == 'en') {
                    lis[u].innerHTML = "Section";
                }
                if (lititle[t].textContent == 'hs2' && lang == 'en') {
                    lititle[t].textContent = "HS-2";

                }
                if (lititle[t].textContent == 'hs4' && lang == 'en') {
                    lititle[t].textContent = "HS-4";

                }
                if (lititle[t].textContent == 'hs6' && lang == 'en') {
                    lititle[t].textContent = "HS-6";

                }
                if (lititle[t].textContent == 'bec' && lang == 'en') {
                    lititle[t].textContent = "BEC-1";

                }
                if (lititle[t].textContent == 'sitc' && lang == 'en') {
                    lis[u].innerHTML = "SITC-1";
                }
            }
        }

    }


});