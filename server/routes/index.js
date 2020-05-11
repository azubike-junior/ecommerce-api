import {
    Router
} from 'express';
const router = Router()
import customerRoute from './customer'
import customersRoute from './customers';
import departmentRoute from './department';
import attributeRoute from './attribute';
import shoppingRoute from './shoppingCart'
import taxRoute from './tax';
import orderRoute from './order'
import shippingRoute from './shipping';
import categoryRoute from './category';
import productRoute from './product';
import paymentRoute from './payment';

router.use('/customers', customersRoute)
router.use('/customer', customerRoute)
router.use('/attributes', attributeRoute)
router.use('/department', departmentRoute)
router.use('/shoppingCart', shoppingRoute)
router.use('/tax', taxRoute)
router.use('/orders', orderRoute)
router.use('/shipping', shippingRoute)
router.use('/categories', categoryRoute)
router.use('/products', productRoute)
router.use('/stripe', paymentRoute)

export default router