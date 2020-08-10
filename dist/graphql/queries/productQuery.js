"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchProduct = exports.getProductsinDepartment = exports.getProductsInCategory = exports.getProductsReview = exports.getProducts = exports.getProduct = void 0;

var _graphql = require("graphql");

var _axios = _interopRequireDefault(require("axios"));

var _variable = require("../../utils/variable");

var _productSchema = require("../schema/productSchema");

const getProducts = {
  type: _productSchema.productsType,

  resolve(parent, args) {
    return _axios.default.get(`${_variable.baseUrl}/products/`).then(res => res.data.data);
  }

};
exports.getProducts = getProducts;
const getProductsinDepartment = {
  type: _productSchema.productsType,
  args: {
    department_id: {
      type: _graphql.GraphQLInt
    }
  },

  resolve(parent, args) {
    return _axios.default.get(`${_variable.baseUrl}/products/inDepartment/${args.department_id}`).then(res => res.data.data);
  }

};
exports.getProductsinDepartment = getProductsinDepartment;
const searchProduct = {
  type: _productSchema.productsType,
  args: {
    query_string: {
      type: _graphql.GraphQLString
    }
  },

  resolve(parent, args) {
    return _axios.default.get(`${_variable.baseUrl}/products/search?query_string=${args.query_string}`).then(res => res.data.data);
  }

};
exports.searchProduct = searchProduct;
const getProduct = {
  type: _productSchema.productType,
  args: {
    product_id: {
      type: _graphql.GraphQLInt
    }
  },

  resolve(parent, args) {
    return _axios.default.get(`${_variable.baseUrl}/products/${args.product_id}`).then(res => res.data.data);
  }

};
exports.getProduct = getProduct;
const getProductsInCategory = {
  type: _productSchema.productsType,
  args: {
    category_id: {
      type: _graphql.GraphQLInt
    }
  },

  resolve(parent, args) {
    return _axios.default.get(`${_variable.baseUrl}/products/inCategory/${args.category_id}`).then(res => res.data.data);
  }

};
exports.getProductsInCategory = getProductsInCategory;
const getProductsReview = {
  type: _productSchema.productsType,
  args: {
    product_id: {
      type: _graphql.GraphQLInt
    }
  },

  resolve(parent, args) {
    return _axios.default.get(`${_variable.baseUrl}/products/${args.product_id}/Reviews`).then(res => res.data.data);
  }

};
exports.getProductsReview = getProductsReview;