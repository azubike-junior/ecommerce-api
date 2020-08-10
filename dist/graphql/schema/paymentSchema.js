"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paymentType = void 0;

var _graphql = require("graphql");

const paymentType = new _graphql.GraphQLObjectType({
  name: 'payment',
  fields: () => ({
    order_id: {
      type: _graphql.GraphQLInt
    },
    stripeToken: {
      type: _graphql.GraphQLString
    },
    amount: {
      type: _graphql.GraphQLInt
    },
    currency: {
      type: _graphql.GraphQLString
    },
    description: {
      type: _graphql.GraphQLString
    },
    message: {
      type: _graphql.GraphQLString
    }
  })
});
exports.paymentType = paymentType;