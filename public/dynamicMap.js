(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dynamicMap"],{

/***/ "./resources/js/components/MapChart.js":
/*!*********************************************!*\
  !*** ./resources/js/components/MapChart.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/maps */ "./node_modules/@amcharts/amcharts4/maps.js");
/* harmony import */ var _amcharts_amcharts4_geodata_worldLow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4-geodata/worldLow */ "./node_modules/@amcharts/amcharts4-geodata/worldLow.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var MapChart = /*#__PURE__*/function () {
  function MapChart() {
    _classCallCheck(this, MapChart);
  }

  _createClass(MapChart, [{
    key: "build",
    value: function () {
      var _build = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
        var chart, polygonSeries, magicalFunction, ge, polygonTemplate, heatLegend, minRange, maxRange, hs;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_4__["default"]);
                chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"]("chartdiv", _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["MapChart"]);
                chart.geodata = _amcharts_amcharts4_geodata_worldLow__WEBPACK_IMPORTED_MODULE_3__["default"];
                chart.projection = new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["projections"].Miller();
                chart.language.locale["_thousandSeparator"] = " ";
                polygonSeries = chart.series.push(new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["MapPolygonSeries"]()); //console.log('polygonSeries', polygonSeries.mapPolygons)

                polygonSeries.heatRules.push({
                  property: "fill",
                  target: polygonSeries.mapPolygons.template,
                  min: chart.colors.getIndex(1).brighten(1),
                  max: chart.colors.getIndex(1).brighten(-0.3)
                });
                polygonSeries.exclude = ["AQ"];
                polygonSeries.useGeodata = true;

                magicalFunction = function magicalFunction(a, s) {
                  return [].concat(_toConsumableArray(a), _toConsumableArray(s));
                };

                ge = [{
                  id: 'GE',
                  value: 0,
                  fill: '#FF0000'
                }];
                data = magicalFunction(data, ge);
                polygonSeries.data = data;
                polygonTemplate = polygonSeries.mapPolygons.template;
                polygonTemplate.tooltipText = "{countryName}: {value.formatNumber('#,###.0')}";
                polygonTemplate.adapter.add("tooltipText", function (text, target, key) {
                  if (target.dataItem.value) {
                    if (target.dataItem.value > 0.001 && target.dataItem.value < 0.5) {
                      return text.replace("{value.formatNumber('#,###.0')}", "{value}");
                    } else {
                      return text;
                    }
                  } //console.log('target.dataItem.value', target.dataItem.value)
                  //return target.dataItem.value && "" + text + "";

                });
                polygonTemplate.nonScalingStroke = true;
                polygonTemplate.strokeWidth = 0.5;
                polygonTemplate.propertyFields.fill = "fill";
                heatLegend = chart.createChild(_amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["HeatLegend"]);
                heatLegend.series = polygonSeries;
                heatLegend.align = "right";
                heatLegend.valign = "bottom";
                heatLegend.width = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["percent"](15);
                heatLegend.marginRight = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["percent"](4);
                heatLegend.minValue = 0;
                heatLegend.maxValue = 1000;
                minRange = heatLegend.valueAxis.axisRanges.create();
                minRange.value = heatLegend.minValue;
                minRange.label.text = "Min";
                maxRange = heatLegend.valueAxis.axisRanges.create();
                maxRange.value = heatLegend.maxValue;
                maxRange.label.text = "Max";
                heatLegend.valueAxis.renderer.labels.template.adapter.add("text", function (labelText) {
                  return "";
                }); //var polygonTemplate = polygonSeries.mapPolygons.template;
                //polygonTemplate.tooltipText = "{name}: {value}";
                //polygonTemplate.nonScalingStroke = true;
                //polygonTemplate.strokeWidth = 0.5;

                hs = polygonTemplate.states.create("hover");
                hs.properties.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#3c5bdc");
                polygonTemplate.events.on("over", function (ev) {
                  !ev.target.dataItem.value ? ev.target.isHover = false : false;
                });
                chart.zoomControl = new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["ZoomControl"]();
                return _context.abrupt("return", {
                  chart: chart,
                  polygonSeries: polygonSeries
                });

              case 39:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function build(_x) {
        return _build.apply(this, arguments);
      }

      return build;
    }()
  }, {
    key: "render",
    value: function () {
      var _render = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(data) {
        var chart;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.build(data);

              case 2:
                chart = _context2.sent;
                return _context2.abrupt("return", chart);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function render(_x2) {
        return _render.apply(this, arguments);
      }

      return render;
    }()
  }]);

  return MapChart;
}();

/* harmony default export */ __webpack_exports__["default"] = (MapChart);

/***/ }),

/***/ "./resources/js/helper/backHelper.js":
/*!*******************************************!*\
  !*** ./resources/js/helper/backHelper.js ***!
  \*******************************************/
/*! exports provided: pageTypeById, removeZero, lastIndexOf, abbreviate_number, translate, uniqueData, generateUniqueData, serializeObj, convertToSlug, objectWithoutKey, newLine, arrObjModifyKeyOrValue, objectWithoutValue, limiteString, createElementFromHTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageTypeById", function() { return pageTypeById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeZero", function() { return removeZero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastIndexOf", function() { return lastIndexOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abbreviate_number", function() { return abbreviate_number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueData", function() { return uniqueData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateUniqueData", function() { return generateUniqueData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeObj", function() { return serializeObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToSlug", function() { return convertToSlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectWithoutKey", function() { return objectWithoutKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newLine", function() { return newLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrObjModifyKeyOrValue", function() { return arrObjModifyKeyOrValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectWithoutValue", function() { return objectWithoutValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "limiteString", function() { return limiteString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElementFromHTML", function() { return createElementFromHTML; });
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var pageTypeById = function pageTypeById(type) {
  type = Number(type);

  switch (type) {
    case 1:
      return 'national_account';
      break;

    case 2:
      return 'region_mshp';
      break;

    case 3:
      return 'gdp';
      break;
  }
};
var removeZero = function removeZero(data) {
  var arr = [];
  data.map(function (Arritem, Arrindex) {
    var arrObj = Arritem.map(function (item) {
      return item == null ? 0 : item;
    });
    arr.push(_toConsumableArray(arrObj));
  });
  return arr;
};
var lastIndexOf = function lastIndexOf(data, keyName, keyValue, start) {
  for (var i = data.length - 1; i >= start; i--) {
    if (_typeof(keyValue) === 'object' && keyValue !== null) {
      if (data[i]['wlebi'] === keyValue['wlebi'] && data[i]['angarishebi'] === keyValue['angarishebi']) {
        return i;
      }
    } else {
      if (data[i][keyName] === keyValue) {
        return i;
      }
    }
  }

  return null;
};
var abbreviate_number = function abbreviate_number(num, fixed) {
  var abr = translate(lang, 'abr');

  if (num === null || num === undefined) {
    return null;
  } // terminate early


  if (num === 0) {
    return '0';
  } // terminate early


  num = num.toString().replace(',', "");
  num = Number(num);
  fixed = !fixed || fixed < 0 ? 0 : fixed; // number of decimal places to show

  var b = num.toPrecision(2).split("e"),
      // get power
  k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3),
      // floor at decimals, ceiling at trillions
  c = k < 1 ? num.toFixed(0 + fixed) : (num / Math.pow(10, k * 3)).toFixed(1 + fixed),
      // divide by power
  d = c < 0 ? c : Math.abs(c),
      // enforce -0 is 0
  e = d + " " + abr[k]; // append power

  return e;
};
var translate = function translate(lang, key) {
  var isDefault = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default';
  var languageList = null;

  if (lang === 'en') {
    languageList = __webpack_require__(/*! ../locale/en */ "./resources/js/locale/en.js");
  } else if (lang === 'ka') {
    languageList = __webpack_require__(/*! ../locale/ka */ "./resources/js/locale/ka.js");
  }

  return languageList["".concat(isDefault)][key];
};
var uniqueData = function uniqueData(data, need, all) {
  var objArr = [];
  var copyArr = data.map(function (a) {
    return _objectSpread({}, a);
  });
  var startUp = copyArr.map(function (item) {
    return item[need];
  }).filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
  var Appended = all ? ["all"].concat(_toConsumableArray(startUp)) : _toConsumableArray(startUp);
  Appended.map(function (afterItem, afterKey) {
    var obj = {};
    obj['id'] = afterKey;
    obj['value'] = afterItem;
    objArr.push(obj);
  });
  return objArr;
};
/*export const  uniqueData = (data, need) =>{

    var objArr = [];

    let copyArr =  data.map(a => ({...a}));

    copyArr.map(item => item[need])
        .filter((value, index, self) => {
            return  self.indexOf(value) === index
        })
        .map((afterItem, afterKey)=>{

            var obj = {};

            obj['id'] = afterKey;
            obj['value'] = afterItem;

            objArr.push(obj)
        })

   return objArr;
}*/

var generateUniqueData = function generateUniqueData(data, need) {
  var all = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var uniqueArr = [];
  need.map(function (item) {
    uniqueArr[item] = uniqueData(data, item, all);
  });
  return uniqueArr;
};
var serializeObj = function serializeObj(arr) {
  return arr.filter(function (item) {
    return item.value !== '-1' && item.value !== 'all';
  }).reduce(function (m, o) {
    m[o.name] = m[o.name] || [];
    m[o.name].push(o.value);
    return m;
  }, Object.create(null));
  /*return  arr
       .filter((item)=> {return item.value !== '-1'})
       .reduce(function(obj, item) {
     obj[item.name] = item.value;
         return obj;
  },
   {});*/
};
var convertToSlug = function convertToSlug(Text) {
  return Text.toLowerCase().replace(/ /g, '-');
};
var objectWithoutKey = function objectWithoutKey(object, key) {
  var deletedKey = object[key],
      otherKeys = _objectWithoutProperties(object, [key].map(_toPropertyKey));
  /*range.label.adapter.add("horizontalCenter", function() {
  return "middle";
  });let newPetList = petList.map(({ name, ...rest }) => rest);*/


  return otherKeys;
};
var newLine = function newLine(msg, test_value) {
  /*if (!test_value) {
  test_value = document.getElementById('test').value;
  }
  console.log(msg + ': ' + (test_value.match(/\r/) ? 'CR' : '')
            + ' ' + (test_value.match(/\n/) ? 'LF' : ''));*/
  return msg.replace(/ /g, '\n');
};
var arrObjModifyKeyOrValue = function arrObjModifyKeyOrValue(ArrObj, optObj, type) {
  var removeAllobj = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var newArray = ArrObj.map(function (a) {
    return _objectSpread({}, a);
  });
  var newObj = newArray.map(function (item, index) {
    if (type == 'withoutKey') {
      item[optObj['value']] = item.value.toString();
      return objectWithoutKey(_objectSpread({}, item), optObj['key']);
    } else if (type == 'withoutValue') {
      //console.log('objectWithoutValue', objectWithoutValue(item, optObj.key, optObj.value));
      return objectWithoutValue(item, optObj.key, optObj.value, removeAllobj);
    }
  });
  return newObj.filter(function (item) {
    return Object.entries(item).length !== 0 && item.constructor === Object;
  });
};
var objectWithoutValue = function objectWithoutValue(object, key, value, removeAllobj) {
  //let beforeArr = []; beforeArr.push(object);
  //let obj = beforeArr.find(x => x[key]  === value);
  //let index = beforeArr.indexOf(obj);
  // console.log("objKey", objKey);
  var newObj = {};

  for (var objKey in object) {
    if (typeof object[objKey] === 'number') {
      value = Number(value);
    }

    if (object[key] !== value) {
      newObj = _objectSpread(_objectSpread({}, newObj), {}, _defineProperty({}, objKey, object[objKey]));
    } else {
      if (removeAllobj) {
        return {};
      } else {
        newObj = _objectSpread(_objectSpread({}, newObj), {}, _defineProperty({}, objKey, object[objKey]));
      }
    }
  }

  return newObj;
};
var limiteString = function limiteString(text, count, insertDots) {
  return text.slice(0, count) + (text.length > count && insertDots ? "..." : "");
};
var createElementFromHTML = function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim(); // Change this to div.childNodes to support multiple top-level nodes

  return div.firstChild;
};

/***/ }),

/***/ "./resources/js/page/map/events.js":
/*!*****************************************!*\
  !*** ./resources/js/page/map/events.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_backHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper/backHelper */ "./resources/js/helper/backHelper.js");


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var DisableYear = function DisableYear(sflow) {
  var iterator, div_list, div_array;

  if (sflow == 'RE' || sflow == 'DE') {
    for (var i = 1; i <= 6; i++) {
      iterator = 2014 - i;
      div_list = document.querySelectorAll("[data-key='" + iterator + "']");
      div_array = _toConsumableArray(div_list);
      div_array.forEach(function (div) {
        div.style.pointerEvents = "none";
        div.style.color = "lightgrey";
      });
    }
  } else {
    for (var i = 1; i <= 6; i++) {
      iterator = 2014 - i;
      div_list = document.querySelectorAll("[data-key='" + iterator + "']");
      div_array = _toConsumableArray(div_list);
      div_array.forEach(function (div) {
        div.style.pointerEvents = "";
        div.style.color = "";
      });
    }
  }
};

var Events = {
  ready: function ready() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var lastTrade, month, quarter, That;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.lastTrade();

            case 2:
              lastTrade = _context.sent;
              //console.log('lastTrade', lastTrade);
              month = "".concat(Object(_helper_backHelper__WEBPACK_IMPORTED_MODULE_1__["translate"])(lang, 0, 'month'), ",").concat(Object(_helper_backHelper__WEBPACK_IMPORTED_MODULE_1__["translate"])(lang, lastTrade.data.data.month, 'month'));
              quarter = Object(_helper_backHelper__WEBPACK_IMPORTED_MODULE_1__["translate"])(lang, lastTrade.data.data.quarter, 'quarter'); //this.lastTradeObj = {...lastTrade.data.data, ...{flow : translate(lang, 'export')}, ...{month : month} };

              _this.lastTradeObj = _objectSpread(_objectSpread(_objectSpread({}, {}), {}), {});

              _this.onDocumentLoad();

              That = _this;
              That.selectsInstance['flow'].on('change', function (item, state) {
                DisableYear(item.key);

                if (item.key == 'RE' || item.key == 'DE') {
                  for (var k = 1; k <= 6; k++) {
                    var iterate = 2014 - k;
                    var div_list = document.querySelectorAll("[data-key='" + iterate + "']");

                    var div_array = _toConsumableArray(div_list);

                    div_array.forEach(function (div) {
                      div.classList.remove("selected");
                      document.getElementsByClassName('label-inner')[1].innerHTML = Object(_helper_backHelper__WEBPACK_IMPORTED_MODULE_1__["translate"])(lang, 'select');
                    });
                  }
                }
              }), That.selectsInstance['year'].on('change', function (item, state) {
                //var assign = assignFlow;
                var iterate, div_list, div_array;
                DisableYear(item.key);
                var e = document.getElementById("flow");
                var strUser = e.value;

                if (strUser == 'RE' || strUser == 'DE') {
                  for (var k = 1; k <= 6; k++) {
                    iterate = 2014 - k;
                    div_list = document.querySelectorAll("[data-key='" + iterate + "']");
                    div_array = _toConsumableArray(div_list);
                    div_array.forEach(function (div) {
                      div.style.pointerEvents = "none";
                      div.style.color = "lightgrey";
                    });
                  }
                }
              }), $(_this.selects).on('change', function (e) {
                if (That.selectsInstance['year'].value() && That.selectsInstance['flow'].value()) {
                  $(_this.form).submit();
                  return false;
                }
              });
              _this.form.onsubmit = _this.onSubmitForm.bind(_this); //this.titleShablon(this.lastTradeObj)

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  showSpinner: function showSpinner() {
    JsLoadingOverlay.show({
      'overlayBackgroundColor': '#ccc',
      'overlayOpacity': 0.6,
      'spinnerIcon': 'line-scale',
      'spinnerColor': '#0080be',
      'spinnerSize': '3x',
      'overlayIDName': 'overlay',
      'spinnerIDName': 'spinner'
    });
  },
  hideSpinner: function hideSpinner() {
    JsLoadingOverlay.hide();
  },
  //titleShablon(obj = {}){
  //this.titleShablonObj = {...this.titleShablonObj, ...obj}
  //return this.titleShablonObj
  //},
  titleShablon: function titleShablon(_ref) {
    var _ref$flow = _ref.flow,
        flow = _ref$flow === void 0 ? '' : _ref$flow,
        _ref$year = _ref.year,
        year = _ref$year === void 0 ? '' : _ref$year,
        _ref$month = _ref.month,
        month = _ref$month === void 0 ? '' : _ref$month,
        _ref$quarter = _ref.quarter,
        quarter = _ref$quarter === void 0 ? '' : _ref$quarter;
    var titelDiv = document.getElementById('title');
    var shablon = " ".concat(flow ? "<div>".concat(flow, " - ").concat(this.usaDollar, "  </div>") : '', " <div>  ").concat(year ? "<div>".concat(this.year, " - ").concat(year, "  </div>") : '', "  </div>  ").concat(quarter ? "<div>".concat(this.quarter, " - ").concat(quarter, "</div>") : '', "     ").concat(month ? "<div>".concat(this.month, " - ").concat(month, "</div>") : '', "  ");
    return titelDiv.innerHTML = shablon;
  },
  removeKey: function removeKey(obj, prop) {
    var omit = obj[prop],
        res = _objectWithoutProperties(obj, [prop].map(_toPropertyKey));

    return res;
  },
  getSelectValueForSahablon: function getSelectValueForSahablon(curent, selectedValue) {
    var result = null;

    if (Array.isArray(selectedValue)) {
      result = _toConsumableArray(curent.e.options).filter(function (opt) {
        return opt.selected == true;
      }).sort(function (a, b) {
        return a - b;
      }).reduce(function (str, val, index, dd) {
        var deppice = str.length ? "," : ""; //var comma = (index == dd.length - 1) ? ", " : "";
        //if (index == 0 || index == dd.length - 1) {

        str = str + deppice + val.text; //}

        return str;
      }, '');
    } else if (selectedValue) {
      result = curent.e.options[curent.e.selectedIndex].text;
    }

    return result;
  },
  disablefuturemonthsAndQuarter: function disablefuturemonthsAndQuarter(month, quarter, select) {
    var d = new Date();
    var n = d.getMonth() + 1;

    if (select) {
      for (var i = n; i <= 12; i++) {
        if (month.options.is('enable', i.toString(), '#')) {
          month.options.disable(i.toString(), '#');
        }
      }
    } else {
      for (var i = n; i <= 12; i++) {
        if (month.options.is('disable', i.toString(), '#')) {
          month.options.enable(i.toString(), '#');
        }
      }
    }

    var today = new Date();
    var cuurentQuarter = Math.floor((today.getMonth() + 3) / 3) + 1;

    if (select) {
      for (var i = cuurentQuarter; i <= 4; i++) {
        if (quarter.options.is('enable', i.toString(), '#')) {
          quarter.options.disable(i.toString(), '#');
        }
      }
    } else {
      for (var i = cuurentQuarter; i <= 4; i++) {
        if (quarter.options.is('disable', i.toString(), '#')) {
          quarter.options.enable(i.toString(), '#');
        }
      }
    }
  },
  disableOrEnable: function disableOrEnable(id, That, rend, first, secend) {
    if (id == first) {
      if (That.selectsInstance[first].value()) {
        Object.keys(That.selectsInstance[secend].options.items['#']).map(function (elm) {
          if (That.selectsInstance[secend].options.is('enable', elm, '#')) {
            That.selectsInstance[secend].options.disable(elm, '#');
          }
        });
        rend[secend] = '';
      } else {
        Object.keys(That.selectsInstance[secend].options.items['#']).map(function (elm) {
          if (That.selectsInstance[secend].options.is('disable', elm, '#')) {
            That.selectsInstance[secend].options.enable(elm, '#');
          }
        });
      }
    } else if (id == secend) {
      if (That.selectsInstance[secend].value()) {
        Object.keys(That.selectsInstance[first].options.items['#']).map(function (elm) {
          if (That.selectsInstance[first].options.is('enable', elm, '#')) {
            That.selectsInstance[first].options.disable(elm, '#');
          }
        });
        rend[first] = '';
      } else {
        Object.keys(That.selectsInstance[first].options.items['#']).map(function (elm) {
          if (That.selectsInstance[first].options.is('disable', elm, '#')) {
            That.selectsInstance[first].options.enable(elm, '#');
          }
        });
      }
    }
  },
  onDocumentLoad: function onDocumentLoad() {
    var _this2 = this;

    var That = this;

    _toConsumableArray(this.selects).map(function (elm) {
      var id = elm.getAttribute("id");
      var params = JSON.parse(elm.getAttribute("params"));
      _this2.selectsInstance[id] = tail("#".concat(id), _objectSpread(_objectSpread({
        placeholder: _this2.selectAll,
        sortItems: true,
        locale: lang
      }, params), {}, {
        items: {},
        descriptions: true
      }));

      _this2.selectsInstance[id].on('change', function (item, state) {
        var select = this.e;
        var needed = ['year', 'flow', 'month', 'quarter'];
        var clearMonth = {};
        var clearQuarter = {};
        var rend = {};

        if (That.selectsInstance['year'].value() == That.lastTradeObj.year) {
          That.disablefuturemonthsAndQuarter(That.selectsInstance['month'], That.selectsInstance['quarter'], true);
        } else {
          That.disablefuturemonthsAndQuarter(That.selectsInstance['month'], That.selectsInstance['quarter'], false);
        }

        needed.forEach(function (elm, index) {
          var curent = That.getSelectValueForSahablon(That.selectsInstance[elm], That.selectsInstance[elm].value());
          var append = curent ? _defineProperty({}, elm, curent) : {};

          if (Number(That.selectsInstance['year'].value()) !== That.lastTradeObj.year && !That.selectsInstance['month'].value()) {
            clearMonth = {
              month: ''
            };
          }

          if (Number(That.selectsInstance['year'].value()) !== That.lastTradeObj.year && !That.selectsInstance['quarter'].value()) {
            clearQuarter = {
              quarter: ''
            };
          } //console.log('this.elm[id]', That.selectsInstance[elm].value())


          rend = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, rend), append), clearMonth), clearQuarter);
        }); //console.log('this.selectsInstance[id]', this.selectsInstance[id])

        if (id == 'quarter') {
          if (That.selectsInstance['quarter'].value()) {
            That.selectsInstance['month'].disable();
            rend['month'] = '';
          } else {
            That.selectsInstance['month'].enable();
          }
        } else if (id == 'month') {
          if (That.selectsInstance['month'].value()) {
            That.selectsInstance['quarter'].disable();
            rend['quarter'] = '';
          } else {
            That.selectsInstance['quarter'].enable();
          }
        }

        That.disableOrEnable(id, That, rend, 'country', 'country_group');
        That.disableOrEnable(id, That, rend, 'hs4', 'bec1');

        if (That.selectsInstance[id].value() && Array.isArray(That.selectsInstance[id].value())) {
          if (That.selectsInstance[id].value().length > 1) {
            That.selectsInstance[id].label.innerHTML = "<span class=\"label-inner\">".concat(Object(_helper_backHelper__WEBPACK_IMPORTED_MODULE_1__["translate"])(lang, 'MultipleValues'), "</span>");
          } else {
            That.selectsInstance[id].value().forEach(function (itm) {
              var undo = That.selectsInstance[id].options.get(itm, '#');
              That.selectsInstance[id].update(_objectSpread(_objectSpread({}, undo), {}, {
                selected: true
              }));
            });
          }
        }

        if (That.selectsInstance[id].value()) {
          That.titleShablon(_objectSpread(_objectSpread({}, That.lastTradeObj), rend));
        }
      });
    });

    That.disablefuturemonthsAndQuarter(That.selectsInstance['month'], That.selectsInstance['quarter'], true);
  },
  groupParamsByKey: function groupParamsByKey(params) {
    return _toConsumableArray(params.entries()).reduce(function (acc, tuple) {
      var _tuple = _slicedToArray(tuple, 2),
          key = _tuple[0],
          val = _tuple[1];

      if (acc.hasOwnProperty(key)) {
        if (Array.isArray(acc[key])) {
          acc[key] = [].concat(_toConsumableArray(acc[key]), [val]);
        } else {
          acc[key] = [acc[key], val];
        }
      } else {
        acc[key] = val;
      }

      return acc;
    }, {});
  },
  onSubmitForm: function onSubmitForm(e) {
    var _this3 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var params, newData, copyed, showSum, newarr, i, sum, magicalFunction, ge;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log('dsadasdsad');
              e.preventDefault();

              _this3.showSpinner();

              params = new URLSearchParams(new FormData(e.target));
              params.append('lang', lang);

              if (params.get('flow') && params.get('flow') == 'E') {
                params.set('flow[]', 'RE');
                params.append('flow[]', 'DE');
              }

              _context2.next = 8;
              return _this3.loadData(params);

            case 8:
              newData = _context2.sent;
              copyed = JSON.parse(JSON.stringify(newData.data.data));

              showSum = function showSum(sums) {
                var titelDiv = document.getElementById('titleSum');
                var shablon = " ".concat("<div>".concat(Object(_helper_backHelper__WEBPACK_IMPORTED_MODULE_1__["translate"])(lang, 'sum'), " - ").concat(sums.toFixed(1), "  </div>"), " ");
                return titelDiv.innerHTML = shablon;
              }; // console.log('newData', newData.data.data.length)


              newarr = [];

              if (newData.data.data.length > 0) {
                for (i = 0; i < newData.data.data.length; i++) {
                  newarr.push(newData.data.data[i].value);
                }
              }

              sum = newarr.reduce(function (accum, val) {
                return accum + Number(val);
              }, 0);

              if (sum > 0) {
                showSum(sum);
              }

              console.log('newData', sum);

              magicalFunction = function magicalFunction(a, s) {
                return [].concat(_toConsumableArray(a), _toConsumableArray(s));
              };

              ge = [{
                id: 'GE',
                value: 0,
                fill: '#FF0000'
              }];
              copyed = magicalFunction(copyed, ge); //console.log("newData", newData)

              _this3.mapChart.polygonSeries.data = copyed;

              _this3.mapChart.polygonSeries.invalidateData();

              $("body").find("[aria-labelledby]:role").hide();

              _this3.hideSpinner(); //async added
              // alert('sds')
              //this.stakedChartConst.Axies2 = this.stakedChartConst.insertOrUpdateAxseas(this.stakedChartConst.Axies2 );


            case 23:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Events);

/***/ }),

/***/ "./resources/js/page/map/index.js":
/*!****************************************!*\
  !*** ./resources/js/page/map/index.js ***!
  \****************************************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MapChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/MapChart */ "./resources/js/components/MapChart.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events */ "./resources/js/page/map/events.js");
/* harmony import */ var _helper_backHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helper/backHelper */ "./resources/js/helper/backHelper.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Map = /*#__PURE__*/function () {
  function Map() {
    _classCallCheck(this, Map);

    this.form = document.querySelector('form[id="national_income"]');
    this.selects = this.form.querySelectorAll('select');
    this.selectsInstance = [];
    this.selectAll = Object(_helper_backHelper__WEBPACK_IMPORTED_MODULE_3__["translate"])(lang, 'select');
    this.usaDollar = Object(_helper_backHelper__WEBPACK_IMPORTED_MODULE_3__["translate"])(lang, 'usaDollar');
    this.year = Object(_helper_backHelper__WEBPACK_IMPORTED_MODULE_3__["translate"])(lang, 'year');
    this.quarter = Object(_helper_backHelper__WEBPACK_IMPORTED_MODULE_3__["translate"])(lang, 'quarter');
    this.month = Object(_helper_backHelper__WEBPACK_IMPORTED_MODULE_3__["translate"])(lang, 'month');
    this.titleShablonObj = Object(_helper_backHelper__WEBPACK_IMPORTED_MODULE_3__["translate"])(lang, 'titleShablonObj');
    this.mapChart = {};
  }

  _createClass(Map, [{
    key: "loadData",
    value: function () {
      var _loadData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(params) {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios({
                  method: 'get',
                  url: '/api/mapData',
                  params: params
                });

              case 2:
                data = _context.sent;
                return _context.abrupt("return", data);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function loadData(_x) {
        return _loadData.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: "selectsData",
    value: function () {
      var _selectsData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(tableName, columnName) {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios({
                  method: 'get',
                  url: '/api/selectsData',
                  params: {
                    tableName: tableName,
                    columnName: columnName,
                    lang: lang
                  }
                });

              case 2:
                data = _context2.sent;
                return _context2.abrupt("return", data);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function selectsData(_x2, _x3) {
        return _selectsData.apply(this, arguments);
      }

      return selectsData;
    }()
  }, {
    key: "renderSelect",
    value: function () {
      var _renderSelect = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(divName, tableName, columnName) {
        var value, desc, red, hs2;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.selectsData(tableName, columnName);

              case 2:
                hs2 = _context3.sent;
                red = Object.keys(hs2.data.data).reduce(function (previous, key) {
                  value = tableName == 'CountryGroup' ? key : hs2.data.data[key];
                  desc = tableName == 'CountryGroup' ? {
                    description: hs2.data.data[key]
                  } : {};
                  previous[key] = _objectSpread({
                    value: value,
                    selected: true,
                    group: "#",
                    disabled: false
                  }, desc);
                  return previous;
                }, {});
                this.selectsInstance[divName].options.add(_objectSpread({}, red));
                this.selectsInstance[divName].options.unselect(_objectSpread({}, red));

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function renderSelect(_x4, _x5, _x6) {
        return _renderSelect.apply(this, arguments);
      }

      return renderSelect;
    }()
  }, {
    key: "lastTrade",
    value: function () {
      var _lastTrade = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios({
                  method: 'get',
                  url: '/api/lastTrade'
                });

              case 2:
                data = _context4.sent;
                return _context4.abrupt("return", data);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function lastTrade() {
        return _lastTrade.apply(this, arguments);
      }

      return lastTrade;
    }()
  }, {
    key: "render",
    value: function () {
      var _render = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var params, mapData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                //$(this.form).submit();
                this.showSpinner();
                this.ready();
                _context5.next = 4;
                return this.renderSelect('hs4', 'Hs4', 'hs4_id');

              case 4:
                _context5.next = 6;
                return this.renderSelect('country', 'Country', 'country_id');

              case 6:
                _context5.next = 8;
                return this.renderSelect('bec1', 'Bec', 'id');

              case 8:
                _context5.next = 10;
                return this.renderSelect('country_group', 'CountryGroup', 'name');

              case 10:
                params = new URLSearchParams(new FormData(this.form));

                if (params.get('flow') && params.get('flow') == 'E') {
                  params.set('flow[]', 'RE');
                  params.append('flow[]', 'DE');
                } //console.log('dasdasd', params.get('type') )


                params.append('lang', lang);
                _context5.next = 15;
                return this.loadData(params);

              case 15:
                mapData = _context5.sent;
                //console.log('mapData', mapData)
                this.mapChartConst = new _components_MapChart__WEBPACK_IMPORTED_MODULE_1__["default"]();
                _context5.next = 19;
                return this.mapChartConst.render(mapData.data.data);

              case 19:
                this.mapChart = _context5.sent;
                $("body").find("[aria-labelledby]:role").hide();
                this.hideSpinner(); //hs2.data.data.map(()=>{
                //console.log('sssss')
                //})
                //this.mapChart

              case 22:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function render() {
        return _render.apply(this, arguments);
      }

      return render;
    }()
  }]);

  return Map;
}();
;
Object.assign(Map.prototype, _events__WEBPACK_IMPORTED_MODULE_2__["default"]);
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

/***/ })

}]);