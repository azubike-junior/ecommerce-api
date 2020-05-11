import ShippingTool from '../tools/shipping';
import ResoponseTool from '../utils/response'
import ResponseTool from '../utils/response';
import isEmpty from 'lodash.isempty'

export const findRegion = async (req, res, next) => {
    const {
        shipping_region_id
    } = req.body
    const foundShippingRegion = await ShippingTool.getShippingRegion(shipping_region_id)
    if (!foundShippingRegion) {
        return await ResoponseTool.httpErrorResponse(res, 404, null, 'The field shipping region is Empty')
    }
    return next()
}

export const findShipping = async (req, res, next) => {
    const {
        shipping_id
    } = req.body;
    const shipping = await ShippingTool.getOneShipping(shipping_id);
    if (!isEmpty(shipping)) {
        return next()
    }
    return ResponseTool.httpErrorResponse(res, null, 400, 'the field shipping is Empty')
}