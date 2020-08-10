"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _customer = _interopRequireDefault(require("../controllers/customer"));

var _shipping = require("../middlewares/shipping");

var _customer2 = require("../middlewares/customer");

var _authentication = _interopRequireDefault(require("../middlewares/authentication"));

const customerRoute = _express.default.Router();

customerRoute.put('/', _authentication.default, _customer2.findCustomer, _customer.default.updateCustomerData);
customerRoute.put('/address', _authentication.default, _customer2.findCustomer, _shipping.findRegion, _customer.default.updateCustomerAddress);
customerRoute.put('/creditCard', _authentication.default, _customer2.findCustomer, _customer.default.updateCreditCard);
var _default = customerRoute;
exports.default = _default;