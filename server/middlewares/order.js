import isEmpty from 'lodash.isempty';
import OrderTool from '../tools/order';
import ResponseTool from '../utils/response';

export const confirmOrderAndCustomer = async (req, res, next) => {
    const {
        params: {
            order_id
        },
        user: {
            customer_id
        }
    } = req
    const foundOrder = await OrderTool.getOrderByCustomer(order_id, customer_id)
    if (!isEmpty(foundOrder)) {
        return next()
    }
    return await ResponseTool.httpErrorResponse(res, 404, 'field order is empty')
}