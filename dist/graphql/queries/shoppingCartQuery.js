"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeProduct = exports.emptyCart = exports.getSavedItems = exports.saveItemForLater = exports.moveItemToCart = exports.totalAmount = exports.productsInCart = exports.generateCartId = void 0;

var _graphql = require("graphql");

var _axios = _interopRequireDefault(require("axios"));

var _variable = require("../../utils/variable");

var _shoppingCartSchema = require("../schema/shoppingCartSchema");

const generateCartId = {
  type: _shoppingCartSchema.cartType,

  resolve(parent, args) {
    return _axios.default.get(`${_variable.baseUrl}/shoppingCart/generateUniqueId`).then(res => res.data);
  }

};
exports.generateCartId = generateCartId;
const productsInCart = {
  type: new _graphql.GraphQLList(_shoppingCartSchema.shoppingCartType),
  args: {
    cart_id: {
      type: _graphql.GraphQLString
    }
  },

  resolve(parent, args) {
    return _axios.default.get(`${_variable.baseUrl}/shoppingCart/${args.cart_id}`).then(res => res.data.data);
  }

};
exports.productsInCart = productsInCart;
const totalAmount = {
  type: _shoppingCartSchema.shoppingCartType,
  args: {
    cart_id: {
      type: _graphql.GraphQLString
    }
  },

  resolve(parent, args) {
    return _axios.default.get(`${_variable.baseUrl}/shoppingCart/totalAmount/${args.cart_id}`).then(res => res.data.data);
  }

};
exports.totalAmount = totalAmount;
const moveItemToCart = {
  type: _shoppingCartSchema.shoppingCartType,
  args: {
    item_id: {
      type: _graphql.GraphQLInt
    }
  },

  resolve(parent, args) {
    return _axios.default.get(`${_variable.baseUrl}/shoppingCart/moveItem/${args.item_id}`).then(res => res.data.data);
  }

};
exports.moveItemToCart = moveItemToCart;
const saveItemForLater = {
  type: _shoppingCartSchema.shoppingCartType,
  args: {
    item_id: {
      type: _graphql.GraphQLInt
    }
  },

  resolve(parent, args) {
    return _axios.default.get(`${_variable.baseUrl}/shoppingCart/saveForLater/${args.item_id}`).then(res => res.data.data);
  }

};
exports.saveItemForLater = saveItemForLater;
const getSavedItems = {
  type: new _graphql.GraphQLList(_shoppingCartSchema.shoppingCartType),
  args: {
    cart_id: {
      type: _graphql.GraphQLString
    }
  },

  resolve(parent, args) {
    return _axios.default.get(`${_variable.baseUrl}/shoppingCart/getSavedItem/${args.cart_id}`).then(res => res.data.data);
  }

};
exports.getSavedItems = getSavedItems;
const emptyCart = {
  type: _shoppingCartSchema.shoppingCartType,
  args: {
    cart_id: {
      type: _graphql.GraphQLString
    }
  },

  resolve(parent, args) {
    return _axios.default.delete(`${_variable.baseUrl}/shoppingCart/empty/${args.cart_id}`).then(res => res.data);
  }

};
exports.emptyCart = emptyCart;
const removeProduct = {
  type: _shoppingCartSchema.shoppingCartType,
  args: {
    item_id: {
      type: _graphql.GraphQLString
    }
  },

  resolve(parent, args) {
    return _axios.default.delete(`${_variable.baseUrl}/shoppingCart/removeProduct/${args.item_id}`).then(res => res.data);
  }

};
exports.removeProduct = removeProduct;