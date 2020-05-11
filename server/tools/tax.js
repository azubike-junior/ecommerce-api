import models from '../models';
const {
    tax
} = models;

export default class TaxTool {
    static async getAllTaxes() {
        return await tax.findAll()
    }
    static async getOneTax(id) {
        return await tax.findOne({
            where: {
                tax_id: id
            }
        })
    }
}