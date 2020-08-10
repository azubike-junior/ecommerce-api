"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shippings = exports.shipping = void 0;

var _shippingSchema = require("../schema/shippingSchema");

var _graphql = require("graphql");

var _axios = _interopRequireDefault(require("axios"));

var _variable = require("../../utils/variable");

const shippings = {
  type: new _graphql.GraphQLList(_shippingSchema.shippingType),

  resolve(parent, args) {
    return _axios.default.get(`${_variable.baseUrl}/shipping/regions`).then(res => res.data.data);
  }

};
exports.shippings = shippings;
const shipping = {
  type: _shippingSchema.shippingType,
  args: {
    shipping_region_id: {
      type: _graphql.GraphQLInt
    }
  },

  resolve(parent, args) {
    return _axios.default.get(`${_variable.baseUrl}/shipping/regions/${args.shipping_region_id}`).then(res => res.data.data);
  }

};
exports.shipping = shipping;