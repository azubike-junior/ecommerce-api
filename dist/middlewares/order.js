"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.confirmOrderAndCustomer = void 0;

var _lodash = _interopRequireDefault(require("lodash.isempty"));

var _order = _interopRequireDefault(require("../tools/order"));

var _response = _interopRequireDefault(require("../utils/response"));

const confirmOrderAndCustomer = async (req, res, next) => {
  const {
    params: {
      order_id
    },
    user: {
      customer_id
    }
  } = req;
  const foundOrder = await _order.default.getOrderByCustomer(order_id, customer_id);

  if (!(0, _lodash.default)(foundOrder)) {
    return next();
  }

  return await _response.default.httpErrorResponse(res, 404, 'field order is empty');
};

exports.confirmOrderAndCustomer = confirmOrderAndCustomer;