import attributeTool from '../tools/attribute';
import responseTool from '../utils/response';
import isEmpty from 'lodash.isempty';
import attributeValueTool from '../tools/attribute_value';
import productAttribute from '../tools/productAttribute';
import {
    formatAtt
} from '../utils/formats'

export default class AttributeController {
    static async getAttributes(req, res) {
        try {
            const foundAttributes = await attributeTool.getAllAttributes();
            return await responseTool.successResponse(res, foundAttributes, 200, 'All attributes retrieved');
        } catch (e) {
            console.log(e)
        }
    }

    static async getAttribute(req, res) {
        const {
            attribute_id
        } = req.params;
        const parsedId = parseInt(attribute_id, 10)
        if (!isNaN(parsedId)) {
            const foundAttribute = await attributeTool.getAttribute(attribute_id);
            if (!isEmpty(foundAttribute)) {
                return responseTool.successResponse(res, foundAttribute, 200, 'Attribute retrieved');
            }
            return responseTool.httpErrorResponse(res, null, 404, 'No attribute found');
        }
        return responseTool.httpErrorResponse(res, null, 400, `this Id ${attribute_id} ID is not a number`);
    }


    static async getAttributesValue(req, res) {
        const {
            attribute_id
        } = req.params;
        const parsedId = parseInt(attribute_id, 10)
        if (!isNaN(parsedId)) {
            const attributeValue = await attributeValueTool.getAllAttributeValue(attribute_id)
            if (!isEmpty(attributeValue)) {
                return await responseTool.successResponse(res, attributeValue, 200, 'Attributes value retrieved');
            }
            return await responseTool.httpErrorResponse(res, null, 404, 'No attribute found');
        }
        return responseTool.httpErrorResponse(res, null, 400, `this Id ${attribute_id} ID is not a number`);
    }

    static async getAllproductAttributes(req, res) {
        const {
            product_id
        } = req.params
        const parsedId = parseInt(product_id, 10)
        if (!isNaN(parsedId)) {
            const productAttributes = await productAttribute.getAllProductAttribute(product_id)
            if (!isEmpty(productAttributes)) {
                const attributes = await formatAtt(productAttributes)
                return await responseTool.successResponse(res, attributes, 200, 'Attribute retrieved')
            }
            return await responseTool.httpErrorResponse(res, null, 404, 'No attribute found');
        }
        return responseTool.httpErrorResponse(res, null, 400, `this Id ${product_id} ID is not a number`);
    }
}