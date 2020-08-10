"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _schema = require("../validation/schema");

var _validator = require("../middlewares/validator");

var _customer = require("../middlewares/customer");

var _cart = _interopRequireDefault(require("../middlewares/cart"));

var _tax = require("../middlewares/tax");

var _shipping = require("../middlewares/shipping");

var _order = require("../middlewares/order");

var _authentication = _interopRequireDefault(require("../middlewares/authentication"));

var _order2 = _interopRequireDefault(require("../controllers/order"));

const orderRoute = _express.default.Router();

orderRoute.get('/inCustomer', _authentication.default, _order2.default.getCustomerOrder);
orderRoute.get('/:order_id', _authentication.default, _order.confirmOrderAndCustomer, _order2.default.getOneOrder);
orderRoute.post('/', _authentication.default, (0, _validator.validationBody)(_schema.orderSchema), _customer.findCustomer, _shipping.findShipping, _cart.default, _tax.findTax, _order2.default.createOrder);
orderRoute.get('/shortDetail/:order_id', _authentication.default, _order2.default.getShortOrderDetail);
orderRoute.put('/set_shipped_on_date/:order_id', _authentication.default, _order2.default.updateShippedOn);
orderRoute.put('/set_auth_code/:order_id', _authentication.default, _order2.default.setOrderAuthCode);
orderRoute.put('/update_order/:order_id', _authentication.default, _order2.default.updateOrder);
var _default = orderRoute;
exports.default = _default;