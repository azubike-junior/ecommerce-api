"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _department = _interopRequireDefault(require("../controllers/department"));

const departmentRoutes = _express.default.Router();

departmentRoutes.get('/', _department.default.getDepartments);
departmentRoutes.get('/:department_id', _department.default.getOneDepartment);
var _default = departmentRoutes;
exports.default = _default;