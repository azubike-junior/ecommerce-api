import ResponseTool from '../utils/response';
import ProductTool from '../tools/product';
import isEmpty from 'lodash.isempty'

export default async (req, res, next) => {
    const {
        product_id
    } = req.body
    const product = await ProductTool.getAproduct(product_id);
    if (!isEmpty(product)) {
        req.product = product
        return next()
    }
    return await ResponseTool.httpErrorResponse(res, 400,
        null, 'the product field is empty')
}

export const findProductParam = async (req, res, next) => {
    const {
        product_id
    } = req.params
    const parsedId = parseInt(product_id, 10)
    if (!isNaN(parsedId)) {
        const product = await ProductTool.getAproduct(product_id);
        if (!isEmpty(product)) {
            req.product = product
            return next()
        }
        return await ResponseTool.httpErrorResponse(res, null, 400, `the product with this product ID ${product_id} Does not exist `)
    }
    return await ResponseTool.httpErrorResponse(res,
        null, 404, `this product ID ${product_id} is not a number `)

}