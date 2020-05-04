(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/login/index"],{

/***/ "./src/pages/login/connect.js":
/*!************************************!*\
  !*** ./src/pages/login/connect.js ***!
  \************************************/
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
    },
    setUserInfo: function setUserInfo(params) {
      return dispatch((0, _user.setUserInfo)(params));
    }
  };
};

var mapStateToProps = exports.mapStateToProps = function mapStateToProps(state) {
  return _extends({}, state);
};

/***/ }),

/***/ "./src/pages/login/index.js":
/*!**********************************!*\
  !*** ./src/pages/login/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _request = __webpack_require__(/*! ../../utils/request */ "./src/utils/request.js");

var _request2 = _interopRequireDefault(_request);

var _user = __webpack_require__(/*! ../../api/user */ "./src/api/user.js");

var _user2 = _interopRequireDefault(_user);

var _connect = __webpack_require__(/*! ./connect */ "./src/pages/login/connect.js");

__webpack_require__(/*! ./index.scss */ "./src/pages/login/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LOGIN = 1,
    REGISTER = 0;
var Login = (_dec = (0, _redux.connect)(_connect.mapStateToProps, _connect.mapDispatchToProps), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Login, _BaseComponent);

  function Login() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__906", "$compid__907", "$compid__908", "$compid__909", "$compid__910", "loginType", "LOGIN", "username", "password", "toastText", "isToastOpened", "changeLogin", "setUserInfo"], _this.config = {
      navigationBarTitleText: "登录"
    }, _this.handleUserNameChange = function (value) {
      _this.setState({
        username: value
      });
    }, _this.handlePasswordChange = function (value) {
      _this.setState({
        password: value
      });
    }, _this.changeLoginType = function () {
      var loginType = _this.state.loginType;

      _this.setState({
        loginType: loginType === LOGIN ? REGISTER : LOGIN
      });
    }, _this.handleRegister = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _this$state, username, password;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$state = _this.state, username = _this$state.username, password = _this$state.password;
              _context.prev = 1;
              _context.next = 4;
              return (0, _request2.default)({
                url: _user2.default.register,
                method: "POST",
                data: {
                  username: username,
                  password: password
                }
              });

            case 4:
              _this.setState({
                isToastOpened: true,
                toastText: "注册成功"
              });
              _this.handleLogin();
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
    })), _this.handleLogin = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var _this$props, changeLogin, setUserInfo, _this$state2, username, password, userInfo;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this$props = _this.props, changeLogin = _this$props.changeLogin, setUserInfo = _this$props.setUserInfo;
              _this$state2 = _this.state, username = _this$state2.username, password = _this$state2.password;
              _context2.prev = 2;
              _context2.next = 5;
              return (0, _request2.default)({
                url: _user2.default.login,
                method: "POST",
                data: {
                  username: username,
                  password: password
                }
              });

            case 5:
              userInfo = _context2.sent;

              console.log(userInfo, "userInfo");
              changeLogin(true);
              setUserInfo(userInfo);
              _this.setState({
                isToastOpened: true,
                toastText: "登录成功"
              });
              _taroWeapp2.default.switchTab({
                url: "/pages/home/index"
              });
              _context2.next = 16;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](2);

              console.log(_context2.t0);

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[2, 13]]);
    })), _this.customComponents = ["AtForm", "AtInput", "AtButton", "AtToast"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Login, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Login.prototype.__proto__ || Object.getPrototypeOf(Login.prototype), "_constructor", this).call(this, props);
      this.state = {
        username: "",
        password: "",
        loginType: LOGIN,
        toastText: "",
        isToastOpened: false
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }

    // tips

  }, {
    key: "showToast",
    value: function showToast(text) {
      _taroWeapp2.default.showToast({
        title: text,
        icon: "none"
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__906"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__906 = _genCompid2[0],
          $compid__906 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__907"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__907 = _genCompid4[0],
          $compid__907 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__908"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__908 = _genCompid6[0],
          $compid__908 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__909"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__909 = _genCompid8[0],
          $compid__909 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__910"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__910 = _genCompid10[0],
          $compid__910 = _genCompid10[1];

      var _state = this.__state,
          username = _state.username,
          password = _state.password,
          loginType = _state.loginType,
          isToastOpened = _state.isToastOpened,
          toastText = _state.toastText;


      this.anonymousFunc0 = loginType === LOGIN ? this.handleLogin : this.handleRegister;
      _taroWeapp.propsManager.set({
        "onSubmit": this.anonymousFunc0
      }, $compid__906, $prevCompid__906);
      _taroWeapp.propsManager.set({
        "name": "username",
        "title": "\u7528\u6237\u540D",
        "type": "text",
        "placeholder": "\u8BF7\u8F93\u5165\u7528\u6237\u540D",
        "value": username,
        "onChange": this.handleUserNameChange
      }, $compid__907, $prevCompid__907);
      _taroWeapp.propsManager.set({
        "name": "username",
        "title": "\u5BC6\u7801",
        "type": "password",
        "placeholder": "\u8BF7\u8F93\u5165\u5BC6\u7801",
        "value": password,
        "onChange": this.handlePasswordChange
      }, $compid__908, $prevCompid__908);
      _taroWeapp.propsManager.set({
        "formType": "submit"
      }, $compid__909, $prevCompid__909);
      _taroWeapp.propsManager.set({
        "isOpened": isToastOpened,
        "text": toastText
      }, $compid__910, $prevCompid__910);
      Object.assign(this.__state, {
        $compid__906: $compid__906,
        $compid__907: $compid__907,
        $compid__908: $compid__908,
        $compid__909: $compid__909,
        $compid__910: $compid__910,
        LOGIN: LOGIN
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }]);

  return Login;
}(_taroWeapp.Component), _class2.$$events = ["changeLoginType"], _class2.$$componentPath = "pages/login/index", _temp2)) || _class);
exports.default = Login;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Login, true));

/***/ }),

/***/ "./src/pages/login/index.scss":
/*!************************************!*\
  !*** ./src/pages/login/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/login/index.js","runtime","vendors"]]]);