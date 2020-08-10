"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _attribute = _interopRequireDefault(require("../controllers/attribute"));

const attributeRoute = _express.default.Router();

attributeRoute.get('/', _attribute.default.getAttributes);
attributeRoute.get('/:attribute_id', _attribute.default.getAttribute);
attributeRoute.get('/values/:attribute_id', _attribute.default.getAttributesValue);
attributeRoute.get('/inProduct/:product_id', _attribute.default.getAllproductAttributes);
var _default = attributeRoute;
exports.default = _default;