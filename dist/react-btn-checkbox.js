/**
 * react-btn-checkbox v0.0.1 (http://iam4x.github.io/react-btn-checkbox/)
 * Copyright 2015 iam4x
 * Licensed under MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactBtn"] = factory(require("react"));
	else
		root["ReactBtn"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var Checkbox = _interopRequire(__webpack_require__(1));

	var Radio = _interopRequire(__webpack_require__(2));

	module.exports = { Checkbox: Checkbox, Radio: Radio };

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _defineProperty = function (obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); };

	var React = _interopRequire(__webpack_require__(3));

	var objectAssign = _interopRequire(__webpack_require__(5));

	var RenderButtonsMixin = _interopRequire(__webpack_require__(4));

	module.exports = React.createClass({
	  displayName: "checkbox",

	  mixins: [RenderButtonsMixin],
	  _handleClick: function _handleClick(option) {
	    this.props.onChange(objectAssign(this.props.options, _defineProperty({}, option, !this.props.options[option])));
	  },
	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "checkbox-btn-container form-group" },
	      React.createElement(
	        "label",
	        null,
	        this.props.label
	      ),
	      React.createElement(
	        "div",
	        { className: this._getGroupClasses() },
	        this._renderButtons(this.props.options)
	      )
	    );
	  }
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var React = _interopRequire(__webpack_require__(3));

	var RenderButtonsMixin = _interopRequire(__webpack_require__(4));

	module.exports = React.createClass({
	  displayName: "radio",

	  mixins: [RenderButtonsMixin],
	  getValue: function getValue() {
	    var value = undefined;
	    for (var key in this.props.options) {
	      if (this.props.options[key]) {
	        value = key;
	      }
	    }
	    return value;
	  },
	  _handleClick: function _handleClick(option) {
	    var nextOptions = {};
	    for (var key in this.props.options) {
	      nextOptions[key] = false;
	    }
	    nextOptions[option] = true;
	    return this.props.onChange(nextOptions);
	  },
	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "radio-btn-container form-group" },
	      React.createElement(
	        "label",
	        null,
	        this.props.label
	      ),
	      React.createElement(
	        "div",
	        { className: this._getGroupClasses() },
	        this._renderButtons(this.props.options)
	      )
	    );
	  }
	});

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var React = _interopRequire(__webpack_require__(3));

	module.exports = {
	  _getBootstrapClasses: function _getBootstrapClasses(option) {
	    return React.addons.classSet({
	      btn: this.props.bootstrap && true,
	      "btn-default": this.props.bootstrap,
	      active: this.props.options[option]
	    });
	  },
	  _getGroupClasses: function _getGroupClasses() {
	    return React.addons.classSet({
	      "btn-group": true,
	      bootstrap: this.props.bootstrap
	    });
	  },
	  _renderButtons: function _renderButtons() {
	    var markup = [];
	    for (var option in this.props.options) {
	      markup.push(React.createElement(
	        "label",
	        {
	          key: option,
	          className: this._getBootstrapClasses(option),
	          onClick: this._handleClick.bind(this, option) },
	        option
	      ));
	    }
	    return markup;
	  }
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	module.exports = Object.assign || function (target, source) {
		var from;
		var keys;
		var to = ToObject(target);

		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = Object.keys(Object(from));

			for (var i = 0; i < keys.length; i++) {
				to[keys[i]] = from[keys[i]];
			}
		}

		return to;
	};


/***/ }
/******/ ])
});
