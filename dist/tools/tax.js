"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = _interopRequireDefault(require("../models"));

const {
  tax
} = _models.default;

class TaxTool {
  static async getAllTaxes() {
    return await tax.findAll();
  }

  static async getOneTax(id) {
    return await tax.findOne({
      where: {
        tax_id: id
      }
    });
  }

}

exports.default = TaxTool;