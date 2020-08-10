"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _shipping = _interopRequireDefault(require("../tools/shipping"));

var _lodash = _interopRequireDefault(require("lodash.isempty"));

var _response = _interopRequireDefault(require("../utils/response"));

class ShippingController {
  static async getAllShippings(req, res) {
    const allShippings = await _shipping.default.getShippingRegion();

    if (!(0, _lodash.default)(allShippings)) {
      return await _response.default.successResponse(res, allShippings, 200, 'all shippings retrieved');
    }

    return await _response.default.httpErrorResponse(res, null, 404, 'shipping not found');
  }

  static async getOneshipping(req, res) {
    const {
      params: {
        shipping_region_id
      }
    } = req;
    const parsedId = parseInt(shipping_region_id, 10);

    if (!isNaN(parsedId)) {
      const oneShipping = await _shipping.default.getOneShipping(parsedId);

      if (!(0, _lodash.default)(oneShipping)) {
        if (!(0, _lodash.default)(oneShipping.dataValues.shippings)) {
          return await _response.default.successResponse(res, oneShipping, 200, 'shippings retrieved');
        }

        return await _response.default.httpErrorResponse(res, null, 404, `Dont exist shipping_id of shipping region with this ID ${shipping_region_id}`);
      }

      return await _response.default.httpErrorResponse(res, null, 404, 'No shipping found');
    }

    return _response.default.httpErrorResponse(res, null, 400, `this Id ${shipping_region_id} ID is not a number`);
  }

}

exports.default = ShippingController;