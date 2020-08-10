"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _shipping = _interopRequireDefault(require("../controllers/shipping"));

var _shipping2 = _interopRequireDefault(require("../middlewares/shipping"));

const shippingRoute = _express.default.Router();

shippingRoute.get('/regions', _shipping.default.getAllShippings);
shippingRoute.get('/regions/:shipping_region_id', _shipping.default.getOneshipping);
var _default = shippingRoute;
exports.default = _default;