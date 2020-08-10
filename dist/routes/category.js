"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _category = _interopRequireDefault(require("../controllers/category"));

const categoryRoute = _express.default.Router();

categoryRoute.get('/', _category.default.getAllCategory);
categoryRoute.get('/:category_id', _category.default.getOneCategory);
categoryRoute.get('/inProduct/:product_id', _category.default.getProductCategory);
categoryRoute.get('/inDepartment/:department_id', _category.default.getCategoriesInDepartment);
var _default = categoryRoute;
exports.default = _default;