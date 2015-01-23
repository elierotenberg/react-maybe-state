"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

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
var Mixin = _interopRequire(require("../"));

var component = {
  state: {
    foo: "bar",
    a: {
      b: {
        c: {
          d: {
            e: "zoo" },
          f: {
            g: {
              h: "animal" } } } } } },
  maybeState: Mixin.maybeState };

component.maybeState("foo").should.be.exactly("bar");
(component.maybeState("bar") === null).should.be["true"];
(component.maybeState("a", "b") !== null).should.be["true"];
component.maybeState("a", "b", "c", "d", "e").should.be.exactly("zoo");
(component.maybeState("a", "c", "b", "d", "e") === null).should.be["true"];