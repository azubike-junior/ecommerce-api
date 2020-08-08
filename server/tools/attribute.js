import models from '../models';
const {
    attribute
} = models

export default class AttributeTool {
    static async getAllAttributes() {
        console.log('===it didnt get here')
        return await attribute.findAll()
    }

    static async getAttribute(id) {
        return await attribute.findOne({
            where: {
                attribute_id: id
            }
        })
    }

    static async getAttributesOfProduct(id) {
        return await attribute.findAll({
            where: {
                product_id: id
            }
        })
    }
}