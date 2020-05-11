import express from 'express';
const paymentRoute = express.Router();
import PaymentController from '../controllers/payment'
import {
    validationBody
} from '../middlewares/validator';
import {
    paymentSchema
} from '../validation/schema'

paymentRoute.post('/charge', validationBody(paymentSchema), PaymentController.chargeCustomer)

export default paymentRoute