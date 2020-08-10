"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCustomer = void 0;

var _customerSchema = require("../schema/customerSchema");

var _axios = _interopRequireDefault(require("axios"));

var _variable = require("../../utils/variable");

const getCustomer = {
  type: _customerSchema.customerType,

  resolve(parent, args, req) {
    return _axios.default.get(`${_variable.baseUrl}/customers/`, {
      headers: {
        Authorization: req.headers.authorization
      }
    }).then(res => res.data.data.customer.schema);
  }

};
exports.getCustomer = getCustomer;