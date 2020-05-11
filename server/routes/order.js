import express from 'express';
const orderRoute = express.Router();
import {
    orderSchema
} from '../validation/schema';
import {
    validationBody
} from '../middlewares/validator'
import {
    findCustomer
} from '../middlewares/customer';
import findCart from '../middlewares/cart'
import {
    findTax
} from '../middlewares/tax'
import {
    findShipping
} from '../middlewares/shipping'
import {
    confirmOrderAndCustomer
} from '../middlewares/order'
import TokenTool from '../middlewares/authentication';
import OrderController from '../controllers/order';

orderRoute.get('/inCustomer', TokenTool.verifyToken,
    OrderController.getCustomerOrder);
orderRoute.get('/:order_id', TokenTool.verifyToken, confirmOrderAndCustomer, OrderController.getOneOrder);
orderRoute.post('/', TokenTool.verifyToken, validationBody(orderSchema), findCustomer, findShipping, findCart, findTax, OrderController.createOrder);
orderRoute.get('/shortDetail/:order_id', TokenTool.verifyToken, OrderController.getShortOrderDetail);

export default orderRoute