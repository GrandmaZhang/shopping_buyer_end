(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/user/index"],{

/***/ "./src/images/user/userAvatar.png":
/*!****************************************!*\
  !*** ./src/images/user/userAvatar.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/userAvatar.png";

/***/ }),

/***/ "./src/pages/user/connect.js":
/*!***********************************!*\
  !*** ./src/pages/user/connect.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var mapStateToProps = exports.mapStateToProps = function mapStateToProps(state) {
  return _extends({}, state.user);
};

/***/ }),

/***/ "./src/pages/user/index.js":
/*!*********************************!*\
  !*** ./src/pages/user/index.js ***!
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


var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _userAvatar = __webpack_require__(/*! ../../images/user/userAvatar.png */ "./src/images/user/userAvatar.png");

var _userAvatar2 = _interopRequireDefault(_userAvatar);

var _connect = __webpack_require__(/*! ./connect */ "./src/pages/user/connect.js");

__webpack_require__(/*! ./index.scss */ "./src/pages/user/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = (_dec = (0, _redux.connect)(_connect.mapStateToProps, null), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(User, _BaseComponent);

  function User() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, User);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = User.__proto__ || Object.getPrototypeOf(User)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__9", "$compid__10", "$compid__11", "$compid__12", "$compid__13", "userInfo"], _this.config = {
      navigationBarTitleText: "我的"
    }, _this.checkOrder = function () {
      _taroWeapp2.default.navigateTo({
        url: "/pages/order/index"
      });
    }, _this.checkUser = function () {
      _taroWeapp2.default.navigateTo({
        url: "/pages/userInfo/index"
      });
    }, _this.customComponents = ["AtAvatar", "AtButton", "AtIcon"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(User, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(User.prototype.__proto__ || Object.getPrototypeOf(User.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__9"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__9 = _genCompid2[0],
          $compid__9 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__10"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__10 = _genCompid4[0],
          $compid__10 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__11"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__11 = _genCompid6[0],
          $compid__11 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__12"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__12 = _genCompid8[0],
          $compid__12 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__13"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__13 = _genCompid10[0],
          $compid__13 = _genCompid10[1];

      var userInfo = this.__props.userInfo;

      _taroWeapp.propsManager.set({
        "circle": true,
        "image": _userAvatar2.default
      }, $compid__9, $prevCompid__9);
      _taroWeapp.propsManager.set({
        "onClick": this.checkUser,
        "circle": true
      }, $compid__10, $prevCompid__10);
      _taroWeapp.propsManager.set({
        "value": "user",
        "size": "24",
        "color": "#333"
      }, $compid__11, $prevCompid__11);
      _taroWeapp.propsManager.set({
        "onClick": this.checkOrder,
        "circle": true
      }, $compid__12, $prevCompid__12);
      _taroWeapp.propsManager.set({
        "value": "tags",
        "size": "24",
        "color": "#333"
      }, $compid__13, $prevCompid__13);
      Object.assign(this.__state, {
        $compid__9: $compid__9,
        $compid__10: $compid__10,
        $compid__11: $compid__11,
        $compid__12: $compid__12,
        $compid__13: $compid__13,
        userInfo: userInfo
      });
      return this.__state;
    }
  }]);

  return User;
}(_taroWeapp.Component), _class2.$$events = [], _class2.$$componentPath = "pages/user/index", _temp2)) || _class);
exports.default = User;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(User, true));

/***/ }),

/***/ "./src/pages/user/index.scss":
/*!***********************************!*\
  !*** ./src/pages/user/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/user/index.js","runtime","vendors"]]]);