import models from '../models';
const {
    product_attribute,
    attribute_value,
    attribute
} = models

export default class ProductAttribute {
    static async getAllProductAttribute(id) {
        return await product_attribute.findAll({
            where: {
                product_id: id
            },
            include: [{
                model: attribute_value,
                include: [{
                    model: attribute
                }]
            }]
        })
    }
}