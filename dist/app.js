require("./runtime");
require("./vendors");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /* eslint-disable import/no-unresolved */

// import { AtMessage } from "taro-ui";


__webpack_require__(/*! @tarojs/async-await */ "./node_modules/@tarojs/async-await/index.js");

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _weappSocket = __webpack_require__(/*! weapp.socket.io */ "./node_modules/weapp.socket.io/lib/weapp.socket.io.js");

var _weappSocket2 = _interopRequireDefault(_weappSocket);

__webpack_require__(/*! taro-ui/dist/style/index.scss */ "./node_modules/taro-ui/dist/style/index.scss");

var _user = __webpack_require__(/*! ./api/user */ "./src/api/user.js");

var _user2 = _interopRequireDefault(_user);

var _request = __webpack_require__(/*! ./utils/request */ "./src/utils/request.js");

var _request2 = _interopRequireDefault(_request);

var _index = __webpack_require__(/*! ./flux/store/index */ "./src/flux/store/index.js");

var _index2 = _interopRequireDefault(_index);

var _connect = __webpack_require__(/*! ./connect */ "./src/connect.js");

__webpack_require__(/*! ./styles/base.scss */ "./src/styles/base.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _index2.default)();

(0, _redux.setStore)(store);

if (_redux.ReduxContext.Provider) {
  _redux.ReduxContext.Provider({
    store: store
  });
  _redux.ReduxContext.Provider({
    store: store
  });
}

var _App = (_dec = (0, _redux.connect)(_connect.mapStateToProps, _connect.mapDispatchToProps), _dec(_class = function (_BaseComponent) {
  _inherits(_App, _BaseComponent);

  function _App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _App.__proto__ || Object.getPrototypeOf(_App)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      pages: ["pages/home/index", "pages/cart/index", "pages/user/index", "pages/login/index", "pages/message/index", "pages/search/index", "pages/detail/index", "pages/order/index"],
      window: {
        backgroundTextStyle: "dark",
        navigationBarBackgroundColor: "#fff",
        navigationBarTitleText: "zml的黑店",
        navigationBarTextStyle: "black"
      },
      tabBar: {
        list: [{
          pagePath: "pages/home/index",
          text: "首页",
          iconPath: "./images/tab/home.png",
          selectedIconPath: "./images/tab/home-active.png"
        }, {
          pagePath: "pages/cart/index",
          text: "购物车",
          iconPath: "./images/tab/cart.png",
          selectedIconPath: "./images/tab/cart-active.png"
        }, {
          pagePath: "pages/user/index",
          text: "我的",
          iconPath: "./images/tab/user.png",
          selectedIconPath: "./images/tab/user-active.png"
        }],
        color: "#333",
        selectedColor: "#333",
        backgroundColor: "#fff",
        borderStyle: "white"
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_App, [{
    key: "componentDidMount",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var changeLogin, userInfo, socket;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                changeLogin = this.props.changeLogin;
                _context.prev = 1;
                _context.next = 4;
                return (0, _request2.default)({
                  url: _user2.default.userInfo,
                  method: "GET"
                });

              case 4:
                userInfo = _context.sent;

                if (userInfo.code === -1) {
                  changeLogin(false);
                } else {
                  changeLogin(true);
                }
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);

                console.log(_context.t0);

              case 11:

                try {
                  socket = (0, _weappSocket2.default)("http://localhost:7001");


                  console.log(socket, "socket");
                  socket.on("connect", function () {
                    console.log("connect!");
                  });

                  socket.on("res", function () {
                    _taroWeapp2.default.atMessage({
                      message: "您的订单状态有更新～",
                      type: "info",
                      duration: 5000
                    });
                  });
                } catch (e) {
                  console.log(e, "socket error");
                }

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 8]]);
      }));

      function componentDidMount() {
        return _ref2.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "_createData",
    value: function _createData() {}
  }]);

  return _App;
}(_taroWeapp.Component)) || _class);

exports.default = _App;

App(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createApp(_App));
_taroWeapp2.default.initPxTransform({
  "designWidth": 750
});

/***/ }),

/***/ "./src/connect.js":
/*!************************!*\
  !*** ./src/connect.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = exports.mapDispatchToProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _user = __webpack_require__(/*! ./flux/actions/user */ "./src/flux/actions/user.js");

var mapDispatchToProps = exports.mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    changeLogin: function changeLogin(params) {
      return dispatch((0, _user.changeLogin)(params));
    }
  };
};

var mapStateToProps = exports.mapStateToProps = function mapStateToProps(state) {
  return _extends({}, state);
};

/***/ }),

/***/ "./src/constants/counter.js":
/*!**********************************!*\
  !*** ./src/constants/counter.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ADD = exports.ADD = "ADD";
var MINUS = exports.MINUS = "MINUS";

/***/ }),

/***/ "./src/flux/reducers/counter.js":
/*!**************************************!*\
  !*** ./src/flux/reducers/counter.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = counter;

var _counter = __webpack_require__(/*! ../../constants/counter */ "./src/constants/counter.js");

var INITIAL_STATE = {
  num: 0
};

function counter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _counter.ADD:
      return _extends({}, state, {
        num: state.num + 1
      });
    case _counter.MINUS:
      return _extends({}, state, {
        num: state.num - 1
      });
    default:
      return state;
  }
}

/***/ }),

/***/ "./src/flux/reducers/index.js":
/*!************************************!*\
  !*** ./src/flux/reducers/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/lib/redux.js");

var _counter = __webpack_require__(/*! ./counter */ "./src/flux/reducers/counter.js");

var _counter2 = _interopRequireDefault(_counter);

var _user = __webpack_require__(/*! ./user */ "./src/flux/reducers/user.js");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  counter: _counter2.default,
  user: _user2.default
});

/***/ }),

/***/ "./src/flux/reducers/user.js":
/*!***********************************!*\
  !*** ./src/flux/reducers/user.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = user;

var _user = __webpack_require__(/*! ../../constants/user */ "./src/constants/user.js");

var INITIAL_STATE = {
  num: 0
};

function user() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _user.LOGIN:
      return _extends({}, state, {
        isLogin: action.payload
      });
    case _user.SET_USER:
      return _extends({}, state, {
        userInfo: action.payload
      });
    default:
      return state;
  }
}

/***/ }),

/***/ "./src/flux/store/index.js":
/*!*********************************!*\
  !*** ./src/flux/store/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configStore;

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/lib/redux.js");

var _reduxThunk = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/lib/index.js");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");

var _index = __webpack_require__(/*! ../reducers/index */ "./src/flux/reducers/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middlewares = [_reduxThunk2.default, (0, _reduxLogger.createLogger)()];

function configStore() {
  var store = (0, _redux.createStore)(_index2.default, _redux.applyMiddleware.apply(undefined, middlewares));
  return store;
}

/***/ }),

/***/ "./src/styles/base.scss":
/*!******************************!*\
  !*** ./src/styles/base.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/app.js","runtime","vendors"]]]);;