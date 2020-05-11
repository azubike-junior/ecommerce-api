import orderTool from '../tools/order';
import responseTool from '../utils/response';
import isEmpty from 'lodash.isempty';
import OrderTool from '../tools/order';
import SendEmail from '../worker/email'
import
formatOrder, {
    prepareProducts
} from '../utils/formats';
import ShoppingCartTool from '../tools/shopping_cart';

export default class OrderController {
    static async getOneOrder(req, res) {
        const {
            order_id
        } = req.params
        const foundOrder = await orderTool.getOneOrder(order_id)
        if (!isEmpty(foundOrder)) {
            return await responseTool.successResponse(res, foundOrder, 200, 'order Retrieved')
        }
        return await responseTool.httpErrorResponse(res, null, 404, 'Order not found')
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
            } = req
            const cart = await ShoppingCartTool.getProducts(cart_id);
            const totalAmount = cart.reduce((total_amount, item) => {
                return total_amount += item.quantity * item.product.price - item.product.discounted_price
            }, 0)
            const newOrder = await OrderTool.createOrder({
                shipping_id,
                customer_id,
                created_on: new Date(),
                tax_id,
                total_amount: totalAmount.toFixed(2)
            })
            // await ShoppingCartTool.emptyCart(cart_id)
            const order_id = await newOrder.get('order_id');
            const allItems = prepareProducts(cart, order_id);
            await OrderTool.createOrderDetails(allItems);
            await SendEmail.sendOrder(
                customer.email,
                cart,
                order_id
            )
            const result = {
                order_id: order_id
            }
            return responseTool.successResponse(res, result, 201, 'order posted')
        } catch (e) {
            return responseTool.serverError(res, e, 400, 'server Error')
        }
    }

    static async getCustomerOrder(req, res) {
        const {
            customer_id
        } = req.user
        const foundCustomerOrderDetail = await orderTool.getOrderDetailsByCustomer(customer_id)
        if (!isEmpty(foundCustomerOrderDetail)) {
            return await responseTool.successResponse(res, foundCustomerOrderDetail, 200, 'All customer order retrieved')
        }
        return await responseTool.httpErrorResponse(res, 404, null, 'No customer order details')
    }

    static async getShortOrderDetail(req, res) {
        const {
            order_id
        } = req.params
        const orderDetail = await OrderTool.getOrderDetail(order_id);
        if (!isEmpty(orderDetail)) {
            const details = formatOrder(orderDetail)
            return await responseTool.successResponse(res, details, 200, 'Order Detail Retrieved')
        }
        return await responseTool.httpErrorResponse(res, null, 404, 'Order Detail Not Found')
    }
}