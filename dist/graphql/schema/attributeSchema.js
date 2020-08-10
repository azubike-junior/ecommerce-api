"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductAttributeType = exports.AttributeValueType = exports.AttributeType = void 0;

var _graphql = require("graphql");

const AttributeType = new _graphql.GraphQLObjectType({
  name: 'attribute',
  fields: () => ({
    attribute_id: {
      type: _graphql.GraphQLInt
    },
    name: {
      type: _graphql.GraphQLString
    }
  })
});
exports.AttributeType = AttributeType;
const AttributeValueType = new _graphql.GraphQLObjectType({
  name: 'attribute_value',
  fields: () => ({
    attribute_value_id: {
      type: _graphql.GraphQLInt
    },
    attribute_id: {
      type: _graphql.GraphQLInt
    },
    value: {
      type: _graphql.GraphQLString
    }
  })
});
exports.AttributeValueType = AttributeValueType;
const ProductAttributeType = new _graphql.GraphQLObjectType({
  name: 'product_attribute',
  fields: () => ({
    attribute_value_id: {
      type: _graphql.GraphQLInt
    },
    product_id: {
      type: _graphql.GraphQLInt
    },
    attribute_value: {
      type: _graphql.GraphQLString
    },
    attribute_name: {
      type: _graphql.GraphQLString
    }
  })
});
exports.ProductAttributeType = ProductAttributeType;