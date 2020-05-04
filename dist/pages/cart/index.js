(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/cart/index"],{

/***/ "./src/pages/cart/connect.js":
/*!***********************************!*\
  !*** ./src/pages/cart/connect.js ***!
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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2; /* eslint-disable import/no-unresolved */


var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _cart = __webpack_require__(/*! ../../api/cart */ "./src/api/cart.js");

var _cart2 = _interopRequireDefault(_cart);

var _request = __webpack_require__(/*! ../../utils/request */ "./src/utils/request.js");

var _request2 = _interopRequireDefault(_request);

var _connect = __webpack_require__(/*! ./connect */ "./src/pages/cart/connect.js");

__webpack_require__(/*! ./index.scss */ "./src/pages/cart/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cart = (_dec = (0, _redux.connect)(_connect.mapStateToProps, null), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Cart, _BaseComponent);

  function Cart() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, Cart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Cart.__proto__ || Object.getPrototypeOf(Cart)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray108", "$compid__950", "cartItems", "userInfo"], _this.config = {
      navigationBarTitleText: "购物车"
    }, _this.state = {
      cartItems: []
    }, _this.getCartItem = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var userInfo, cartItems;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              userInfo = _this.props.userInfo;
              _context.prev = 1;
              _context.next = 4;
              return (0, _request2.default)({
                url: _cart2.default.getCartItem,
                method: "GET",
                data: {
                  userId: userInfo.id
                }
              });

            case 4:
              cartItems = _context.sent;

              console.log(cartItems, "cartItems");
              _this.setState({
                cartItems: cartItems
              });
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);

              console.log(_context.t0);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this2, [[1, 9]]);
    })), _this.countMoney = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var userInfo, cartItems, result;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              userInfo = _this.props.userInfo;
              cartItems = _this.state.cartItems;
              _context2.prev = 2;
              _context2.next = 5;
              return (0, _request2.default)({
                url: _cart2.default.addOrder,
                method: "POST",
                data: {
                  userId: userInfo.id,
                  goods: cartItems
                }
              });

            case 5:
              result = _context2.sent;

              console.log(result, "result");
              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](2);

              console.log(_context2.t0);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[2, 9]]);
    })), _this.customComponents = ["CartItem", "AtButton"], _temp), _possibleConstructorReturn(_this, _ret);
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
  }, {
    key: "componentDidMount",
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function componentDidMount() {
        return _ref4.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentDidShow",
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.getCartItem();

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function componentDidShow() {
        return _ref5.apply(this, arguments);
      }

      return componentDidShow;
    }()
  }, {
    key: "_createData",
    value: function _createData() {
      var _this3 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__950"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__950 = _genCompid2[0],
          $compid__950 = _genCompid2[1];

      var userInfo = this.__props.userInfo;
      var cartItems = this.__state.cartItems;

      var loopArray108 = cartItems.map(function (item, _anonIdx) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "bfhzzzzzzz" + _anonIdx, true),
            _genCompid4 = _slicedToArray(_genCompid3, 2),
            $prevCompid__949 = _genCompid4[0],
            $compid__949 = _genCompid4[1];

        _taroWeapp.propsManager.set(_extends({}, item.$original, {
          "userId": userInfo.id,
          "refresh": _this3.getCartItem
        }), $compid__949, $prevCompid__949);
        return {
          $compid__949: $compid__949,
          $original: item.$original
        };
      });
      _taroWeapp.propsManager.set({
        "onClick": this.countMoney
      }, $compid__950, $prevCompid__950);
      Object.assign(this.__state, {
        loopArray108: loopArray108,
        $compid__950: $compid__950
      });
      return this.__state;
    }
  }]);

  return Cart;
}(_taroWeapp.Component), _class2.$$events = [], _class2.$$componentPath = "pages/cart/index", _temp2)) || _class);
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