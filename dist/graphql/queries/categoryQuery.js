"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.categoryInDepartment = exports.productCategory = exports.category = exports.categories = void 0;

var _graphql = require("graphql");

var _axios = _interopRequireDefault(require("axios"));

var _variable = require("../../utils/variable");

var _categorySchema = require("../schema/categorySchema");

const categories = {
  type: _categorySchema.categoriesType,

  resolve(parent, args) {
    return _axios.default.get(`${_variable.baseUrl}/categories`).then(res => res.data.data);
  }

};
exports.categories = categories;
const category = {
  type: _categorySchema.categoryType,
  args: {
    category_id: {
      type: _graphql.GraphQLInt
    }
  },

  resolve(parent, args) {
    return _axios.default.get(`${_variable.baseUrl}/categories/${args.category_id}`).then(res => res.data.data);
  }

};
exports.category = category;
const productCategory = {
  type: _categorySchema.categoryType,
  args: {
    product_id: {
      type: _graphql.GraphQLInt
    }
  },

  resolve(parent, args) {
    return _axios.default.get(`${_variable.baseUrl}/categories/inProduct/${args.product_id}`).then(res => res.data.data);
  }

};
exports.productCategory = productCategory;
const categoryInDepartment = {
  type: new _graphql.GraphQLList(_categorySchema.categoryType),
  args: {
    department_id: {
      type: _graphql.GraphQLInt
    }
  },

  resolve(parent, args) {
    return _axios.default.get(`${_variable.baseUrl}/categories/inDepartment/${args.department_id}`).then(res => res.data.data);
  }

};
exports.categoryInDepartment = categoryInDepartment;