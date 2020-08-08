import models from '../models';
const {
    category,
    product_category
} = models

export default class CategoryTool {
    static async getACategory(id) {
        return await category.findOne({
            where: {
                category_id: id
            }
        })
    }

    static async getAProductCategory(id) {
        return await product_category.findOne({
            where: {
                product_id: id
            },
            include: [{
                model: category,
                attributes: ['name', 'category_id', 'department_id']
            }]
        })
    }

    static async getAllCategories({
        option
    }) {
        return await category.findAll(option)
    }

    static async getCategoriesInDepartMent(id) {
        return await category.findAll({
            where: {
                department_id: id
            }
        })
    }

}