"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _category = _interopRequireDefault(require("../tools/category"));

var _lodash = _interopRequireDefault(require("lodash.isempty"));

var _models = _interopRequireDefault(require("../models"));

var _response = _interopRequireDefault(require("../utils/response"));

var _pagination = _interopRequireWildcard(require("../utils/pagination"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

const {
  category
} = _models.default;

class CategoryController {
  static async getAllCategory(req, res) {
    const {
      numberOfPage,
      pageLimit,
      description_length
    } = (0, _pagination.default)(req.query);
    const allCategories = await _category.default.getAllCategories((0, _pagination.paginate)({
      numberOfPage,
      pageLimit
    }));
    const allCounts = await category.count();
    const [categories, categoriesCount] = await Promise.all([allCategories, allCounts]);
    const queryPagePagination = (0, _pagination.paginatePage)(req, categoriesCount);
    return await _response.default.successResponse(res, _objectSpread({
      categories
    }, queryPagePagination), 200, 'All Categories retr ieved');
  }

  static async getOneCategory(req, res) {
    const {
      params: {
        category_id
      }
    } = req;
    const parsedId = parseInt(category_id, 10);

    if (!isNaN(parsedId)) {
      const oneCategory = await _category.default.getACategory(category_id);

      if (!(0, _lodash.default)(oneCategory)) {
        return await _response.default.successResponse(res, oneCategory, 200, 'category retrieved');
      }

      return await _response.default.httpErrorResponse(res, null, 404, `the category ID with this ID ${category_id} Does not exist`);
    }

    return await _response.default.httpErrorResponse(res, null, 404, `this category ID is not a number ${category_id}`);
  }

  static async getProductCategory(req, res) {
    const {
      product_id
    } = req.params;
    const parsedId = parseInt(product_id, 10);

    if (!isNaN(parsedId)) {
      const productCategory = await _category.default.getAProductCategory(product_id);

      if (!(0, _lodash.default)(productCategory)) {
        return await _response.default.successResponse(res, productCategory.category, 200, 'productCategory retrieved');
      }

      return await _response.default.httpErrorResponse(res, null, 404, `the product ID of product category with this ID ${product_id} Does not exist `);
    }

    return await _response.default.httpErrorResponse(res, null, 404, `this ID ${product_id} of product Category is not a number `);
  }

  static async getCategoriesInDepartment(req, res) {
    const {
      params: {
        department_id
      }
    } = req;
    const parsedId = parseInt(department_id, 10);

    if (!isNaN(parsedId)) {
      const categoryInDept = await _category.default.getCategoriesInDepartMent(department_id);

      if (!(0, _lodash.default)(categoryInDept)) {
        return await _response.default.successResponse(res, categoryInDept, 200, 'categories in deparment has been retreived');
      }

      return await _response.default.httpErrorResponse(res, null, 404, `No categories found with this department id ${department_id} `);
    }

    return await _response.default.httpErrorResponse(res, null, 404, `this ID ${department_id} is not a Number`);
  }

}

exports.default = CategoryController;