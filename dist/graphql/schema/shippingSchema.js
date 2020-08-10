"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shippingType = void 0;

var _graphql = require("graphql");

const shippingType = new _graphql.GraphQLObjectType({
  name: 'shipping',
  fields: () => ({
    shipping_region_id: {
      type: _graphql.GraphQLInt
    },
    shipping_region: {
      type: _graphql.GraphQLString
    },
    shippings: {
      type: new _graphql.GraphQLList(shippingsType)
    }
  })
});
exports.shippingType = shippingType;
const shippingsType = new _graphql.GraphQLObjectType({
  name: 'shippings',
  fields: () => ({
    shipping_id: {
      type: _graphql.GraphQLInt
    },
    shipping_type: {
      type: _graphql.GraphQLString
    },
    shipping_cost: {
      type: _graphql.GraphQLString
    },
    shipping_region_id: {
      type: _graphql.GraphQLInt
    },
    message: {
      type: _graphql.GraphQLString
    }
  })
});