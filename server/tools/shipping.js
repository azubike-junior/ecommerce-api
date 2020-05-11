import models from '../models';
const {
    shipping,
    shipping_region
} = models;

export default class ShippingTool {
    static async getShippingRegion() {
        return await shipping_region.findAll()
    }

    static async getOneShipping(id) {
        return await shipping_region.findOne({
            where: {
                shipping_region_id: id
            },
            include: [{
                model: shipping
            }]
        })
    }
}