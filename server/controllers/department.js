import departmentTool from '../tools/department';
import responseTool from '../utils/response';
import isEmpty from 'lodash.isempty'

export default class DepartmentController {
    static async getDepartments(req, res) {
        const foundDepartments = await departmentTool.getAllDepartment()
        return await responseTool.successResponse(res, foundDepartments, 200, 'All departments retrieved')
    }

    static async getOneDepartment(req, res) {
        const {
            department_id
        } = req.params
        const parsedId = parseInt(department_id, 10)
        if (!isNaN(parsedId)) {
            const foundDepartment = await departmentTool.getADepartment(department_id);
            if (!isEmpty(foundDepartment)) {
                return await responseTool.successResponse(res, foundDepartment, 200, 'Department retrieved')
            }
            return await responseTool.httpErrorResponse(res, null, 404, 'No department found')
        }
        return responseTool.httpErrorResponse(res, null, 400, `this Id ${department_id} ID is not a number`);

    }
}