"use strict";

require("6to5/polyfill");
var _ = require("lodash");
var should = require("should");
var Promise = (global || window).Promise = require("bluebird");
var __DEV__ = process.env.NODE_ENV !== "production";
var __PROD__ = !__DEV__;
var __BROWSER__ = typeof window === "object";
var __NODE__ = !__BROWSER__;
if (__DEV__) {
  Promise.longStackTraces();
  Error.stackTraceLimit = Infinity;
}
module.exports = {
  maybeState: function maybeState() {
    for (var _len = arguments.length, keys = Array(_len), _key = 0; _key < _len; _key++) {
      keys[_key] = arguments[_key];
    }

    var curr = this.state;
    var len = keys.length;
    for (var k = 0; k < len; k = k + 1) {
      if (!_.isObject(curr) || curr[keys[k]] === void 0) {
        return null;
      }
      curr = curr[keys[k]];
    }
    return curr;
  } };