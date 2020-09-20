(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/search/index"],{

/***/ "./src/pages/search/index.js":
/*!***********************************!*\
  !*** ./src/pages/search/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2; /* eslint-disable import/no-unresolved */

// eslint-disable-next-line no-unused-vars


var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _request = __webpack_require__(/*! ../../utils/request */ "./src/utils/request.js");

var _request2 = _interopRequireDefault(_request);

var _homePage = __webpack_require__(/*! ../../api/homePage */ "./src/api/homePage.js");

var _homePage2 = _interopRequireDefault(_homePage);

var _config = __webpack_require__(/*! ../../components/GoodsCategory/config */ "./src/components/GoodsCategory/config.js");

__webpack_require__(/*! ./style.scss */ "./src/pages/search/style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchPage = (_temp2 = _class = function (_BaseComponent) {
  _inherits(SearchPage, _BaseComponent);

  function SearchPage() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, SearchPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchPage.__proto__ || Object.getPrototypeOf(SearchPage)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "loopArray4", "$compid__27", "$compid__28", "$compid__29", "$compid__30", "tabList", "searchValue", "goods", "currentTab"], _this.config = {
      navigationBarTitleText: "商品列表"
    }, _this.handleSearch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var searchValue, moreGoods;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              searchValue = _this.state.searchValue;
              _context.prev = 1;
              _context.next = 4;
              return (0, _request2.default)({
                url: _homePage2.default.getSearchGoods,
                method: "GET",
                data: {
                  keyword: searchValue
                }
              });

            case 4:
              moreGoods = _context.sent;

              _this.setState({
                goods: moreGoods
              });
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);

              console.log(_context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this2, [[1, 8]]);
    })), _this.handleChange = function (value) {
      console.log(value, "value");
      _this.setState({
        searchValue: value
      });
    }, _this.handleTabClick = function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(tabIndex) {
        var goodsItems;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return (0, _request2.default)({
                  url: _homePage2.default.getGoodsItems,
                  method: "GET",
                  data: {
                    categoryId: tabIndex
                  }
                });

              case 3:
                goodsItems = _context2.sent;

                _this.setState({
                  goods: goodsItems
                });
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);

                console.log(_context2.t0);

              case 10:
                _this.setState({
                  currentTab: tabIndex
                });

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[0, 7]]);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }(), _this.customComponents = ["RootPage", "AtSearchBar", "AtTabs", "AtTabsPane", "GoodsList"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SearchPage, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(SearchPage.prototype.__proto__ || Object.getPrototypeOf(SearchPage.prototype), "_constructor", this).call(this, props);

      var curTab = parseInt(this.$router.params.id, 10);
      this.state = {
        searchValue: "",
        goods: [],
        currentTab: curTab
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var currentTab, goodsItems;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                currentTab = this.state.currentTab;
                _context3.prev = 1;
                _context3.next = 4;
                return (0, _request2.default)({
                  url: _homePage2.default.getGoodsItems,
                  method: "GET",
                  data: {
                    categoryId: currentTab
                  }
                });

              case 4:
                goodsItems = _context3.sent;

                this.setState({
                  goods: goodsItems
                });
                _context3.next = 11;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](1);

                console.log(_context3.t0);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 8]]);
      }));

      function componentDidMount() {
        return _ref4.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__27"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__27 = _genCompid2[0],
          $compid__27 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__28"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__28 = _genCompid4[0],
          $compid__28 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__29"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__29 = _genCompid6[0],
          $compid__29 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__30"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__30 = _genCompid8[0],
          $compid__30 = _genCompid8[1];

      var _state = this.__state,
          searchValue = _state.searchValue,
          goods = _state.goods,
          currentTab = _state.currentTab;

      console.log(goods, "searchGoods");
      var anonymousState__temp = [{ title: "搜索结果" }].concat(_toConsumableArray(_config.tabList));
      var loopArray4 = _config.tabList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp3 = index + 1;

        var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "ezzzzzzzzz" + index, true),
            _genCompid10 = _slicedToArray(_genCompid9, 2),
            $prevCompid__25 = _genCompid10[0],
            $compid__25 = _genCompid10[1];

        _taroWeapp.propsManager.set({
          "current": currentTab,
          "index": $loopState__temp3
        }, $compid__25, $prevCompid__25);

        var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "fzzzzzzzzz" + index, true),
            _genCompid12 = _slicedToArray(_genCompid11, 2),
            $prevCompid__26 = _genCompid12[0],
            $compid__26 = _genCompid12[1];

        _taroWeapp.propsManager.set({
          "goods": goods
        }, $compid__26, $prevCompid__26);
        return {
          $loopState__temp3: $loopState__temp3,
          $compid__25: $compid__25,
          $compid__26: $compid__26,
          $original: item.$original
        };
      });
      _taroWeapp.propsManager.set({
        "focus": true,
        "value": searchValue,
        "onChange": this.handleChange,
        "onActionClick": this.handleSearch
      }, $compid__27, $prevCompid__27);
      _taroWeapp.propsManager.set({
        "current": currentTab,
        "scroll": true,
        "tabList": anonymousState__temp,
        "onClick": this.handleTabClick
      }, $compid__28, $prevCompid__28);
      _taroWeapp.propsManager.set({
        "current": currentTab,
        "index": 0
      }, $compid__29, $prevCompid__29);
      _taroWeapp.propsManager.set({
        "goods": goods
      }, $compid__30, $prevCompid__30);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        loopArray4: loopArray4,
        $compid__27: $compid__27,
        $compid__28: $compid__28,
        $compid__29: $compid__29,
        $compid__30: $compid__30,
        tabList: _config.tabList
      });
      return this.__state;
    }
  }]);

  return SearchPage;
}(_taroWeapp.Component), _class.$$events = [], _class.$$componentPath = "pages/search/index", _temp2);
exports.default = SearchPage;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(SearchPage, true));

/***/ }),

/***/ "./src/pages/search/style.scss":
/*!*************************************!*\
  !*** ./src/pages/search/style.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/search/index.js","runtime","vendors"]]]);