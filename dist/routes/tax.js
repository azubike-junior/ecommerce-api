"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _tax = _interopRequireDefault(require("../controllers/tax"));

const taxRoute = _express.default.Router();

taxRoute.get('/', _tax.default.getAllTaxes);
taxRoute.get('/:tax_id', _tax.default.getOneTax);
var _default = taxRoute;
exports.default = _default;