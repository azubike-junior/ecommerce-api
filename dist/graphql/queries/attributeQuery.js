"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productAttribute = exports.attributeValue = exports.attribute = exports.attributes = void 0;

var _graphql = require("graphql");

var _attributeSchema = require("../schema/attributeSchema");

var _variable = require("../../utils/variable");

var _axios = _interopRequireDefault(require("axios"));

const attributes = {
  type: new _graphql.GraphQLList(_attributeSchema.AttributeType),

  resolve(parent, args) {
    return _axios.default.get(`${_variable.baseUrl}/attributes`).then(res => res.data.data);
  }

};
exports.attributes = attributes;
const attribute = {
  type: _attributeSchema.AttributeType,
  args: {
    attribute_id: {
      type: _graphql.GraphQLInt
    }
  },

  resolve(parent, args) {
    return _axios.default.get(`${_variable.baseUrl}/attributes/${args.attribute_id}`).then(res => res.data.data);
  }

};
exports.attribute = attribute;
const attributeValue = {
  type: new _graphql.GraphQLList(_attributeSchema.AttributeValueType),
  args: {
    attribute_id: {
      type: _graphql.GraphQLInt
    }
  },

  resolve(parent, args) {
    return _axios.default.get(`${_variable.baseUrl}/attributes/values/${args.attribute_id}`).then(res => res.data.data);
  }

};
exports.attributeValue = attributeValue;
const productAttribute = {
  type: new _graphql.GraphQLList(_attributeSchema.ProductAttributeType),
  args: {
    product_id: {
      type: _graphql.GraphQLInt
    }
  },

  resolve(parent, args) {
    return _axios.default.get(`${_variable.baseUrl}/attributes/inProduct/${args.product_id}`).then(res => res.data.data);
  }

};
exports.productAttribute = productAttribute;