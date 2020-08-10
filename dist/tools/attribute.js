"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = _interopRequireDefault(require("../models"));

const {
  attribute
} = _models.default;

class AttributeTool {
  static async getAllAttributes() {
    console.log('===it didnt get here');
    return await attribute.findAll();
  }

  static async getAttribute(id) {
    return await attribute.findOne({
      where: {
        attribute_id: id
      }
    });
  }

  static async getAttributesOfProduct(id) {
    return await attribute.findAll({
      where: {
        product_id: id
      }
    });
  }

}

exports.default = AttributeTool;