/**
 * react-btn-checkbox v0.0.1 (https://github.com/iam4x/react-btn-checkbox)
 * Copyright 2015 iam4x
 * Licensed under MIT
 */
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var Checkbox = require('./checkbox');
var Radio = require('./radio');

module.exports = {Checkbox:Checkbox, Radio:Radio};


},{"./checkbox":2,"./radio":3}],2:[function(require,module,exports){
'use strict';

var React = require('react');

var Checkbox = React.createClass({displayName: "Checkbox",
  render:function() {
    return (
      React.createElement("h1", null, "Checkbox")
    );
  }
});

module.exports = Checkbox;


},{"react":"react"}],3:[function(require,module,exports){
'use strict';

var React = require('react');

var Radio = React.createClass({displayName: "Radio",
  render:function() {
    return (
      React.createElement("h1", null, "Radio")
    );
  }
});

module.exports = Radio;


},{"react":"react"}]},{},[1]);
