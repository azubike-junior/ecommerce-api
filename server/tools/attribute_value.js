import models from '../models';
const {
    attribute,
    attribute_value
} = models

export default class AttributeValueTool {
    static async getAllAttributeValue(id) {
        return await attribute_value.findAll({
            where: {
                attribute_id: id
            }
        })
    }

    static async getAttributeByValue(value) {
        return await attribute_value.findOne({
            where: {
                value
            }
        })
    }

    static async getAttributeByName(name) {
        return await attribute_value.findOne({
            where: {
                name
            }
        })
    }
}