import express from 'express';
import ProductController from '../controllers/product';
const productRoute = express.Router();
import {
    validationBody
} from '../middlewares/validator'
import {
    reviewSchema
} from '../validation/schema'
import TokenTool from '../middlewares/authentication'
import {
    findProductParam
} from '../middlewares/product';


productRoute.get('/', ProductController.getProducts);
productRoute.get('/inDepartment/:department_id',
    ProductController.getProductsInDepartment);
productRoute.get('/search', ProductController.searchProduct)
productRoute.get('/:product_id', ProductController.getOneProduct);
productRoute.get('/inCategory/:category_id', ProductController.getProductsInCategory);
productRoute.route('/:product_id/Reviews')
    .get(ProductController.getReviews)
    .post(TokenTool.verifyToken, validationBody(reviewSchema), findProductParam, ProductController.postAReview)

export default productRoute;