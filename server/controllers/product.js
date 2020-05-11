import ProductTool from '../tools/product';
import getPage, {
    paginate,
    paginatePage
} from '../utils/pagination';
import models from '../models';
import ResponseTool from '../utils/response';
import {
    allproductsAvailable,
    productResult
} from '../utils/product';
import isEmpty from 'lodash.isempty';
const {
    product,
    productcategory
} = models;

export default class ProductController {
    static async getProducts(req, res) {
        const {
            noOfPage,
            pageLimit,
            description_length
        } = getPage(req.query);
        const allProducts = await ProductTool.getAllProducts(
            paginate({
                noOfPage,
                pageLimit
            })
        );
        const counts = await product.count();
        const availableProducts = allproductsAvailable(allProducts, description_length);
        const result = {
            size: counts,
            rows: availableProducts
        };
        return await ResponseTool.successResponse(res, result, 200, 'products retrieved');
    }

    static async getOneProduct(req, res) {
        const {
            params: {
                product_id
            }
        } = req;
        const parsedId = parseInt(product_id, 10);
        if (!isNaN(parsedId)) {
            const singleProduct = await ProductTool.getAproduct(product_id);
            if (!isEmpty(singleProduct)) {
                return await ResponseTool.successResponse(res, singleProduct, 200, 'product has been retrieved');
            }
            return await ResponseTool.httpErrorResponse(res, null, 404, `the product with this ID ${product_id} Does not exist`);
        }
        return await ResponseTool.httpErrorResponse(res, null, 404, `this product ID ${product_id} is not a number`);
    }

    static async getProductsInCategory(req, res) {
        const {
            params: {
                category_id
            }
        } = req;
        const {
            pageLimit,
            noOfPage,
            description_length
        } = getPage(req.query);
        const parsedId = parseInt(category_id, 10);
        if (!isNaN(parsedId)) {
            const productsInCategory = await ProductTool.getCategories(
                category_id,
                paginate({
                    pageLimit,
                    noOfPage
                })
            );
            const counts = await productcategory.count();
            if (!isEmpty(productsInCategory)) {
                const allproducts = allproductsAvailable(productsInCategory, description_length, false);
                const result = {
                    size: counts,
                    rows: allproducts
                };
                return await ResponseTool.successResponse(res, result, 200, 'products in Category has been retrieved');
            }
            return await ResponseTool.httpErrorResponse(res, null, 404, `the product in category with this ID ${category_id} Does not Exist`);
        }
        return await ResponseTool.httpErrorResponse(res, null, 404, `this category ID ${category} is not a number`);
    }

    static async getProductsInDepartment(req, res) {
        const {
            params: {
                department_id
            }
        } = req;
        const params = getPage(req.query);
        const {
            pageLimit,
            noOfPage,
            description_length
        } = params;
        const parsedId = parseInt(department_id, 10);
        if (!isNaN(parsedId)) {
            const products = await ProductTool.getProductsInDepartment(department_id);
            if (!isEmpty(products)) {
                const counts = products.length;
                const pages = paginate({
                    pageLimit,
                    noOfPage
                });
                const allProducts = allproductsAvailable(products, description_length);
                const result = paginatePage(allProducts, pages);
                return await ResponseTool.successResponse(
                    res, {
                        counts,
                        rows: productResult(result)
                    },
                    200,
                    'the products in the department has been retrieved '
                );
            }
            return await ResponseTool.httpErrorResponse(res, null, 404, `Dont Exist product with this department ID ${department_id} `);
        }
        return await ResponseTool.httpErrorResponse(res, null, 404, `This ID ${department_id} is not a number`);
    }

    static async searchProduct(req, res) {
        const {
            query_string
        } = req.query;
        if (query_string) {
            const {
                noOfPage,
                pageLimit,
                description_length
            } = getPage(req.query);
            const string = new RegExp(`${query_string}`, 'gi');
            const products = await ProductTool.getAllProducts();
            const searchedproduct = products.filter((product) =>
                product.description.match(string) || product.name.match(string)
            );
            const allProducts = allproductsAvailable(searchedproduct, description_length);
            const counts = allProducts.length;
            const page = paginate({
                noOfPage,
                pageLimit
            });
            const results = paginatePage(allProducts, page);
            return await ResponseTool.successResponse(
                res, {
                    counts,
                    rows: results
                },
                200,
                `searching successful`
            );
        }
        return await ResponseTool.httpErrorResponse(res, null, 400, 'query_string can not be blank');
    }

    static async getReviews(req, res) {
        const {
            product_id
        } = req.params;
        const parsedId = parseInt(product_id, 10);
        if (!isNaN(parsedId)) {
            const foundReviews = await ProductTool.getReviews(product_id);
            if (!isEmpty(foundReviews)) {
                return await ResponseTool.successResponse(res, foundReviews, 200, 'product review retrieved');
            }
            return await ResponseTool.httpErrorResponse(res, null, 404, `This Review with This product ID ${product_id} Does not Exist`);
        }
        return await ResponseTool.httpErrorResponse(res, null, 404, `This Product ID ${product_id} is not a number`);
    }

    static async postAReview(req, res) {
        const {
            params: {
                product_id
            },
            user: {
                customer_id
            },
            body: {
                rating,
                review
            }
        } = req;
        const createdReview = await ProductTool.createReview({
            product_id,
            customer_id,
            rating,
            review,
            created_on: new Date()
        });
        return ResponseTool.successResponse(res, createdReview, 201, 'review has been created successfully');
    }
}