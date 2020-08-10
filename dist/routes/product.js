"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _product = _interopRequireDefault(require("../controllers/product"));

var _validator = require("../middlewares/validator");

var _schema = require("../validation/schema");

var _product2 = require("../middlewares/product");

var _authentication = _interopRequireDefault(require("../middlewares/authentication"));

const productRoute = _express.default.Router();

productRoute.get('/', _product.default.getProducts);
productRoute.get('/inDepartment/:department_id', _product.default.getProductsInDepartment);
productRoute.get('/search', _product.default.searchProduct);
productRoute.get('/:product_id', _product.default.getOneProduct);
productRoute.get('/inCategory/:category_id', _product.default.getProductsInCategory);
productRoute.route('/:product_id/Reviews').get(_product.default.getReviews).post((0, _validator.validationBody)(_schema.reviewSchema), _authentication.default, _product2.findProductParam, _product.default.postAReview);
var _default = productRoute;
exports.default = _default;