"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.customerType = void 0;

var _graphql = require("graphql");

const customerType = new _graphql.GraphQLObjectType({
  name: 'customer',
  fields: () => ({
    customer_id: {
      type: _graphql.GraphQLInt
    },
    name: {
      type: _graphql.GraphQLString
    },
    email: {
      type: _graphql.GraphQLString
    },
    address_1: {
      type: _graphql.GraphQLString
    },
    address_2: {
      type: _graphql.GraphQLString
    },
    city: {
      type: _graphql.GraphQLString
    },
    postal_code: {
      type: _graphql.GraphQLString
    },
    shipping_region_id: {
      type: _graphql.GraphQLInt
    },
    credit_card: {
      type: _graphql.GraphQLString
    },
    region: {
      type: _graphql.GraphQLString
    },
    day_phone: {
      type: _graphql.GraphQLString
    },
    mobile_phone: {
      type: _graphql.GraphQLString
    },
    country: {
      type: _graphql.GraphQLString
    },
    password: {
      type: _graphql.GraphQLString
    },
    token: {
      type: _graphql.GraphQLString
    }
  })
});
exports.customerType = customerType;