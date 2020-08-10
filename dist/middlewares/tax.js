"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findTax = void 0;

var _tax = _interopRequireDefault(require("../tools/tax"));

var _lodash = _interopRequireDefault(require("lodash.isempty"));

var _response = _interopRequireDefault(require("../utils/response"));

const findTax = async (req, res, next) => {
  const {
    tax_id
  } = req.body;

  try {
    const foundTax = await _tax.default.getOneTax(tax_id);

    if (!(0, _lodash.default)(foundTax)) {
      return next();
    }

    return await _response.default.httpErrorResponse(res, null, 400, 'The field Tax_id is Empty');
  } catch (e) {
    console.log(e);
  }
};

exports.findTax = findTax;