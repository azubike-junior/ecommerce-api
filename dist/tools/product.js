"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _models = _interopRequireDefault(require("../models"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

const {
  product,
  category,
  product_category,
  review,
  department
} = _models.default;

class ProductTool {
  static async getAllProducts(option) {
    return await product.findAll(option);
  }

  static async getAproduct(id) {
    return await product.findOne({
      where: {
        product_id: id
      }
    });
  }

  static async getReviews(id) {
    return await review.findAll({
      where: {
        product_id: id
      }
    });
  }

  static async createReview(option) {
    return await review.create(option);
  }

  static countProduct(id) {
    return product.count({
      where: {
        product_id: id
      }
    });
  }

  static async getProductsInDepartment(id, option) {
    return await product.findAll(_objectSpread({
      where: {
        department_id: id
      }
    }, option));
  }

  static async getProductsInCategory(id) {
    return await product_category.findAll({
      where: {
        category_id: id
      }
    });
  }

  static async countCategories(id) {
    return await product_category.count({
      where: {
        category_id: id
      }
    });
  }

  static async getLocation(id) {
    return product.findOne({
      where: {
        product_id: id
      },
      include: [{
        model: product_category,
        model: category
      }]
    });
  }

  static async getCategories(id, pagination) {
    const opt = _objectSpread({
      where: {
        category_id: id
      }
    }, pagination, {
      include: [{
        model: product
      }]
    });

    return product_category.findAll(opt);
  }

}

exports.default = ProductTool;