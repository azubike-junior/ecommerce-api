"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _product = _interopRequireDefault(require("../tools/product"));

var _pagination = _interopRequireWildcard(require("../utils/pagination"));

var _models = _interopRequireDefault(require("../models"));

var _response = _interopRequireDefault(require("../utils/response"));

var _product2 = require("../utils/product");

var _lodash = _interopRequireDefault(require("lodash.isempty"));

var _Query = require("../graphql/queries/Query");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

const {
  product,
  product_category
} = _models.default;

class ProductController {
  static async getProducts(req, res) {
    const {
      numberOfPage,
      pageLimit,
      description_length
    } = (0, _pagination.default)(req.query);
    const allProducts = await _product.default.getAllProducts((0, _pagination.paginate)({
      numberOfPage,
      pageLimit
    }));
    const counts = await product.count();
    const availableProducts = (0, _product2.allproductsAvailable)(allProducts, description_length);
    const [products, productsCount] = await Promise.all([availableProducts, counts]);
    const queryPagePagination = (0, _pagination.paginatePage)(req, productsCount);
    return await _response.default.successResponse(res, _objectSpread({
      products
    }, queryPagePagination), 200, 'products retrieved');
  }

  static async getOneProduct(req, res) {
    const {
      params: {
        product_id
      }
    } = req;
    const parsedId = parseInt(product_id, 10);

    if (!isNaN(parsedId)) {
      const singleProduct = await _product.default.getAproduct(product_id);

      if (!(0, _lodash.default)(singleProduct)) {
        return await _response.default.successResponse(res, singleProduct, 200, 'product has been retrieved');
      }

      return await _response.default.httpErrorResponse(res, null, 404, `the product with this ID ${product_id} Does not exist`);
    }

    return await _response.default.httpErrorResponse(res, null, 404, `this product ID ${product_id} is not a number`);
  }

  static async getProductsInCategory(req, res) {
    const {
      params: {
        category_id
      }
    } = req;
    const {
      pageLimit,
      numberOfPage,
      description_length
    } = (0, _pagination.default)(req.query);
    const parsedId = parseInt(category_id, 10);

    if (!isNaN(parsedId)) {
      const productsInCategory = await _product.default.getCategories(category_id, (0, _pagination.paginate)({
        pageLimit,
        numberOfPage
      }));
      const counts = await product_category.count();

      if (!(0, _lodash.default)(productsInCategory)) {
        const allProducts = (0, _product2.allproductsAvailable)(productsInCategory, description_length, false);
        const [products, productsCount] = await Promise.all([allProducts, counts]);
        const queryPagePagination = (0, _pagination.paginatePage)(req, productsCount);
        return await _response.default.successResponse(res, _objectSpread({
          products
        }, queryPagePagination), 200, 'products in Category has been retrieved');
      }

      return await _response.default.httpErrorResponse(res, null, 404, `the product in category with this ID ${category_id} Does not Exist`);
    }

    return await _response.default.httpErrorResponse(res, null, 404, `this category ID ${category} is not a number`);
  }

  static async getProductsInDepartment(req, res) {
    const {
      params: {
        department_id
      }
    } = req;
    const {
      pageLimit,
      numberOfPage,
      description_length
    } = (0, _pagination.default)(req.query);
    const parsedId = parseInt(department_id, 10);

    if (!isNaN(parsedId)) {
      const allProducts = await _product.default.getProductsInDepartment(department_id, (0, _pagination.paginate)({
        pageLimit,
        numberOfPage
      }));

      if (!(0, _lodash.default)(allProducts)) {
        const counts = allProducts.length;
        const departmentProducts = (0, _product2.allproductsAvailable)(allProducts, description_length);
        const [products, productsCount] = await Promise.all([departmentProducts, counts]);
        const queryPagePagination = (0, _pagination.paginatePage)(req, productsCount);
        return await _response.default.successResponse(res, _objectSpread({
          products: (0, _product2.productResult)(products)
        }, queryPagePagination), 200, 'the products in the department has been retrieved ');
      }

      return await _response.default.httpErrorResponse(res, null, 404, `Dont Exist product with this department ID ${department_id} `);
    }

    return await _response.default.httpErrorResponse(res, null, 404, `This ID ${department_id} is not a number`);
  }

  static async searchProduct(req, res) {
    const {
      query_string
    } = req.query;

    if (query_string !== '' || !(0, _lodash.default)(query_string)) {
      const {
        numberOfPage,
        pageLimit,
        description_length
      } = (0, _pagination.default)(req.query);
      const string = new RegExp(`${query_string}`, 'gi');
      const products = await _product.default.getAllProducts();
      const searchedproduct = products.filter(product => product.description.match(string) || product.name.match(string));

      if (!(0, _lodash.default)(searchedproduct)) {
        const allProducts = (0, _product2.allproductsAvailable)(searchedproduct, description_length);
        const counts = allProducts.length;
        const page = (0, _pagination.paginate)({
          numberOfPage,
          pageLimit
        });
        const [allSearchProduct, searchedCounts] = await Promise.all([allProducts, counts]);
        const queryPagePagination = (0, _pagination.paginatePage)(req, searchedCounts); // const searchedProduct = pagination(allSearchProduct, page);

        return await _response.default.successResponse(res, _objectSpread({
          allSearchProduct
        }, queryPagePagination), 200, `searching successful`);
      }

      return await _response.default.httpErrorResponse(res, null, 404, `No details with  ${query_string}  can be found`);
    }

    return await _response.default.httpErrorResponse(res, null, 400, 'query_string can not be blank');
  }

  static async getReviews(req, res) {
    const {
      product_id
    } = req.params;
    const parsedId = parseInt(product_id, 10);

    if (!isNaN(parsedId)) {
      const foundReviews = await _product.default.getReviews(product_id);

      if (!(0, _lodash.default)(foundReviews)) {
        return await _response.default.successResponse(res, foundReviews, 200, 'product review retrieved');
      }

      return await _response.default.httpErrorResponse(res, null, 404, `This Review with This product ID ${product_id} Does not Exist`);
    }

    return await _response.default.httpErrorResponse(res, null, 404, `This Product ID ${product_id} is not a number`);
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
    const createdReview = await _product.default.createReview({
      product_id,
      customer_id,
      rating,
      review,
      created_on: new Date()
    });
    return _response.default.successResponse(res, createdReview, 201, 'review has been created successfully');
  }

}

exports.default = ProductController;