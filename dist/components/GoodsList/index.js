(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/GoodsList/index"],{

/***/ "./src/components/GoodsList/index.jsx":
/*!********************************************!*\
  !*** ./src/components/GoodsList/index.jsx ***!
  \********************************************/
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
/* eslint-disable taro/no-stateless-component */


var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(/*! ./style.scss */ "./src/components/GoodsList/style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoodsList = (_temp2 = _class = function (_Taro$Component) {
  _inherits(GoodsList, _Taro$Component);

  function GoodsList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GoodsList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GoodsList.__proto__ || Object.getPrototypeOf(GoodsList)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray2", "goods"], _this.anonymousFunc0Map = {}, _this.customComponents = ["GoodsItem"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GoodsList, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(GoodsList.prototype.__proto__ || Object.getPrototypeOf(GoodsList.prototype), "_constructor", this).call(this, props);

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
      var props = this.__props;

      var goods = props.goods;


      var goToDetail = function goToDetail(id) {
        _taroWeapp2.default.navigateTo({
          url: "/pages/detail/index?id=" + id
        });
      };

      var loopArray2 = goods.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp2 = item.$original.id + "-" + index;

        var _$indexKey = "bzzzz" + index;

        _this2.anonymousFunc0Map[_$indexKey] = function () {
          return goToDetail(item.$original.id);
        };

        var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "czzzzzzzzz" + index, true),
            _genCompid2 = _slicedToArray(_genCompid, 2),
            $prevCompid__3 = _genCompid2[0],
            $compid__3 = _genCompid2[1];

        _taroWeapp.propsManager.set({
          "name": item.$original.name,
          "imgSrc": item.$original.url[0],
          "price": item.$original.price
        }, $compid__3, $prevCompid__3);
        return {
          $loopState__temp2: $loopState__temp2,
          _$indexKey: _$indexKey,
          $compid__3: $compid__3,
          $original: item.$original
        };
      });
      Object.assign(this.__state, {
        loopArray2: loopArray2,
        goods: goods
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

  return GoodsList;
}(_taroWeapp2.default.Component), _class.$$events = ["anonymousFunc0"], _class.$$componentPath = "components/GoodsList/index", _temp2);


GoodsList.defaultProps = {
  goods: []
};

GoodsList.propTypes = {
  goods: _propTypes2.default.instanceOf(Array).isRequired
};

exports.default = GoodsList;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(GoodsList));

/***/ }),

/***/ "./src/components/GoodsList/style.scss":
/*!*********************************************!*\
  !*** ./src/components/GoodsList/style.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/components/GoodsList/index.jsx","runtime","vendors"]]]);