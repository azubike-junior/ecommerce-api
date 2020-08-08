import customerTool from '../tools/customer'
import isEmpty from 'lodash.isempty';
import ResponseTool from '../utils/response'

export default async (req, res, next) => {
    const {
        email
    } = req.body;
    const customer = await CustomerTool.getCustomer(email)
    if (!isEmpty(customer)) {
        return await ResponseTool.httpErrorResponse(res, 400, null, 'Email field is empty')
    }
    return next();
};

export const findCustomer = async (req, res, next) => {
    const {
        customer_id
    } = req.user
    try {
        const foundCustomer = await customerTool.getCustomerById(customer_id);
        if (foundCustomer) {
            req.customer = foundCustomer;
            return next()
        }
        return res.status(400).json({
            success: false,
            message: 'Customer not found',
            field: 'customer'
        })
    } catch (e) {
        console.log(e)
    }

}