"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _order = _interopRequireDefault(require("../tools/order"));

var _lodash = _interopRequireDefault(require("lodash.isempty"));

var _response = _interopRequireDefault(require("../utils/response"));

var _variable = require("../utils/variable");

var _charges = require("../utils/charges");

var _audit = _interopRequireDefault(require("../tools/audit"));

class PaymentController {
  static async chargeCustomer(req, res) {
    const {
      stripeToken,
      amount,
      description,
      currency,
      order_id
    } = req.body;
    const current = currency || 'USD';

    try {
      const order = await _order.default.getOneOrder(order_id);

      if ((0, _lodash.default)(order)) {
        return await _response.default.httpErrorResponse(res, null, 400, `order is empty ${order_id}`);
      }

      if (order.status === _variable.PAID) {
        return await _response.default.successResponse(res, null, 200, `payment has already been made for this order ${order_id}`);
      }

      const charges = (0, _charges.makePayment)(stripeToken, amount, current, description);
      const newAudit = {
        order_id,
        created_on: new Date(),
        message: 'order successful',
        code: 200
      };
      await _audit.default.createAudit(newAudit);
      await _order.default.markPaidOrder(order);
      return _response.default.successResponse(res, charges, 200, 'payment successful');
    } catch (e) {
      switch (e.type) {
        case 'StripeInvalidRequestError':
          {
            const newAudit = {
              order_id,
              created_on: new Date(),
              message: e.message,
              code: e.statusCode
            };
            await _audit.default.createAudit(newAudit);
            return await res.json({
              message: e.message,
              code: 500
            });
          }

        default:
          return _response.default.serverError;
      }
    }
  }

}

exports.default = PaymentController;