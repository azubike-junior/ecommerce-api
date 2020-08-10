"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findShipping = exports.findRegion = void 0;

var _shipping = _interopRequireDefault(require("../tools/shipping"));

var _response = _interopRequireDefault(require("../utils/response"));

var _lodash = _interopRequireDefault(require("lodash.isempty"));

const findRegion = async (req, res, next) => {
  const {
    shipping_region_id
  } = req.body;
  const foundShippingRegion = await _shipping.default.getShippingRegion(shipping_region_id);

  if (!foundShippingRegion) {
    return await _response.default.httpErrorResponse(res, 404, null, 'The field shipping region is Empty');
  }

  return next();
};

exports.findRegion = findRegion;

const findShipping = async (req, res, next) => {
  const {
    shipping_id
  } = req.body;

  try {
    const shipping = await _shipping.default.getOneShipping(shipping_id);

    if (!(0, _lodash.default)(shipping)) {
      return next();
    }

    return _response.default.httpErrorResponse(res, null, 400, 'the field shipping is Empty');
  } catch (e) {
    console.log(e);
  }
};

exports.findShipping = findShipping;