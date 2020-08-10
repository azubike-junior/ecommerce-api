"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchType = exports.reviewType = exports.previousType = exports.nextType = exports.productsType = exports.productType = void 0;

var _graphql = require("graphql");

const productType = new _graphql.GraphQLObjectType({
  name: 'product',
  fields: () => ({
    product_id: {
      type: _graphql.GraphQLInt
    },
    name: {
      type: _graphql.GraphQLString
    },
    description: {
      type: _graphql.GraphQLString
    },
    price: {
      type: _graphql.GraphQLString
    },
    discounted_price: {
      type: _graphql.GraphQLString
    },
    image: {
      type: _graphql.GraphQLString
    },
    image_2: {
      type: _graphql.GraphQLString
    },
    thumbnail: {
      type: _graphql.GraphQLString
    },
    display: {
      type: _graphql.GraphQLString
    },
    department_id: {
      type: _graphql.GraphQLInt
    },
    category_id: {
      type: _graphql.GraphQLInt
    },
    query_string: {
      type: _graphql.GraphQLString
    }
  })
});
exports.productType = productType;
const productsType = new _graphql.GraphQLObjectType({
  name: 'products',
  fields: () => ({
    products: {
      type: new _graphql.GraphQLList(productType)
    },
    counts: {
      type: _graphql.GraphQLInt
    },
    next: {
      type: nextType
    },
    previous: {
      type: previousType
    }
  })
});
exports.productsType = productsType;
const searchType = new _graphql.GraphQLObjectType({
  name: 'searchRecord',
  fields: () => ({
    allSearchProducts: {
      type: new _graphql.GraphQLList(productType)
    },
    counts: {
      type: _graphql.GraphQLInt
    },
    next: {
      type: nextType
    },
    previous: {
      type: previousType
    }
  })
});
exports.searchType = searchType;
const nextType = new _graphql.GraphQLObjectType({
  name: 'next',
  fields: () => ({
    page: {
      type: _graphql.GraphQLInt
    },
    limit: {
      type: _graphql.GraphQLInt
    }
  })
});
exports.nextType = nextType;
const previousType = new _graphql.GraphQLObjectType({
  name: 'previous',
  fields: () => ({
    page: {
      type: _graphql.GraphQLInt
    },
    limit: {
      type: _graphql.GraphQLInt
    }
  })
});
exports.previousType = previousType;
const reviewType = new _graphql.GraphQLObjectType({
  name: 'review',
  fields: () => ({
    review_id: {
      type: _graphql.GraphQLInt
    },
    rating: {
      type: _graphql.GraphQLInt
    },
    review: {
      type: _graphql.GraphQLString
    },
    product_id: {
      type: _graphql.GraphQLInt
    },
    customer_id: {
      type: _graphql.GraphQLInt
    }
  })
});
exports.reviewType = reviewType;