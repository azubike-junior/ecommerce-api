"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProductQuantityInCart = exports.addProductToCart = void 0;

var _graphql = require("graphql");

var _shoppingCartSchema = require("../schema/shoppingCartSchema");

var _axios = _interopRequireDefault(require("axios"));

var _variable = require("../../utils/variable");

const addProductToCart = {
  type: new _graphql.GraphQLList(_shoppingCartSchema.shoppingCartType),
  args: {
    cart_id: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    attributes: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    product_id: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt)
    }
  },

  resolve(parent, args) {
    return _axios.default.post(`${_variable.baseUrl}/shoppingCart/add`, {
      cart_id: args.cart_id,
      attributes: args.attributes,
      product_id: args.product_id
    }).then(res => res.data.data);
  }

};
exports.addProductToCart = addProductToCart;
const updateProductQuantityInCart = {
  type: _shoppingCartSchema.shoppingCartType,
  args: {
    quantity: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt)
    },
    item_id: {
      type: _graphql.GraphQLInt
    }
  },

  resolve(parent, args) {
    return _axios.default.put(`${_variable.baseUrl}/shoppingCart/update/${args.item_id}`, {
      quantity: args.quantity
    }).then(res => res.data.data);
  }

};
exports.updateProductQuantityInCart = updateProductQuantityInCart;