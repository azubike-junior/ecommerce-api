import OrderTool from '../tools/order';
import isEmpty from 'lodash.isempty';
import ResponseTool from '../utils/response';
import {
    PAID
} from '../utils/variable';
import {
    makePayment
} from '../utils/charges';
import AuditTool from '../tools/audit';

export default class PaymentController {
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
            const order = await OrderTool.getOneOrder(order_id);
            if (isEmpty(order)) {
                return await ResponseTool.httpErrorResponse(res, null, 400, `order is empty ${order_id}`);
            }
            if (order.status === PAID) {
                return await ResponseTool.httpErrorResponse(res, null, 400, `payment has been made for this order ${order_id}`);
            }
            const charges = makePayment(stripeToken, amount, current, description);
            const newAudit = {
                order_id,
                created_on: new Date(),
                message: 'order successful',
                code: 200
            };
            await AuditTool.createAudit(newAudit);
            await OrderTool.markPaidOrder(order);
            return ResponseTool.successResponse(res, charges, 200, 'payment successful');
        } catch (e) {
            switch (e.type) {
                case 'StripeInvalidRequestError': {
                    const newAudit = {
                        order_id,
                        created_on: new Date(),
                        message: e.message,
                        code: e.statusCode
                    };
                    await AuditTool.createAudit(newAudit);
                    return await res.json({
                        message: e.message,
                        code: 500
                    });
                }
                default:
                    return ResponseTool.serverError;
            }
        }
    }
}