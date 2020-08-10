"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mutation = void 0;

var _graphql = require("graphql");

var _shoppingCart = require("./shoppingCart");

var _order = require("./order");

var _payment = require("./payment");

var _review = require("./review");

var _customer = require("./customer");

const mutation = new _graphql.GraphQLObjectType({
  name: 'mutation',
  fields: {
    addProductToCart: _shoppingCart.addProductToCart,
    updateProductQuantityInCart: _shoppingCart.updateProductQuantityInCart,
    createOrder: _order.createOrder,
    setShippedDate: _order.setShippedDate,
    setAuthCode: _order.setAuthCode,
    updateOrder: _order.updateOrder,
    createReview: _review.createReview,
    signin: _customer.signin,
    signup: _customer.signup,
    updateCustomerBioData: _customer.updateCustomerBioData,
    updateCustomerAddress: _customer.updateCustomerAddress,
    updateCreditCard: _customer.updateCreditCard,
    makePayment: _payment.makePayment
  }
});
exports.mutation = mutation;