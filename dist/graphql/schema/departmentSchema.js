"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.departmentType = void 0;

var _graphql = require("graphql");

const departmentType = new _graphql.GraphQLObjectType({
  name: 'department',
  fields: () => ({
    department_id: {
      type: _graphql.GraphQLInt
    },
    name: {
      type: _graphql.GraphQLString
    },
    description: {
      type: _graphql.GraphQLString
    }
  })
});
exports.departmentType = departmentType;