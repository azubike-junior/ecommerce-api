import {
    signInSchema,
    signUpSchema,
    updateAddressOfCustomerSchema,
    updateCardSchema,
    updateCart,
    reviewSchema,
    addShoppingCartSchema,
    orderSchema,
    paymentSchema,
} from '../validation/schema';
import ResponseTool from '../utils/response'
import {
    validateData
} from '../validation/validator';

export const validateSchema = async (req, res, next) => {
    const schemas = {
        '/signup': signUpSchema,
        '/signin': signInSchema,
        '/address': updateAddressOfCustomerSchema,
        '/creditCard': updateCardSchema,
        '/order_id': orderSchema,
        '/charge': paymentSchema,
        '/add': addShoppingCartSchema,
        '/update/:': updateCart
    }

    const validation = await validateData(req.body, schemas[`/${req.path.split('/').pop()}`])

    if (validation.hasError) {
        return await ResponseTool.httpErrorResponse(res, null, 400, validation.errors)
    }
    req.body = validation.fields;
    return next()
}