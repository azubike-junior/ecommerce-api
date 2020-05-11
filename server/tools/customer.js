import models from '../models';
import {
    removePassword
} from '../utils/password'
const {
    customer
} = models

export default class CustomerTool {
    static async createCustomer(option) {
        return await customer.create(option)
    }

    static async getCustomer(email) {
        return await customer.findOne({
            where: {
                email
            }
        })
    }

    static async updateCreditCard(customer, update) {
        customer.credit_card = update.credit_card || customer.credit_card;
        await customer.save();
        await customer.reload();
        return customer;
    }

    static async getCustomerById(id) {
        return await customer.findOne({
            where: {
                customer_id: id
            }
        })
    }
    static async getCustomerDetails(customerData) {
        return {
            customer: {
                schema: removePassword(
                    customerData.dataValues)
            }
        }
    }

    static async updateCustomerBiodata(customer, update) {
        customer.name = update.name || customer.name
        customer.email = update.email || customer.email
        customer.password = update.password || customer.password
        customer.day_phone = update.day_phone || customer.day_phone
        customer.mobile_phone = update.mobile_phone || customer.mobile_phone
        await customer.save();
        await customer.reload();
        return customer;
    }

    static async updateCustomerAddress(customer, update) {
        customer.address_1 = update.address_1 || customer.address_1
        customer.address_2 = update.address_2 || customer.address_2
        customer.city = update.city || customer.city
        customer.region = update.region || customer.region
        customer.postal_code = update.postal_code || customer.postal_code
        customer.shipping_region_id = update.shipping_region_id || customer.shipping_region_id
        await customer.save();
        await customer.reload();
        return customer
    }
}