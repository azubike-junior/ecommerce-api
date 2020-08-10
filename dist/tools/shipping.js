"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = _interopRequireDefault(require("../models"));

const {
  shipping,
  shipping_region
} = _models.default;

class ShippingTool {
  static async getShippingRegion() {
    return await shipping_region.findAll();
  }

  static async getOneShipping(id) {
    return await shipping_region.findOne({
      where: {
        shipping_region_id: id
      },
      include: [{
        model: shipping
      }]
    });
  }

}

exports.default = ShippingTool;