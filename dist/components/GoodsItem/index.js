(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/GoodsItem/index"],{

/***/ "./src/components/GoodsItem/index.jsx":
/*!********************************************!*\
  !*** ./src/components/GoodsItem/index.jsx ***!
  \********************************************/
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

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(/*! ./style.scss */ "./src/components/GoodsItem/style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoodsItem = (_temp2 = _class = function (_Taro$Component) {
  _inherits(GoodsItem, _Taro$Component);

  function GoodsItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GoodsItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GoodsItem.__proto__ || Object.getPrototypeOf(GoodsItem)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["imgSrc", "name", "price"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GoodsItem, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(GoodsItem.prototype.__proto__ || Object.getPrototypeOf(GoodsItem.prototype), "_constructor", this).call(this, props);

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
      var props = this.__props;

      var imgSrc = props.imgSrc,
          name = props.name,
          price = props.price;

      Object.assign(this.__state, {
        imgSrc: imgSrc,
        name: name,
        price: price
      });
      return this.__state;
    }
  }]);

  return GoodsItem;
}(_taroWeapp2.default.Component), _class.$$events = [], _class.$$componentPath = "components/GoodsItem/index", _temp2);


GoodsItem.propTypes = {
  imgSrc: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired,
  price: _propTypes2.default.number.isRequired
};

exports.default = GoodsItem;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(GoodsItem));

/***/ }),

/***/ "./src/components/GoodsItem/style.scss":
/*!*********************************************!*\
  !*** ./src/components/GoodsItem/style.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/components/GoodsItem/index.jsx","runtime","vendors"]]]);