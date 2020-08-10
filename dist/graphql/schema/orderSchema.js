"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.orderType = exports.orderDetailType = void 0;

var _graphql = require("graphql");

const orderType = new _graphql.GraphQLObjectType({
  name: 'order',
  fields: () => ({
    order_id: {
      type: _graphql.GraphQLInt
    },
    total_amount: {
      type: _graphql.GraphQLString
    },
    created_on: {
      type: _graphql.GraphQLString
    },
    status: {
      type: _graphql.GraphQLBoolean
    },
    auth_code: {
      type: _graphql.GraphQLString
    },
    name: {
      type: _graphql.GraphQLString
    },
    comments: {
      type: _graphql.GraphQLString
    },
    customer_id: {
      type: _graphql.GraphQLInt
    },
    shipped_on: {
      type: _graphql.GraphQLString
    },
    shipping_id: {
      type: _graphql.GraphQLInt
    },
    tax_id: {
      type: _graphql.GraphQLInt
    },
    Reference: {
      type: _graphql.GraphQLString
    },
    order_details: {
      type: new _graphql.GraphQLList(orderDetailType)
    }
  })
});
exports.orderType = orderType;
const orderDetailType = new _graphql.GraphQLObjectType({
  name: 'order_detail',
  fields: () => ({
    order_detail_id: {
      type: _graphql.GraphQLInt
    },
    attributes: {
      type: _graphql.GraphQLString
    },
    quantity: {
      type: _graphql.GraphQLInt
    },
    product_name: {
      type: _graphql.GraphQLString
    },
    unit_cost: {
      type: _graphql.GraphQLString
    },
    order_id: {
      type: _graphql.GraphQLInt
    },
    product_id: {
      type: _graphql.GraphQLInt
    }
  })
});
exports.orderDetailType = orderDetailType;