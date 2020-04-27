(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["npm/taro-ui/dist/weapp/components/search-bar/index"],{

/***/ "./node_modules/taro-ui/dist/weapp/components/search-bar/index.tsx":
/*!*************************************************************************!*\
  !*** ./node_modules/taro-ui/dist/weapp/components/search-bar/index.tsx ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _component = __webpack_require__(/*! ../../common/component */ "./node_modules/taro-ui/dist/weapp/common/component.tsx");

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AtSearchBar = function (_AtComponent) {
  _inherits(AtSearchBar, _AtComponent);

  function AtSearchBar() {
    _classCallCheck(this, AtSearchBar);

    var _this = _possibleConstructorReturn(this, (AtSearchBar.__proto__ || Object.getPrototypeOf(AtSearchBar)).apply(this, arguments));

    _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "rootCls", "inputType", "value", "isFocus", "disabled", "maxLength", "placeholder", "actionName", "fixed", "showActionButton", "className", "customStyle"];
    _this.handleFocus = function (event) {
      _this.setState({
        isFocus: true
      });
      _this.props.onFocus && _this.props.onFocus(event);
    };
    _this.handleBlur = function (event) {
      _this.setState({
        isFocus: false
      });
      _this.props.onBlur && _this.props.onBlur(event);
    };
    _this.handleChange = function (e) {
      _this.props.onChange(e.target.value, e);
    };
    _this.handleClear = function (event) {
      if (_this.props.onClear) {
        _this.props.onClear(event);
      } else {
        _this.props.onChange('', event);
      }
    };
    _this.handleConfirm = function (event) {
      _this.props.onConfirm && _this.props.onConfirm(event);
    };
    _this.handleActionClick = function (event) {
      _this.props.onActionClick && _this.props.onActionClick(event);
    };
    _this.customComponents = [];
    return _this;
  }

  _createClass(AtSearchBar, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(AtSearchBar.prototype.__proto__ || Object.getPrototypeOf(AtSearchBar.prototype), '_constructor', this).call(this, props);
      this.state = {
        isFocus: !!props.focus
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var _props = this.__props,
          value = _props.value,
          placeholder = _props.placeholder,
          maxLength = _props.maxLength,
          fixed = _props.fixed,
          disabled = _props.disabled,
          showActionButton = _props.showActionButton,
          actionName = _props.actionName,
          inputType = _props.inputType,
          className = _props.className,
          customStyle = _props.customStyle;
      var isFocus = this.__state.isFocus;

      var fontSize = 14;
      var rootCls = (0, _classnames2.default)('at-search-bar', {
        'at-search-bar--fixed': fixed
      }, className);
      var placeholderWrapStyle = {};
      var actionStyle = {};
      if (isFocus || !isFocus && value) {
        actionStyle.opacity = 1;
        actionStyle.marginRight = "0";
        placeholderWrapStyle.flexGrow = 0;
      } else if (!isFocus && !value) {
        placeholderWrapStyle.flexGrow = 1;
        actionStyle.opacity = 0;
        actionStyle.marginRight = "-" + ((actionName.length + 1) * fontSize + 7 + 10) + "px";
      }
      if (showActionButton) {
        actionStyle.opacity = 1;
        actionStyle.marginRight = "0";
      }
      var clearIconStyle = { display: 'flex' };
      var placeholderStyle = { visibility: 'hidden' };
      if (!value.length) {
        clearIconStyle.display = 'none';
        placeholderStyle.visibility = 'visible';
      }
      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)(customStyle);
      var anonymousState__temp2 = (0, _taroWeapp.internal_inline_style)(placeholderWrapStyle);
      var anonymousState__temp3 = (0, _taroWeapp.internal_inline_style)(placeholderStyle);
      var anonymousState__temp4 = (0, _taroWeapp.internal_inline_style)(clearIconStyle);
      var anonymousState__temp5 = (0, _taroWeapp.internal_inline_style)(actionStyle);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp5: anonymousState__temp5,
        rootCls: rootCls,
        inputType: inputType,
        value: value,
        disabled: disabled,
        maxLength: maxLength,
        placeholder: placeholder,
        actionName: actionName
      });
      return this.__state;
    }
  }]);

  return AtSearchBar;
}(_component2.default);

AtSearchBar.$$events = ["handleChange", "handleFocus", "handleBlur", "handleConfirm", "handleClear", "handleActionClick"];
AtSearchBar.$$componentPath = "Users/zhangmanlu/Desktop/shopping_mall/shopping_buyer_end/node_modules/taro-ui/dist/weapp/components/search-bar/index";
AtSearchBar.defaultProps = {
  value: '',
  placeholder: '搜索',
  maxLength: 140,
  fixed: false,
  focus: false,
  disabled: false,
  showActionButton: false,
  actionName: '搜索',
  inputType: 'text',
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onConfirm: function onConfirm() {},
  onActionClick: function onActionClick() {}
};
AtSearchBar.propTypes = {
  value: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  maxLength: _propTypes2.default.number,
  fixed: _propTypes2.default.bool,
  focus: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  showActionButton: _propTypes2.default.bool,
  actionName: _propTypes2.default.string,
  inputType: _propTypes2.default.oneOf(['text', 'number', 'idcard', 'digit']),
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onConfirm: _propTypes2.default.func,
  onActionClick: _propTypes2.default.func,
  onClear: _propTypes2.default.func
};
exports.default = AtSearchBar;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(AtSearchBar));

/***/ })

},[["./node_modules/taro-ui/dist/weapp/components/search-bar/index.tsx","runtime","vendors"]]]);