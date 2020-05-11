import express from 'express';
import ShippingController from '../controllers/shipping';
const shippingRoute = express.Router();
import findShipping from '../middlewares/shipping'

shippingRoute.get('/regions', ShippingController.getAllShippings);
shippingRoute.get('/regions/:shipping_region_id', ShippingController.getOneshipping)

export default shippingRoute