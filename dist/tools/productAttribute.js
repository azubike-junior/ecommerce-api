"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = _interopRequireDefault(require("../models"));

const {
  product_attribute,
  attribute_value,
  attribute
} = _models.default;

class ProductAttribute {
  static async getAllProductAttribute(id) {
    return await product_attribute.findAll({
      where: {
        product_id: id
      },
      include: [{
        model: attribute_value,
        include: [{
          model: attribute
        }]
      }]
    });
  }

}

exports.default = ProductAttribute;