import express from 'express';
import CustomerController from '../controllers/customer'
import {
    findRegion
} from '../middlewares/shipping'
import {
    findCustomer
} from '../middlewares/customer';
const customerRoute = express.Router()
import verifyToken from '../middlewares/authentication'

customerRoute.put('/', verifyToken, findCustomer, CustomerController.updateCustomerData)
customerRoute.put('/address', verifyToken, findCustomer, findRegion, CustomerController.updateCustomerAddress)
customerRoute.put('/creditCard', verifyToken, findCustomer, CustomerController.updateCreditCard)

export default customerRoute