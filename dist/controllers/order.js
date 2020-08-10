"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _order = _interopRequireDefault(require("../tools/order"));

var _response = _interopRequireDefault(require("../utils/response"));

var _lodash = _interopRequireDefault(require("lodash.isempty"));

var _email = _interopRequireDefault(require("../worker/email"));

var _formats = _interopRequireWildcard(require("../utils/formats"));

var _shopping_cart = _interopRequireDefault(require("../tools/shopping_cart"));

class OrderController {
  static async getOneOrder(req, res) {
    const {
      order_id
    } = req.params;
    const foundOrder = await _order.default.getOneOrder(order_id);

    if (!(0, _lodash.default)(foundOrder)) {
      return await _response.default.successResponse(res, foundOrder, 200, 'order Retrieved');
    }

    return await _response.default.httpErrorResponse(res, null, 404, 'Order not found');
  }

  static async createOrder(req, res) {
    try {
      const {
        body: {
          cart_id,
          shipping_id,
          tax_id
        },
        user: {
          customer_id
        },
        customer
      } = req;
      const cart = await _shopping_cart.default.getProducts(cart_id);
      const totalAmount = cart.reduce((total_amount, item) => {
        return total_amount += item.quantity * item.product.price - item.product.discounted_price;
      }, 0);
      const newOrder = await _order.default.createOrder({
        shipping_id,
        customer_id,
        created_on: new Date(),
        tax_id,
        total_amount: totalAmount.toFixed(2)
      });
      await _shopping_cart.default.emptyCart(cart_id);
      const order_id = await newOrder.get('order_id');
      const allItems = (0, _formats.prepareProducts)(cart, order_id);
      await _order.default.createOrderDetails(allItems);
      await _email.default.sendOrder(customer.email, cart, order_id);
      const result = {
        order_id: order_id
      };
      return _response.default.successResponse(res, result, 201, 'order posted');
    } catch (e) {
      return _response.default.serverError(res, e, 400, 'server Error');
    }
  }

  static async getCustomerOrder(req, res) {
    const {
      customer_id
    } = req.user;
    const foundCustomerOrderDetail = await _order.default.getOrderDetailsByCustomer(customer_id);

    if (!(0, _lodash.default)(foundCustomerOrderDetail)) {
      return await _response.default.successResponse(res, foundCustomerOrderDetail, 200, 'All customer order retrieved');
    }

    return await _response.default.httpErrorResponse(res, 404, null, 'No customer order details');
  }

  static async getShortOrderDetail(req, res) {
    const {
      order_id
    } = req.params;
    const orderDetail = await _order.default.getOrderDetail(order_id);

    if (!(0, _lodash.default)(orderDetail)) {
      const details = (0, _formats.default)(orderDetail);
      return await _response.default.successResponse(res, details, 200, 'Order Detail Retrieved');
    }

    return await _response.default.httpErrorResponse(res, null, 404, 'Order Detail Not Found');
  }

  static async setOrderAuthCode(req, res) {
    const {
      params: {
        order_id
      },
      body: {
        auth_code,
        Reference
      }
    } = req;
    const order = await _order.default.getOrder(order_id);

    if (!(0, _lodash.default)(order)) {
      await order.setAuthCode(auth_code, Reference);
      return _response.default.successResponse(res, order, 201, 'authCode/reference has been updated');
    }

    return _response.default.httpErrorResponse(res, null, 404, 'No order found');
  }

  static async updateShippedOn(req, res) {
    const {
      params: {
        order_id
      }
    } = req;
    const order = await _order.default.getOrder(order_id);

    if (!(0, _lodash.default)(order)) {
      await order.setShippedDate();
      return _response.default.successResponse(res, order, 201, 'shipped_on date as been added');
    }

    return _response.default.httpErrorResponse(res, null, 404, 'No order found');
  }

  static async updateOrder(req, res) {
    const {
      params: {
        order_id
      },
      body: {
        comments,
        name
      }
    } = req;
    const order = await _order.default.getOrder(order_id);

    if (!(0, _lodash.default)(order)) {
      const updated = await order.updateOrder(comments, name);
      return _response.default.successResponse(res, order, 201, 'order has been updated');
    }

    return _response.default.httpErrorResponse(res, null, 404, 'not found');
  }

}

exports.default = OrderController;