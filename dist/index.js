"use strict";

require("@babel/polyfill");

var _express = _interopRequireDefault(require("express"));

var _handlers = _interopRequireDefault(require("./handlers"));

require("./mongo");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_express["default"].json);
app.use('/', _handlers["default"]);
app.listen('3002', function () {
  console.warn('WE up!');
});