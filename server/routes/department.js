import express from 'express';
import DepartmentController from '../controllers/department';
const departmentRoutes = express.Router()

departmentRoutes.get('/', DepartmentController.getDepartments)
departmentRoutes.get('/:department_id', DepartmentController.getOneDepartment)

export default departmentRoutes;