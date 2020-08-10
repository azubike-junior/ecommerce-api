"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _attribute = _interopRequireDefault(require("../tools/attribute"));

var _response = _interopRequireDefault(require("../utils/response"));

var _lodash = _interopRequireDefault(require("lodash.isempty"));

var _attribute_value = _interopRequireDefault(require("../tools/attribute_value"));

var _productAttribute = _interopRequireDefault(require("../tools/productAttribute"));

var _formats = require("../utils/formats");

class AttributeController {
  static async getAttributes(req, res) {
    try {
      const foundAttributes = await _attribute.default.getAllAttributes();
      return await _response.default.successResponse(res, foundAttributes, 200, 'All attributes retrieved');
    } catch (e) {
      console.log(e);
    }
  }

  static async getAttribute(req, res) {
    const {
      attribute_id
    } = req.params;
    const parsedId = parseInt(attribute_id, 10);

    if (!isNaN(parsedId)) {
      const foundAttribute = await _attribute.default.getAttribute(attribute_id);

      if (!(0, _lodash.default)(foundAttribute)) {
        return _response.default.successResponse(res, foundAttribute, 200, 'Attribute retrieved');
      }

      return _response.default.httpErrorResponse(res, null, 404, 'No attribute found');
    }

    return _response.default.httpErrorResponse(res, null, 400, `this Id ${attribute_id} ID is not a number`);
  }

  static async getAttributesValue(req, res) {
    const {
      attribute_id
    } = req.params;
    const parsedId = parseInt(attribute_id, 10);

    if (!isNaN(parsedId)) {
      const attributeValue = await _attribute_value.default.getAllAttributeValue(attribute_id);

      if (!(0, _lodash.default)(attributeValue)) {
        return await _response.default.successResponse(res, attributeValue, 200, 'Attributes value retrieved');
      }

      return await _response.default.httpErrorResponse(res, null, 404, 'No attribute found');
    }

    return _response.default.httpErrorResponse(res, null, 400, `this Id ${attribute_id} ID is not a number`);
  }

  static async getAllproductAttributes(req, res) {
    const {
      product_id
    } = req.params;
    const parsedId = parseInt(product_id, 10);

    if (!isNaN(parsedId)) {
      const productAttributes = await _productAttribute.default.getAllProductAttribute(product_id);

      if (!(0, _lodash.default)(productAttributes)) {
        const attributes = await (0, _formats.formatAtt)(productAttributes);
        return await _response.default.successResponse(res, attributes, 200, 'Attribute retrieved');
      }

      return await _response.default.httpErrorResponse(res, null, 404, 'No attribute found');
    }

    return _response.default.httpErrorResponse(res, null, 400, `this Id ${product_id} ID is not a number`);
  }

}

exports.default = AttributeController;