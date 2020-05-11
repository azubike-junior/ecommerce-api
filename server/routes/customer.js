import express from 'express';
import CustomerController from '../controllers/customer'
import TokenTool from '../middlewares/authentication';
import {
    findRegion
} from '../middlewares/shipping'
import {
    findCustomer
} from '../middlewares/customer';
import {
    validationBody
} from '../middlewares/validator';
import {
    updateDataOfCustomerSchema,
    updateAddressOfCustomerSchema,
    updateCardSchema
} from '../validation/schema'
const customerRoute = express.Router()

customerRoute.put('/', TokenTool.verifyToken, findCustomer, validationBody(updateDataOfCustomerSchema), CustomerController.updateCustomerData)
customerRoute.put('/address', TokenTool.verifyToken, findCustomer, validationBody(updateAddressOfCustomerSchema), findRegion, CustomerController.updateCustomerAddress)
customerRoute.put('/creditCard', TokenTool.verifyToken, findCustomer, validationBody(updateCardSchema), CustomerController.updateCreditCard)

export default customerRoute