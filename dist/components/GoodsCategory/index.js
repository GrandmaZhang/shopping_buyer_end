(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/GoodsCategory/index"],{

/***/ "./src/components/GoodsCategory/index.jsx":
/*!************************************************!*\
  !*** ./src/components/GoodsCategory/index.jsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2; /* eslint-disable taro/no-anonymous-function-in-props */
/* eslint-disable taro/no-stateless-component */


var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _config = __webpack_require__(/*! ./config */ "./src/components/GoodsCategory/config.js");

__webpack_require__(/*! ./style.scss */ "./src/components/GoodsCategory/style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoodsCategory = (_temp2 = _class = function (_Taro$Component) {
  _inherits(GoodsCategory, _Taro$Component);

  function GoodsCategory() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GoodsCategory);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GoodsCategory.__proto__ || Object.getPrototypeOf(GoodsCategory)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray1", "categoryMap"], _this.anonymousFunc0Map = {}, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GoodsCategory, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(GoodsCategory.prototype.__proto__ || Object.getPrototypeOf(GoodsCategory.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var handleClick = function handleClick(tabKey) {
        _taroWeapp2.default.navigateTo({
          url: "/pages/search/index?id=" + tabKey
        });
      };

      var loopArray1 = _config.categoryMap.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey = "azzzz" + index;

        _this2.anonymousFunc0Map[_$indexKey] = function () {
          return handleClick(index + 1);
        };

        return {
          _$indexKey: _$indexKey,
          $original: item.$original
        };
      });
      Object.assign(this.__state, {
        loopArray1: loopArray1,
        categoryMap: _config.categoryMap
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(_$indexKey) {
      var _anonymousFunc0Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc0Map[_$indexKey] && (_anonymousFunc0Map = this.anonymousFunc0Map)[_$indexKey].apply(_anonymousFunc0Map, e);
    }
  }]);

  return GoodsCategory;
}(_taroWeapp2.default.Component), _class.$$events = ["anonymousFunc0"], _class.$$componentPath = "components/GoodsCategory/index", _temp2);
exports.default = GoodsCategory;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(GoodsCategory));

/***/ }),

/***/ "./src/components/GoodsCategory/style.scss":
/*!*************************************************!*\
  !*** ./src/components/GoodsCategory/style.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/components/GoodsCategory/index.jsx","runtime","vendors"]]]);