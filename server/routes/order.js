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
import verifyToken from '../middlewares/authentication'
import OrderController from '../controllers/order';

orderRoute.get('/inCustomer', verifyToken,
    OrderController.getCustomerOrder);
orderRoute.get('/:order_id', verifyToken, confirmOrderAndCustomer, OrderController.getOneOrder);
orderRoute.post('/', verifyToken, validationBody(orderSchema), findCustomer, findShipping, findCart, findTax, OrderController.createOrder);
orderRoute.get('/shortDetail/:order_id', verifyToken, OrderController.getShortOrderDetail);
orderRoute.put('/set_shipped_on_date/:order_id', verifyToken, OrderController.updateShippedOn);
orderRoute.put('/set_auth_code/:order_id', verifyToken, OrderController.setOrderAuthCode);
orderRoute.put('/update_order/:order_id', verifyToken, OrderController.updateOrder);


export default orderRoute