module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2;

var _mobx = __webpack_require__(9);

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var AppState = (_class = function () {
  function AppState() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { count: 0, name: 'lcoder' },
        count = _ref.count,
        name = _ref.name;

    _classCallCheck(this, AppState);

    _initDefineProp(this, 'count', _descriptor, this);

    _initDefineProp(this, 'name', _descriptor2, this);

    this.count = count;
    this.name = name;
  }

  AppState.prototype.add = function add() {
    this.count += 1;
  };

  AppState.prototype.changeName = function changeName(name) {
    this.name = name;
  };

  AppState.prototype.toJson = function toJson() {
    return {
      count: this.count,
      name: this.name
    };
  };

  _createClass(AppState, [{
    key: 'msg',
    get: function get() {
      return this.name + ' say count is ' + this.count;
    }
  }]);

  return AppState;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'count', [_mobx.observable], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'name', [_mobx.observable], {
  enumerable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class.prototype, 'msg', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'msg'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'add', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'add'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'changeName', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'changeName'), _class.prototype)), _class);

// const appState = new AppState();
//
// autorun(() => {
//    // console.log(appState.msg);
// });
//
// setInterval(() => {
//     appState.add();
// }, 1000);
//
//
//
// export default appState

exports.default = AppState;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AppState, 'AppState', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/store/app-state.js');
}();

;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createStoreMap = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(5);

var _App2 = _interopRequireDefault(_App);

var _reactRouterDom = __webpack_require__(1);

var _mobxReact = __webpack_require__(2);

var _store = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 让mobx在服务端渲染的时候不会重复的数据使用
(0, _mobxReact.useStaticRendering)(true);

var _default = function _default(stores, routerContext, url) {
  return _react2.default.createElement(
    _mobxReact.Provider,
    stores,
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { context: routerContext, location: url },
      _react2.default.createElement(_App2.default, null)
    )
  );
};

exports.default = _default;
exports.createStoreMap = _store.createStoreMap;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/server-entry.js');
}();

;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _router = __webpack_require__(6);

var _router2 = _interopRequireDefault(_router);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    App.prototype.componentDidMount = function componentDidMount() {
        //  do something here
    };

    App.prototype.render = function render() {
        return _react2.default.createElement('div', null, _react2.default.createElement('ul', null, _react2.default.createElement('li', null, _react2.default.createElement(_reactRouterDom.Link, { to: '/list' }, 'TopicList')), _react2.default.createElement('li', null, _react2.default.createElement(_reactRouterDom.Link, { to: '/detail' }, 'TopicDetail'))), _react2.default.createElement(_router2.default, null));
    };

    return App;
}(_react2.default.Component);

exports.default = App;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(App, 'App', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/views/App.jsx');
}();

;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_react2, '_react2', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/views/App.jsx');

    __REACT_HOT_LOADER__.register(_router2, '_router2', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/views/App.jsx');

    __REACT_HOT_LOADER__.register(_interopRequireDefault, '_interopRequireDefault', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/views/App.jsx');

    __REACT_HOT_LOADER__.register(_classCallCheck, '_classCallCheck', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/views/App.jsx');

    __REACT_HOT_LOADER__.register(_possibleConstructorReturn, '_possibleConstructorReturn', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/views/App.jsx');

    __REACT_HOT_LOADER__.register(_inherits, '_inherits', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/views/App.jsx');

    __REACT_HOT_LOADER__.register(App, 'App', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/views/App.jsx');

    __REACT_HOT_LOADER__.register(_temp, '_temp', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/views/App.jsx');
}();

;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _index = __webpack_require__(7);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(11);

var _index4 = _interopRequireDefault(_index3);

var _testApi = __webpack_require__(12);

var _testApi2 = _interopRequireDefault(_testApi);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var _default = function _default() {
    return _react2.default.createElement('div', null, _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', render: function render() {
            return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/list' });
        } }), _react2.default.createElement(_reactRouterDom.Route, { path: '/list', component: _index2.default }), _react2.default.createElement(_reactRouterDom.Route, { path: '/detail', component: _index4.default }), _react2.default.createElement(_reactRouterDom.Route, { path: '/test', component: _testApi2.default }));
};

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, 'default', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/config/router.jsx');
}();

;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_react2, '_react2', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/config/router.jsx');

    __REACT_HOT_LOADER__.register(_index2, '_index2', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/config/router.jsx');

    __REACT_HOT_LOADER__.register(_index4, '_index4', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/config/router.jsx');

    __REACT_HOT_LOADER__.register(_testApi2, '_testApi2', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/config/router.jsx');

    __REACT_HOT_LOADER__.register(_interopRequireDefault, '_interopRequireDefault', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/config/router.jsx');

    __REACT_HOT_LOADER__.register(_default, '_default', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/config/router.jsx');

    __REACT_HOT_LOADER__.register(_temp, '_temp', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/config/router.jsx');
}();

;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;
exports.default = undefined;

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(2);

var _propTypes = __webpack_require__(8);

var _appState = __webpack_require__(3);

var _reactHelmet = __webpack_require__(10);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var TopicList = (_dec = (0, _mobxReact.inject)('appState'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
    _inherits(TopicList, _React$Component);

    function TopicList() {
        _classCallCheck(this, TopicList);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this));

        _this.changeName = _this.changeName.bind(_this);
        return _this;
    }

    TopicList.prototype.componentDidMount = function componentDidMount() {
        // do something here
    };

    TopicList.prototype.bootstrap = function bootstrap() {
        var _this2 = this;

        return new Promise(function (resolve) {
            setTimeout(function () {
                _this2.props.appState.count = 3;
                resolve(true);
            });
        });
    };

    TopicList.prototype.changeName = function changeName(event) {
        this.props.appState.changeName(event.target.value);
    };

    TopicList.prototype.render = function render() {
        return _react2.default.createElement('div', null, _react2.default.createElement(_reactHelmet.Helmet, null, _react2.default.createElement('title', null, 'This is topic-list title'), _react2.default.createElement('meta', { name: 'description', content: 'this is a description' })), _react2.default.createElement('input', { type: 'text', onChange: this.changeName }), _react2.default.createElement('span', null, this.props.appState.msg));
    };

    return TopicList;
}(_react2.default.Component)) || _class) || _class);
exports.default = TopicList;

TopicList.propTypes = {
    appState: _propTypes.PropTypes.instanceOf(_appState.AppState)
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(TopicList, 'TopicList', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/views/topic-list/index.jsx');
}();

;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_dec, '_dec', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/views/topic-list/index.jsx');

    __REACT_HOT_LOADER__.register(_class, '_class', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/views/topic-list/index.jsx');

    __REACT_HOT_LOADER__.register(_react2, '_react2', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/views/topic-list/index.jsx');

    __REACT_HOT_LOADER__.register(_interopRequireDefault, '_interopRequireDefault', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/views/topic-list/index.jsx');

    __REACT_HOT_LOADER__.register(_classCallCheck, '_classCallCheck', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/views/topic-list/index.jsx');

    __REACT_HOT_LOADER__.register(_possibleConstructorReturn, '_possibleConstructorReturn', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/views/topic-list/index.jsx');

    __REACT_HOT_LOADER__.register(_inherits, '_inherits', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/views/topic-list/index.jsx');

    __REACT_HOT_LOADER__.register(TopicList, 'TopicList', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/views/topic-list/index.jsx');

    __REACT_HOT_LOADER__.register(_temp, '_temp', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/views/topic-list/index.jsx');
}();

;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var TopicList = function (_React$Component) {
    _inherits(TopicList, _React$Component);

    function TopicList() {
        _classCallCheck(this, TopicList);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    TopicList.prototype.componentDidMount = function componentDidMount() {
        // do something here
    };

    TopicList.prototype.render = function render() {
        return _react2.default.createElement('div', null, 'This is topic detail.');
    };

    return TopicList;
}(_react2.default.Component);

exports.default = TopicList;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(TopicList, 'TopicList', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/views/topic-detail/index.jsx');
}();

;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_react2, '_react2', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/views/topic-detail/index.jsx');

    __REACT_HOT_LOADER__.register(_interopRequireDefault, '_interopRequireDefault', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/views/topic-detail/index.jsx');

    __REACT_HOT_LOADER__.register(_classCallCheck, '_classCallCheck', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/views/topic-detail/index.jsx');

    __REACT_HOT_LOADER__.register(_possibleConstructorReturn, '_possibleConstructorReturn', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/views/topic-detail/index.jsx');

    __REACT_HOT_LOADER__.register(_inherits, '_inherits', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/views/topic-detail/index.jsx');

    __REACT_HOT_LOADER__.register(TopicList, 'TopicList', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/views/topic-detail/index.jsx');

    __REACT_HOT_LOADER__.register(_temp, '_temp', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/views/topic-detail/index.jsx');
}();

;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(13);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/* eslint-disable */
var TestApi = function (_React$Component) {
  _inherits(TestApi, _React$Component);

  function TestApi() {
    _classCallCheck(this, TestApi);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  TestApi.prototype.getTopics = function getTopics() {
    _axios2.default.get('/api/topics').then(function (resp) {
      console.log(resp);
    }).catch(function (err) {
      console.log(err);
    });
  };

  TestApi.prototype.login = function login() {
    _axios2.default.post('/api/user/login', {
      accessToken: ' b0952a36-a24a-4f47-9d9c-7c3301e30901'
    }).then(function (resp) {
      console.log(resp);
    }).catch(function (err) {
      console.log(err);
    });
  };

  TestApi.prototype.markAll = function markAll() {
    _axios2.default.post('/api/message/mark_all?needAccessToken=true').then(function (resp) {
      console.log(resp);
    }).catch(function (err) {
      console.log(err);
    });
  };

  TestApi.prototype.render = function render() {
    return _react2.default.createElement('div', null, _react2.default.createElement('button', { onClick: this.getTopics }, 'topics'), _react2.default.createElement('button', { onClick: this.login }, 'login'), _react2.default.createElement('button', { onClick: this.markAll }, 'markAll'));
  };

  return TestApi;
}(_react2.default.Component);
/* eslint-enable */

exports.default = TestApi;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TestApi, 'TestApi', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/views/test/test-api.jsx');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_react2, '_react2', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/views/test/test-api.jsx');

  __REACT_HOT_LOADER__.register(_axios2, '_axios2', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/views/test/test-api.jsx');

  __REACT_HOT_LOADER__.register(_interopRequireDefault, '_interopRequireDefault', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/views/test/test-api.jsx');

  __REACT_HOT_LOADER__.register(_classCallCheck, '_classCallCheck', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/views/test/test-api.jsx');

  __REACT_HOT_LOADER__.register(_possibleConstructorReturn, '_possibleConstructorReturn', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/views/test/test-api.jsx');

  __REACT_HOT_LOADER__.register(_inherits, '_inherits', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/views/test/test-api.jsx');

  __REACT_HOT_LOADER__.register(TestApi, 'TestApi', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/views/test/test-api.jsx');

  __REACT_HOT_LOADER__.register(_temp, '_temp', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/views/test/test-api.jsx');
}();

;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createStoreMap = exports.AppState = undefined;

var _appState = __webpack_require__(3);

var _appState2 = _interopRequireDefault(_appState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppState = exports.AppState = _appState2.default;

var _default = {
  AppState: AppState
};
exports.default = _default;
var createStoreMap = exports.createStoreMap = function createStoreMap() {
  return {
    appState: new AppState()
  };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AppState, 'AppState', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/store/store.js');

  __REACT_HOT_LOADER__.register(createStoreMap, 'createStoreMap', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/store/store.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'A:/Users/Lcoder/Desktop/WebProject/cnode_react/client/store/store.js');
}();

;

/***/ })
/******/ ]);