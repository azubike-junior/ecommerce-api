"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateSchema = void 0;

var _schema = require("../validation/schema");

var _response = _interopRequireDefault(require("../utils/response"));

var _validator = require("../validation/validator");

const validateSchema = async (req, res, next) => {
  const schemas = {
    '/signup': _schema.signUpSchema,
    '/signin': _schema.signInSchema,
    '/address': _schema.updateAddressOfCustomerSchema,
    '/creditCard': _schema.updateCardSchema,
    '/order_id': _schema.orderSchema,
    '/charge': _schema.paymentSchema,
    '/add': _schema.addShoppingCartSchema,
    '/update/:': _schema.updateCart
  };
  const validation = await (0, _validator.validateData)(req.body, schemas[`/${req.path.split('/').pop()}`]);

  if (validation.hasError) {
    return await _response.default.httpErrorResponse(res, null, 400, validation.errors);
  }

  req.body = validation.fields;
  return next();
};

exports.validateSchema = validateSchema;