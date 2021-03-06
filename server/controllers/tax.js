import taxTool from '../tools/tax';
import isEmpty from 'lodash.isempty';
import responseTool from '../utils/response'


export default class TaxController {
    static async getOneTax(req, res) {
        const {
            tax_id
        } = req.params
        const parsedId = parseInt(tax_id, 10)
        if (!isNaN(parsedId)) {
            const foundTax = await taxTool.getOneTax(tax_id);
            if (!isEmpty(foundTax)) {
                return await responseTool.successResponse(res, foundTax, 200, 'Tax retrieved')
            }
            return await responseTool.httpErrorResponse(res, 404, null, 'No Tax found')
        }
        return await responseTool.httpErrorResponse(res, 400, null, `this ${tax_id} ID is not a number`)
    }

    static async getAllTaxes(req, res) {
        const foundTaxes = await taxTool.getAllTaxes();
        return await responseTool.successResponse(res, foundTaxes, 200, 'Taxes retrieved')
    }
}