"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _customer = _interopRequireDefault(require("./customer"));

var _customers = _interopRequireDefault(require("./customers"));

var _department = _interopRequireDefault(require("./department"));

var _attribute = _interopRequireDefault(require("./attribute"));

var _shoppingCart = _interopRequireDefault(require("./shoppingCart"));

var _tax = _interopRequireDefault(require("./tax"));

var _order = _interopRequireDefault(require("./order"));

var _shipping = _interopRequireDefault(require("./shipping"));

var _category = _interopRequireDefault(require("./category"));

var _product = _interopRequireDefault(require("./product"));

var _payment = _interopRequireDefault(require("./payment"));

const router = (0, _express.Router)();
router.use('/customers', _customers.default);
router.use('/customer', _customer.default);
router.use('/attributes', _attribute.default);
router.use('/department', _department.default);
router.use('/shoppingCart', _shoppingCart.default);
router.use('/tax', _tax.default);
router.use('/orders', _order.default);
router.use('/shipping', _shipping.default);
router.use('/categories', _category.default);
router.use('/products', _product.default);
router.use('/stripe', _payment.default);
var _default = router;
exports.default = _default;