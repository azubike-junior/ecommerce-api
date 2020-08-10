"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.categoryType = exports.categoriesType = void 0;

var _graphql = require("graphql");

var _productSchema = require("../schema/productSchema");

const categoryType = new _graphql.GraphQLObjectType({
  name: 'category',
  fields: () => ({
    category_id: {
      type: _graphql.GraphQLInt
    },
    name: {
      type: _graphql.GraphQLString
    },
    description: {
      type: _graphql.GraphQLString
    },
    department_id: {
      type: _graphql.GraphQLInt
    },
    product_id: {
      type: _graphql.GraphQLInt
    }
  })
});
exports.categoryType = categoryType;
const categoriesType = new _graphql.GraphQLObjectType({
  name: 'categories',
  fields: () => ({
    categories: {
      type: new _graphql.GraphQLList(categoryType)
    },
    counts: {
      type: _graphql.GraphQLInt
    },
    next: {
      type: _productSchema.nextType
    },
    previous: {
      type: _productSchema.previousType
    }
  })
});
exports.categoriesType = categoriesType;