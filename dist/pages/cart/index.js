(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/cart/index"],{

/***/ "./src/pages/cart/index.js":
/*!*********************************!*\
  !*** ./src/pages/cart/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

__webpack_require__(/*! ./index.scss */ "./src/pages/cart/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cart = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Cart, _BaseComponent);

  function Cart() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Cart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Cart.__proto__ || Object.getPrototypeOf(Cart)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = [], _this.config = {
      navigationBarTitleText: "购物车"
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Cart, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Cart.prototype.__proto__ || Object.getPrototypeOf(Cart.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "goHome",
    value: function goHome() {
      if (_taroWeapp2.default.getEnv() === _taroWeapp2.default.ENV_TYPE.WEB) {
        _taroWeapp2.default.navigateTo({
          url: "/pages/home/index"
        });
      } else {
        _taroWeapp2.default.switchTab({
          url: "/pages/home/index"
        });
      }
    }

    // componentDidMount = () => {
    //   wx.createInterstitialAd({
    //     adUnitId: 'adunit-5266635b7140e545'
    //   }).show()
    // };

  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      // 设置衣袋小红点
      // if (this.props.items.length > 0) {
      //   Taro.setTabBarBadge({
      //     index: 1,
      //     text: String(this.props.items.length)
      //   });
      // } else {
      //   Taro.removeTabBarBadge({
      //     index: 1
      //   });
      // }
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return Cart;
}(_taroWeapp.Component), _class.$$events = [], _class.$$componentPath = "pages/cart/index", _temp2);
exports.default = Cart;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Cart, true));

/***/ }),

/***/ "./src/pages/cart/index.scss":
/*!***********************************!*\
  !*** ./src/pages/cart/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/cart/index.js","runtime","vendors"]]]);