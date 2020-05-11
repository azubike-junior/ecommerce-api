import models from '../models'

const {
    department
} = models

export default class DepartmentTool {
    static async getADepartment(id) {
        return await department.findOne({
            where: {
                department_id: id
            }
        })
    }

    static async getAllDepartment() {
        return await department.findAll()
    }
}