"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findItem = exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash.isempty"));

var _response = _interopRequireDefault(require("../utils/response"));

var _models = _interopRequireDefault(require("../models"));

const {
  shoppingCart
} = _models.default;

var _default = async (req, res, next) => {
  const {
    cart_id
  } = req.body;

  try {
    const foundCart = await shoppingCart.findOne({
      where: {
        cart_id
      }
    });

    if (!(0, _lodash.default)(foundCart)) {
      return next();
    }

    return await _response.default.httpErrorResponse(res, 400, null, 'cart_id field is empty');
  } catch (e) {
    console.log(e);
  }
};

exports.default = _default;

const findItem = async (req, res, next) => {
  const {
    item_id
  } = req.params;
  const foundItem = await shoppingCart.findOne({
    where: {
      item_id
    }
  });

  if (!(0, _lodash.default)(foundItem)) {
    req.item = foundItem;
    return next();
  }

  return await _response.default.httpErrorResponse(res, 400, null, 'the item field is empty');
};

exports.findItem = findItem;