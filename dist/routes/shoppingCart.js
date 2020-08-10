"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _shoppingCart = _interopRequireDefault(require("../controllers/shoppingCart"));

var _cart = require("../middlewares/cart");

var _product = _interopRequireDefault(require("../middlewares/product"));

var _schema = require("../validation/schema");

var _valiadateData = require("../middlewares/valiadateData");

var _validator = require("../middlewares/validator");

const shoppingRoute = _express.default.Router();

shoppingRoute.get('/generateUniqueId', _shoppingCart.default.generateUniqueId);
shoppingRoute.post('/add', _valiadateData.validateSchema, _product.default, _shoppingCart.default.addProductToCart);
shoppingRoute.get('/:cart_id', _shoppingCart.default.getProductsInCart);
shoppingRoute.get('/getSavedItem/:cart_id', _shoppingCart.default.getAllSavedItem);
shoppingRoute.get('/saveForLater/:item_id', _cart.findItem, _shoppingCart.default.saveItemForLater);
shoppingRoute.get('/totalAmount/:cart_id', _shoppingCart.default.getTotalAmount);
shoppingRoute.get('/moveItem/:item_id', _cart.findItem, _shoppingCart.default.moveToCart);
shoppingRoute.put('/update/:item_id', (0, _validator.validationBody)(_schema.updateCart), _cart.findItem, _shoppingCart.default.updateCartItem);
shoppingRoute.delete('/empty/:cart_id', _shoppingCart.default.emptyCart);
shoppingRoute.delete('/removeProduct/:item_id', _cart.findItem, _shoppingCart.default.removeProductInCart);
var _default = shoppingRoute;
exports.default = _default;