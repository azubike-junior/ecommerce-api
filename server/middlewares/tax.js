import taxTool from '../tools/tax';
import isEmpty from 'lodash.isempty'
import responseTool from '../utils/response';

export const findTax = async (req, res, next) => {
    const {
        tax_id
    } = req.body;
    const foundTax = await taxTool.getOneTax(tax_id);
    if (!isEmpty(foundTax)) {
        return next();
    }
    return await responseTool.httpErrorResponse(res, null, 400, 'The field Tax_id is Empty')
}