import isEmpty from 'lodash.isempty'
import ResponseTool from '../utils/response';
import models from '../models';
const {
    shoppingCart
} = models

export default async (req, res, next) => {
    const {
        cart_id
    } = req.body
    const foundCart = await shoppingCart.findOne({
        where: {
            cart_id
        }
    })
    if (!isEmpty(foundCart)) {
        return next()
    }
    return await ResponseTool.httpErrorResponse(res, 400, null, 'cart_id field is empty')
}

export const findItem = async (req, res, next) => {
    const {
        item_id
    } = req.params
    const foundItem = await shoppingCart.findOne({
        where: {
            item_id
        }
    })
    if (!isEmpty(foundItem)) {
        req.item = foundItem
        return next()
    }
    return await ResponseTool.httpErrorResponse(res,
        400, null, 'the item field is empty')
}