(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/home/index"],{

/***/ "./src/pages/home/connect.js":
/*!***********************************!*\
  !*** ./src/pages/home/connect.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _user = __webpack_require__(/*! ../../flux/actions/user */ "./src/flux/actions/user.js");

var mapDispatchToProps = exports.mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    changeLogin: function changeLogin(params) {
      return dispatch((0, _user.changeLogin)(params));
    }
  };
};

var mapStateToProps = exports.mapStateToProps = function mapStateToProps(state) {
  return _extends({}, state.user);
};

/***/ }),

/***/ "./src/pages/home/index.js":
/*!*********************************!*\
  !*** ./src/pages/home/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2; /* eslint-disable import/no-unresolved */


// import io from "weapp.socket.io";


var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _request = __webpack_require__(/*! ../../utils/request */ "./src/utils/request.js");

var _request2 = _interopRequireDefault(_request);

var _homePage = __webpack_require__(/*! ../../api/homePage */ "./src/api/homePage.js");

var _homePage2 = _interopRequireDefault(_homePage);

var _user = __webpack_require__(/*! ../../api/user */ "./src/api/user.js");

var _user2 = _interopRequireDefault(_user);

var _connect = __webpack_require__(/*! ./connect */ "./src/pages/home/connect.js");

__webpack_require__(/*! ./index.scss */ "./src/pages/home/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = (_dec = (0, _redux.connect)(_connect.mapStateToProps, _connect.mapDispatchToProps), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(HomePage, _BaseComponent);

  function HomePage() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, HomePage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__0", "$compid__1", "$compid__2", "goods", "banner", "searchValue", "isLogin"], _this.config = {
      navigationBarTitleText: "zml的黑店-首页"
    }, _this.state = {
      goods: [],
      banner: [],
      searchValue: ""
    }, _this.getBanner = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var banner;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0, _request2.default)({
                url: _homePage2.default.getBanner,
                method: "GET"
              });

            case 3:
              banner = _context.sent;


              _this.setState({
                banner: banner
              });
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);

              console.log(_context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this2, [[0, 7]]);
    })), _this.getGoods = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var goods, moreGoods;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              goods = _this.state.goods;
              _context2.prev = 1;
              _context2.next = 4;
              return (0, _request2.default)({
                url: _homePage2.default.getRecommendGoods,
                method: "GET"
              });

            case 4:
              moreGoods = _context2.sent;

              _this.setState({
                goods: [].concat(_toConsumableArray(goods), _toConsumableArray(moreGoods))
              });
              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);

              console.log(_context2.t0);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[1, 8]]);
    })), _this.handleSearch = function (value) {
      console.log(value, "value");
      _this.setState({
        searchValue: value
      });
    }, _this.goToSearchPage = function () {
      _taroWeapp2.default.navigateTo({
        url: "/pages/search/index"
      });
    }, _this.customComponents = ["RootPage", "AtSearchBar", "AdSwiper", "GoodsCategory", "GoodsList"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HomePage, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(HomePage.prototype.__proto__ || Object.getPrototypeOf(HomePage.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var userInfo;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return (0, _request2.default)({
                  url: _user2.default.userInfo,
                  method: "GET"
                });

              case 3:
                userInfo = _context3.sent;

                console.log(userInfo, "userInfo");
                if (userInfo.code === -1) {
                  _taroWeapp2.default.navigateTo({
                    url: "/pages/login/index"
                  });
                } else {
                  this.getBanner();
                  this.getGoods();
                }
                _context3.next = 11;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);

                console.log(_context3.t0);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 8]]);
      }));

      function componentDidMount() {
        return _ref4.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      var isLogin = this.props.isLogin;

      console.log(isLogin, "isLogin");
      if (isLogin) {
        this.getBanner();
        this.getGoods();
      }
    }

    //分享

  }, {
    key: "onShareAppMessage",
    value: function onShareAppMessage() {
      return {
        title: "基于Taro框架开发的购物网站",
        path: "/pages/home/index"
      };
    }

    // 小程序上拉加载

  }, {
    key: "onReachBottom",
    value: function onReachBottom() {
      this.getGoods();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__0"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__0 = _genCompid2[0],
          $compid__0 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__1"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__1 = _genCompid4[0],
          $compid__1 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__2"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__2 = _genCompid6[0],
          $compid__2 = _genCompid6[1];

      var _state = this.__state,
          searchValue = _state.searchValue,
          banner = _state.banner,
          goods = _state.goods;

      _taroWeapp.propsManager.set({
        "value": searchValue,
        "onFocus": this.goToSearchPage
      }, $compid__0, $prevCompid__0);
      _taroWeapp.propsManager.set({
        "data": banner
      }, $compid__1, $prevCompid__1);
      _taroWeapp.propsManager.set({
        "goods": goods
      }, $compid__2, $prevCompid__2);
      Object.assign(this.__state, {
        $compid__0: $compid__0,
        $compid__1: $compid__1,
        $compid__2: $compid__2
      });
      return this.__state;
    }
  }]);

  return HomePage;
}(_taroWeapp.Component), _class2.$$events = [], _class2.$$componentPath = "pages/home/index", _temp2)) || _class);
exports.default = HomePage;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(HomePage, true));

/***/ }),

/***/ "./src/pages/home/index.scss":
/*!***********************************!*\
  !*** ./src/pages/home/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/home/index.js","runtime","vendors"]]]);