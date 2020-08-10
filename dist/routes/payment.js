"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _payment = _interopRequireDefault(require("../controllers/payment"));

var _validator = require("../middlewares/validator");

var _schema = require("../validation/schema");

const paymentRoute = _express.default.Router();

paymentRoute.post('/charge', (0, _validator.validationBody)(_schema.paymentSchema), _payment.default.chargeCustomer);
var _default = paymentRoute;
exports.default = _default;