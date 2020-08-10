"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.taxes = exports.tax = void 0;

var _graphql = require("graphql");

var _taxSchema = require("../schema/taxSchema");

var _variable = require("../../utils/variable");

var _axios = _interopRequireDefault(require("axios"));

const taxes = {
  type: new _graphql.GraphQLList(_taxSchema.TaxType),

  resolve(parent, args) {
    return _axios.default.get(`${_variable.baseUrl}/tax`).then(res => res.data.data);
  }

};
exports.taxes = taxes;
const tax = {
  type: _taxSchema.TaxType,
  args: {
    tax_id: {
      type: _graphql.GraphQLInt
    }
  },

  resolve(parent, args) {
    return _axios.default.get(`${_variable.baseUrl}/tax/${args.tax_id}`).then(res => res.data.data);
  }

};
exports.tax = tax;