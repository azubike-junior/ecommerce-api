"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createReview = void 0;

var _graphql = require("graphql");

var _axios = _interopRequireDefault(require("axios"));

var _variable = require("../../utils/variable");

var _productSchema = require("../schema/productSchema");

const createReview = {
  type: _productSchema.reviewType,
  args: {
    product_id: {
      type: _graphql.GraphQLInt
    },
    rating: {
      type: _graphql.GraphQLString
    },
    review: {
      type: _graphql.GraphQLString
    }
  },

  resolve(parent, args, req) {
    return _axios.default.post(`${_variable.baseUrl}/products/${args.product_id}`, {
      rating: args.rating,
      review: args.review
    }, {
      headers: {
        Authorization: req.headers.authorization
      }
    }).then(res => res.data.data);
  }

};
exports.createReview = createReview;