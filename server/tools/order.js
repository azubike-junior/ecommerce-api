import models from '../models';
import Promise from 'bluebird'
const {
    order,
    orderDetail
} = models
import {
    PAID
} from '../utils/variable'

export default class OrderTool {
    static async createOrder(option) {
        return await order.create(option)
    }

    static async getOneOrder(id) {
        return await order.findOne({
            where: {
                order_id: id
            },
            include: [{
                model: orderDetail
            }]
        })
    }

    static async getOrderByCustomer(order_id, customer_id) {
        return await order.findAll({
            where: {
                order_id,
                customer_id
            }
        })
    }

    static async createOrderDetails(allItems) {
        Promise.mapSeries(allItems, (item) => {
            orderDetail.create(item);
        }).then(result => {
            return result
        })
    }

    static async markPaidOrder(order) {
        order.confirmPayment()
        return order
    }

    static async getOrderDetail(id) {
        return order.findOne({
            where: {
                order_id: id
            }
        })
    }

    static async getOrderDetailsByCustomer(id) {
        return await order.findAll({
            where: {
                customer_id: id
            },
            include: [{
                model: orderDetail
            }]
        })
    }
}