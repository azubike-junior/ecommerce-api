import isEmpty from 'lodash.isempty';
import CustomerTool from '../tools/customer';
import {
    comparePassword,
    removePassword
} from '../utils/password';
import {
    generateToken
} from '../middlewares/authentication'
import ResponseTool from '../utils/response';

export default class CustomerController {
    static async registerCustomer(req, res) {
        const {
            name,
            email
        } = req.body;
        const customer = await CustomerTool.getCustomer(email);
        if (customer) {
            return await ResponseTool.httpErrorResponse(res, null, 400, 'Email has been used');
        }
        const newCustomer = await CustomerTool.createCustomer({
            name,
            password: req.body.password,
            email
        });
        const token = generateToken(newCustomer.customer_id);
        return await ResponseTool.successResponse(res, token, 201, 'registered Successfully');
    }

    static async loginCustomer(req, res) {
        const {
            email,
            password
        } = req.body;
        const customer = await CustomerTool.getCustomer(email)
        if (customer) {
            const userPassword = customer.get('password')
            const isMatch = comparePassword(password, userPassword)
            if (isMatch) {
                const token = generateToken(customer.customer_id);
                return ResponseTool.successResponse(res, token, 200, 'login Successfully');
            }
            return await ResponseTool.httpErrorResponse(res, null, 400, 'invalid login credential');
        }
        return await ResponseTool.httpErrorResponse(res, null, 404, 'invalid login credentials');
    }

    static async getCustomer(req, res) {
        const {
            customer_id
        } = req.user
        console.log(customer_id)
        const foundCustomer = await CustomerTool.getCustomerById(customer_id)
        const customer = await CustomerTool.getCustomerDetails(foundCustomer)
        return ResponseTool.successResponse(res, customer, 200, 'Customer details retrieved');
    }

    static async updateCustomerData(req, res) {
        const {
            body: {
                name,
                email,
                password,
                day_phone,
                mobile_phone
            },
            customer
        } = req
        const updatedCustomerData = await CustomerTool.updateCustomerBiodata(customer, {
            name,
            email,
            password,
            day_phone,
            mobile_phone
        })
        console.log('===before', updatedCustomerData.password)
        updatedCustomerData.password = undefined;
        console.log('===after', updatedCustomerData.password)
        return await ResponseTool.successResponse(res, updatedCustomerData, 201, 'Customer Biodata updated')
    }

    static async updateCreditCard(req, res) {
        const {
            body: {
                credit_card
            },
            customer
        } = req;
        const creditCard = await CustomerTool.updateCreditCard(customer, {
            credit_card
        })
        const customerDetail = await CustomerTool.getCustomerDetails(creditCard)
        console.log(customerDetail.customer)
        return await ResponseTool.successResponse(res, customerDetail.customer, 201, 'Customer credit Card updated')
    }

    static async updateCustomerAddress(req, res) {
        const {
            body: {
                address_1,
                address_2,
                city,
                region,
                country,
                postal_code,
                shipping_region_id
            },
            customer
        } = req;
        const updatedCustomerAddress = await CustomerTool.updateCustomerAddress(customer, {
            address_1,
            address_2,
            city,
            region,
            country,
            postal_code,
            shipping_region_id
        });
        console.log(updatedCustomerAddress)
        return await ResponseTool.successResponse(res, updatedCustomerAddress, 201, 'Customer Address updated')
    }

    static facebookLogin(req, res) {
        res.status(200).json({
            message: 'customer sign successfully',
            statusCode: 200
        })
    }
}