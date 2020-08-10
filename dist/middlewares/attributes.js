"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findAttribute = void 0;

var _lodash = _interopRequireDefault(require("lodash.isempty"));

var _response = _interopRequireDefault(require("../utils/response"));

var _attribute_value = _interopRequireDefault(require("../tools/attribute_value"));

const findAttribute = (req, res, next) => {
  const {
    attributes
  } = req.body;
};

exports.findAttribute = findAttribute;