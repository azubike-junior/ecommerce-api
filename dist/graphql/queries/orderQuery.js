"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOrderDetail = exports.getOneOrder = exports.getCustomerOrder = void 0;

var _graphql = require("graphql");

var _axios = _interopRequireDefault(require("axios"));

var _variable = require("../../utils/variable");

var _orderSchema = require("../schema/orderSchema");

const getCustomerOrder = {
  type: new _graphql.GraphQLList(_orderSchema.orderType),

  resolve(parent, args, req) {
    return _axios.default.get(`${_variable.baseUrl}/orders/inCustomer`, {
      headers: {
        Authorization: req.headers.authorization
      }
    }).then(res => res.data.data);
  }

};
exports.getCustomerOrder = getCustomerOrder;
const getOneOrder = {
  type: _orderSchema.orderType,
  args: {
    order_id: {
      type: _graphql.GraphQLInt
    }
  },

  resolve(parent, args, req) {
    return _axios.default.get(`${_variable.baseUrl}/orders/${args.order_id}`, {
      headers: {
        Authorization: req.headers.authorization
      }
    }).then(res => res.data.data);
  }

};
exports.getOneOrder = getOneOrder;
const getOrderDetail = {
  type: _orderSchema.orderType,
  args: {
    order_id: {
      type: _graphql.GraphQLInt
    }
  },

  resolve(parent, args, req) {
    return _axios.default.get(`${_variable.baseUrl}/orders/shortDetail/${args.order_id}`, {
      headers: {
        Authorization: req.headers.authorization
      }
    }).then(res => res.data.data);
  }

};
exports.getOrderDetail = getOrderDetail;