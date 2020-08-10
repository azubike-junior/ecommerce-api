"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tax = _interopRequireDefault(require("../tools/tax"));

var _lodash = _interopRequireDefault(require("lodash.isempty"));

var _response = _interopRequireDefault(require("../utils/response"));

class TaxController {
  static async getOneTax(req, res) {
    const {
      tax_id
    } = req.params;
    const parsedId = parseInt(tax_id, 10);

    if (!isNaN(parsedId)) {
      const foundTax = await _tax.default.getOneTax(tax_id);

      if (!(0, _lodash.default)(foundTax)) {
        return await _response.default.successResponse(res, foundTax, 200, 'Tax retrieved');
      }

      return await _response.default.httpErrorResponse(res, 404, null, 'No Tax found');
    }

    return await _response.default.httpErrorResponse(res, 400, null, `this ${tax_id} ID is not a number`);
  }

  static async getAllTaxes(req, res) {
    const foundTaxes = await _tax.default.getAllTaxes();
    return await _response.default.successResponse(res, foundTaxes, 200, 'Taxes retrieved');
  }

}

exports.default = TaxController;