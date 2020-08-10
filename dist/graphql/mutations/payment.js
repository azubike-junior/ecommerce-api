"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makePayment = void 0;

var _graphql = require("graphql");

var _axios = _interopRequireDefault(require("axios"));

var _variable = require("../../utils/variable");

var _paymentSchema = require("../schema/paymentSchema");

const makePayment = {
  type: _paymentSchema.paymentType,
  args: {
    stripeToken: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    order_id: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt)
    },
    amount: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt)
    },
    description: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    currency: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    }
  },

  resolve(parent, args) {
    return _axios.default.post(`${_variable.baseUrl}/stripe/charge`, {
      stripeToken: args.stripeToken,
      order_id: args.order_id,
      amount: args.amount,
      description: args.description,
      currency: args.currency
    }).then(res => res.data);
  }

};
exports.makePayment = makePayment;