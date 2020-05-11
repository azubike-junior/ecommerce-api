 import models from '../models';
 const {
     product,
     category,
     productcategory,
     review,
     department
 } = models;

 export default class ProductTool {
     static async getAllProducts(option) {
         return await product.findAll(option);
     }

     static async getAproduct(id) {
         return await product.findOne({
             where: {
                 product_id: id
             }
         });
     }

     static async getReviews(id) {
         return await review.findAll({
             where: {
                 product_id: id
             }
         });
     }

     static async createReview(option) {
         return await review.create(option);
     }

     static countProduct(id) {
         return product.count({
             where: {
                 product_id: id
             }
         })
     }

     static async getProductsInDepartment(id) {
         return await product.findAll({
             where: {
                 department_id: id
             }
         });
     }

     static async getProductsInCategory(id) {
         return await productCategory.findAll({
             where: {
                 category_id: id
             }
         })
     }

     static async countCategories(id) {
         return await productcategory.count({
             where: {
                 category_id: id
             }
         })
     }

     static async getLocation(id) {
         return product.findOne({
             where: {
                 product_id: id
             },

             include: [{
                 model: productcategory,
                 model: category
             }]
         })
     }

     static async getCategories(id, pagination) {
         const opt = {
             where: {
                 category_id: id
             },
             ...pagination,
             include: [{
                 model: product
             }]
         };
         return productcategory.findAll(opt)
     }
 }