"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cartType = exports.shoppingCartType = void 0;

var _graphql = require("graphql");

const shoppingCartType = new _graphql.GraphQLObjectType({
  name: 'shoppingCart',
  fields: () => ({
    item_id: {
      type: _graphql.GraphQLInt
    },
    cart_id: {
      type: _graphql.GraphQLString
    },
    attributes: {
      type: _graphql.GraphQLString
    },
    quantity: {
      type: _graphql.GraphQLInt
    },
    buy_now: {
      type: _graphql.GraphQLString
    },
    product_price: {
      type: _graphql.GraphQLString
    },
    product_image: {
      type: _graphql.GraphQLString
    },
    discounted_price: {
      type: _graphql.GraphQLString
    },
    product_id: {
      type: _graphql.GraphQLInt
    },
    product_name: {
      type: _graphql.GraphQLString
    },
    subtotal: {
      type: _graphql.GraphQLString
    },
    total: {
      type: _graphql.GraphQLString
    },
    added_On: {
      type: _graphql.GraphQLString
    },
    price: {
      type: _graphql.GraphQLString
    },
    name: {
      type: _graphql.GraphQLString
    },
    attribute: {
      type: _graphql.GraphQLString
    }
  })
});
exports.shoppingCartType = shoppingCartType;
const cartType = new _graphql.GraphQLObjectType({
  name: 'cart_id',
  fields: () => ({
    cart_id: {
      type: _graphql.GraphQLString
    }
  })
}); // const productsInCart = new GraphQLObjectType({
//     name: 'productsInCart'
// })

exports.cartType = cartType;