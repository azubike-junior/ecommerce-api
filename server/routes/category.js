import express from 'express';
import CategoryController from '../controllers/category';
const categoryRoute = express.Router();

categoryRoute.get('/', CategoryController.getAllCategory);
categoryRoute.get('/:category_id', CategoryController.getOneCategory)
categoryRoute.get('/inProduct/:product_id', CategoryController.getProductCategory)
categoryRoute.get('/inDepartment/:department_id', CategoryController.getCategoriesInDepartment)

export default categoryRoute