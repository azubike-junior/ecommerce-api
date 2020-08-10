"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = _interopRequireDefault(require("../models"));

const {
  attribute,
  attribute_value
} = _models.default;

class AttributeValueTool {
  static async getAllAttributeValue(id) {
    return await attribute_value.findAll({
      where: {
        attribute_id: id
      }
    });
  }

  static async getAttributeByValue(value) {
    return await attribute_value.findOne({
      where: {
        value
      }
    });
  }

  static async getAttributeByName(name) {
    return await attribute_value.findOne({
      where: {
        name
      }
    });
  }

}

exports.default = AttributeValueTool;