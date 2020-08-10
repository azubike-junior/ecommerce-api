"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.query = void 0;

var _graphql = require("graphql");

var _taxQuery = require("./taxQuery");

var _attributeQuery = require("./attributeQuery");

var _shippingQuery = require("./shippingQuery");

var _departmentQuery = require("../queries/departmentQuery");

var _categoryQuery = require("../queries/categoryQuery");

var _shoppingCartQuery = require("./shoppingCartQuery");

var _orderQuery = require("./orderQuery");

var _customerQuery = require("../queries/customerQuery");

var _productQuery = require("./productQuery");

var _customer = require("../mutations/customer");

const query = new _graphql.GraphQLObjectType({
  name: 'Queries',
  fields: {
    attribute: _attributeQuery.attribute,
    attributes: _attributeQuery.attributes,
    attributeValue: _attributeQuery.attributeValue,
    productAttribute: _attributeQuery.productAttribute,
    taxes: _taxQuery.taxes,
    tax: _taxQuery.tax,
    shipping: _shippingQuery.shipping,
    shippings: _shippingQuery.shippings,
    department: _departmentQuery.department,
    departments: _departmentQuery.departments,
    categories: _categoryQuery.categories,
    category: _categoryQuery.category,
    productCategory: _categoryQuery.productCategory,
    categoryInDepartment: _categoryQuery.categoryInDepartment,
    generateCartId: _shoppingCartQuery.generateCartId,
    productsInCart: _shoppingCartQuery.productsInCart,
    totalAmount: _shoppingCartQuery.totalAmount,
    moveItemToCart: _shoppingCartQuery.moveItemToCart,
    saveItemForLater: _shoppingCartQuery.saveItemForLater,
    getSavedItems: _shoppingCartQuery.getSavedItems,
    emptyCart: _shoppingCartQuery.emptyCart,
    removeProduct: _shoppingCartQuery.removeProduct,
    getCustomerOrder: _orderQuery.getCustomerOrder,
    getOneOrder: _orderQuery.getOneOrder,
    getOrderDetail: _orderQuery.getOrderDetail,
    getCustomer: _customerQuery.getCustomer,
    getProduct: _productQuery.getProduct,
    getProducts: _productQuery.getProducts,
    getProductsInCategory: _productQuery.getProductsInCategory,
    getProductsReview: _productQuery.getProductsReview,
    getProductsinDepartment: _productQuery.getProductsinDepartment,
    searchProduct: _productQuery.searchProduct
  }
});
exports.query = query;