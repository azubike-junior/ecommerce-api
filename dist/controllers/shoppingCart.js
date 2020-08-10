"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _response = _interopRequireDefault(require("../utils/response"));

var _generateId = _interopRequireDefault(require("../utils/generateId"));

var _shopping_cart = _interopRequireDefault(require("../tools/shopping_cart"));

var _lodash = _interopRequireDefault(require("lodash.isempty"));

var _variable = require("../utils/variable");

var _formats = require("../utils/formats");

class ShoppingController {
  static async generateUniqueId(req, res) {
    return res.status(200).json({
      cart_id: (0, _generateId.default)()
    });
  }

  static async addProductToCart(req, res) {
    const {
      body: {
        cart_id,
        attributes,
        product_id
      }
    } = req;
    const cart = await _shopping_cart.default.getACart(cart_id, attributes, product_id);

    if ((0, _lodash.default)(cart)) {
      await _shopping_cart.default.createCart({
        cart_id,
        attributes,
        product_id,
        quantity: 1,
        added_On: new Date(),
        buy_now: _variable.MOVE_TO_CART
      });
    } else {
      await cart.increment('quantity');
    }

    const itemsInCart = await _shopping_cart.default.getProducts(cart_id);
    const allItems = (0, _formats.cartFormat)(itemsInCart);
    return await _response.default.successResponse(res, allItems, 201, 'products added to cart');
  }

  static async getTotalAmount(req, res) {
    const {
      params: {
        cart_id
      }
    } = req;
    const cart = await _shopping_cart.default.getProducts(cart_id);

    if (!(0, _lodash.default)(cart)) {
      const totalAmount = cart.reduce((total_amount, item) => {
        return total_amount += item.quantity * item.product.price - item.product.discounted_price;
      }, 0);
      const result = {
        total: totalAmount.toFixed(2)
      };
      return await _response.default.successResponse(res, result, 200, 'total amount of cart has been retrieved');
    }

    return await _response.default.httpErrorResponse(res, null, 404, 'this cart is Empty');
  }

  static async getProductsInCart(req, res) {
    const {
      params: {
        cart_id
      }
    } = req;
    const foundProductInCart = await _shopping_cart.default.getProducts(cart_id);

    if (foundProductInCart) {
      const foundItems = (0, _formats.cartFormat)(foundProductInCart);
      return await _response.default.successResponse(res, foundItems, 200, 'products in cart retrieved');
    }

    return await responseController.httpErrorResponse(res, null, '404', 'No items found in cart');
  }

  static async moveToCart(req, res) {
    const {
      item
    } = req;
    await item.saveOrMoveTocart(_variable.MOVE_TO_CART);
    return _response.default.successResponse(res, item.dataValues, 200, 'item as been moved to cart');
  }

  static async saveItemForLater(req, res) {
    const {
      item
    } = req;
    await item.saveOrMoveTocart(_variable.SAVE_PRODUCT);
    return await _response.default.successResponse(res, item.dataValues, 200, 'item as been saved for later');
  }

  static async getAllSavedItem(req, res) {
    const {
      cart_id
    } = req.params;
    const savedItem = await _shopping_cart.default.getSavedItems(cart_id);

    if (savedItem) {
      return await _response.default.successResponse(res, (0, _formats.prepareSavedItems)(savedItem), 200, 'saved items retrieved');
    }

    return await _response.default.httpErrorResponse(res, 404, null, 'No saved Item retrieved');
  }

  static async updateCartItem(req, res) {
    const {
      body: {
        quantity
      },
      item
    } = req;
    const cart = await _shopping_cart.default.updateItem(item, {
      quantity
    });
    return await _response.default.successResponse(res, cart, 201, 'cart updated successfully');
  }

  static async removeProductInCart(req, res) {
    const {
      item
    } = req;
    await _shopping_cart.default.removeItemFromCart(item.item_id);
    return await _response.default.successResponse(res, [], 200, 'item removed from cart');
  }

  static async emptyCart(req, res) {
    const {
      params: {
        cart_id
      }
    } = req;
    await _shopping_cart.default.emptyCart(cart_id);
    return await _response.default.successResponse(res, [], 200, 'cart is now empty');
  }

}

exports.default = ShoppingController;