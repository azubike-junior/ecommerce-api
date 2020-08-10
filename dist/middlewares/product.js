"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findProductParam = exports.default = void 0;

var _response = _interopRequireDefault(require("../utils/response"));

var _product = _interopRequireDefault(require("../tools/product"));

var _lodash = _interopRequireDefault(require("lodash.isempty"));

var _default = async (req, res, next) => {
  const {
    product_id
  } = req.body;
  console.log(product_id);
  const product = await _product.default.getAproduct(product_id);

  if (!(0, _lodash.default)(product)) {
    req.product = product;
    return next();
  }

  return await _response.default.httpErrorResponse(res, 400, null, 'the product field is empty');
};

exports.default = _default;

const findProductParam = async (req, res, next) => {
  const {
    product_id
  } = req.params;
  const parsedId = parseInt(product_id, 10);

  if (!isNaN(parsedId)) {
    const product = await _product.default.getAproduct(product_id);

    if (!(0, _lodash.default)(product)) {
      req.product = product;
      return next();
    }

    return await _response.default.httpErrorResponse(res, null, 400, `the product with this product ID ${product_id} Does not exist `);
  }

  return await _response.default.httpErrorResponse(res, null, 404, `this product ID ${product_id} is not a number `);
};

exports.findProductParam = findProductParam;