"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = _interopRequireDefault(require("../models"));

const {
  department
} = _models.default;

class DepartmentTool {
  static async getADepartment(id) {
    return await department.findOne({
      where: {
        department_id: id
      }
    });
  }

  static async getAllDepartment() {
    return await department.findAll();
  }

}

exports.default = DepartmentTool;