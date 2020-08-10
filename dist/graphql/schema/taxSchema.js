"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TaxType = void 0;

var _graphql = require("graphql");

const TaxType = new _graphql.GraphQLObjectType({
  name: 'tax',
  fields: () => ({
    tax_id: {
      type: _graphql.GraphQLInt
    },
    tax_type: {
      type: _graphql.GraphQLString
    },
    tax_percentage: {
      type: _graphql.GraphQLString
    }
  })
});
exports.TaxType = TaxType;