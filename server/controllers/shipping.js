import ShippingTool from '../tools/shipping';
import isEmpty from 'lodash.isempty';
import ResponseTool from '../utils/response';


export default class ShippingController {
    static async getAllShippings(req, res) {
        const allShippings = await ShippingTool.getShippingRegion()
        if (!isEmpty(allShippings)) {
            return await ResponseTool.successResponse(res, allShippings, 200, 'all shippings retrieved')
        }
        return await ResponseTool.httpErrorResponse(res, null, 404, 'shipping not found')
    }

    static async getOneshipping(req, res) {
        const {
            params: {
                shipping_region_id
            }
        } = req;
        const parsedId = parseInt(shipping_region_id, 10)
        if (!isNaN(parsedId)) {
            const oneShipping = await ShippingTool.getOneShipping(parsedId);
            if (!isEmpty(oneShipping)) {
                if (!isEmpty(oneShipping.dataValues.shippings)) {
                    return await ResponseTool.successResponse(res,
                        oneShipping, 200, 'shippings retrieved')
                }
                return await ResponseTool.httpErrorResponse(res, null, 404, `Dont exist shipping_id of shipping region with this ID ${shipping_region_id}`)
            }
            return await ResponseTool.httpErrorResponse(res, null, 404, 'No shipping found')
        }
        return ResponseTool.httpErrorResponse(res, null, 400, `this Id ${shipping_region_id} ID is not a number`);
    }
}