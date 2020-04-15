"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _post = _interopRequireDefault(require("./post"));

var _get = _interopRequireDefault(require("./get"));

var _express = require("express");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.get('/', _get["default"]);
router.post('/', _post["default"]);
var _default = router;
exports["default"] = _default;