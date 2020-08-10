"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.departments = exports.department = void 0;

var _graphql = require("graphql");

var _axios = _interopRequireDefault(require("axios"));

var _variable = require("../../utils/variable");

var _departmentSchema = require("../schema/departmentSchema");

const departments = {
  type: new _graphql.GraphQLList(_departmentSchema.departmentType),

  resolve(parent, args) {
    return _axios.default.get(`${_variable.baseUrl}/department`).then(res => res.data.data);
  }

};
exports.departments = departments;
const department = {
  type: _departmentSchema.departmentType,
  args: {
    department_id: {
      type: _graphql.GraphQLInt
    }
  },

  resolve(parent, args) {
    return _axios.default.get(`${_variable.baseUrl}/department/${args.department_id}`).then(res => res.data.data);
  }

};
exports.department = department;