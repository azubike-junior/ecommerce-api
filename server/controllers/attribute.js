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
        const foundAttributes = await attributeTool.getAllAttributes();
        return await responseTool.successResponse(res, foundAttributes, 200, 'All attributes retrieved');
    }

    static async getAttribute(req, res) {
        const {
            attribute_id
        } = req.params;
        const foundAttribute = await attributeTool.getAttribute(attribute_id);
        if (!isEmpty(foundAttribute)) {
            return responseTool.successResponse(res, foundAttribute, 200, 'Attribute retrieved');
        }
        return responseTool.httpErrorResponse(res, null, 404, 'No attribute found');
    }

    static async getAttributesValue(req, res) {
        const {
            attribute_id
        } = req.params;
        const attributeValue = await attributeValueTool.getAllAttributeValue(attribute_id)
        if (!isEmpty(attributeValue)) {
            return await responseTool.successResponse(res, attributeValue, 200, 'Attributes value retrieved');
        }
        return await responseTool.httpErrorResponse(res, null, 404, 'No attribute found');
    }

    static async getAllproductAttributes(req, res) {
        const {
            product_id
        } = req.params
        const productAttributes = await productAttribute.getAllProductAttribute(product_id)
        if (!isEmpty(productAttributes)) {
            const attributes = await formatAtt(productAttributes)
            return await responseTool.successResponse(res, attributes, 200, 'Attribute retrieved')
        }
        return await responseTool.httpErrorResponse(res, null, 404, 'No attribute found');
    }
}