"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findCustomer = exports.default = void 0;

var _customer = _interopRequireDefault(require("../tools/customer"));

var _lodash = _interopRequireDefault(require("lodash.isempty"));

var _response = _interopRequireDefault(require("../utils/response"));

var _default = async (req, res, next) => {
  const {
    email
  } = req.body;
  const customer = await CustomerTool.getCustomer(email);

  if (!(0, _lodash.default)(customer)) {
    return await _response.default.httpErrorResponse(res, 400, null, 'Email field is empty');
  }

  return next();
};

exports.default = _default;

const findCustomer = async (req, res, next) => {
  const {
    customer_id
  } = req.user;

  try {
    const foundCustomer = await _customer.default.getCustomerById(customer_id);

    if (foundCustomer) {
      req.customer = foundCustomer;
      return next();
    }

    return res.status(400).json({
      success: false,
      message: 'Customer not found',
      field: 'customer'
    });
  } catch (e) {
    console.log(e);
  }
};

exports.findCustomer = findCustomer;