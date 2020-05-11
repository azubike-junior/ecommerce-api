import CategoryTool from "../tools/category";
import isEmpty from "lodash.isempty";
import models from '../models'
import ResponseTool from '../utils/response';
import {
    paginate
} from '../utils/pagination'
const {
    category
} = models;

export default class CategoryController {
    static async getAllCategory(req, res) {
        const {
            page,
            limit
        } = req.query
        const noOfPage = page || 1;
        const pageLimit = limit || 20;
        const categories = await CategoryTool.getAllCategories(paginate({
            noOfPage,
            pageLimit
        }));
        const allCounts = await category.count()
        const result = {
            counts: allCounts,
            rows: categories
        }
        return await ResponseTool.successResponse(res, result, 200, 'All Categories retrieved')
    }

    static async getOneCategory(req, res) {
        const {
            params: {
                category_id
            }
        } = req;
        const parsedId = parseInt(category_id, 10);
        if (!isNaN(parsedId)) {
            const oneCategory = await CategoryTool.getACategory(category_id)
            if (!isEmpty(oneCategory)) {
                return await ResponseTool.successResponse(res, oneCategory, 200, 'category retrieved')
            }
            return await ResponseTool.httpErrorResponse(res, null, 404, `the category ID with this ID ${category_id} Does not exist`)
        }
        return await ResponseTool.httpErrorResponse(res, null, 404, `this category ID is not a number ${category_id}`)
    }

    static async getProductCategory(req, res) {
        const {
            product_id
        } = req.params
        const parsedId = parseInt(product_id, 10);
        if (!isNaN(parsedId)) {
            const productCategory = await CategoryTool.getAProductCategory(product_id);
            if (!isEmpty(productCategory)) {
                return await ResponseTool.successResponse(res, productCategory.category, 200, 'productCategory retrieved')
            }
            return await ResponseTool.httpErrorResponse(res, null, 404, `the product ID of product category with this ID ${product_id} Does not exist `)
        }
        return await ResponseTool.httpErrorResponse(res, null, 404, `this ID ${product_id} of product Category is not a number `)
    }

    static async getCategoriesInDepartment(req, res) {
        const {
            params: {
                department_id
            }
        } = req;
        const parsedId = parseInt(department_id, 10);
        if (!isNaN(parsedId)) {
            const categoryInDept = await CategoryTool.getCategoriesInDepartMent(department_id);
            if (!isEmpty(categoryInDept)) {
                return await ResponseTool.successResponse(res, categoryInDept, 200, 'categories in deparment has been retreived')
            }
            return await ResponseTool.httpErrorResponse(res, null, 404, `No categories found with this department id ${department_id} `)
        }
        return await ResponseTool.httpErrorResponse(res, null, 404, `this ID ${department_id} is not a Number`)
    }
}