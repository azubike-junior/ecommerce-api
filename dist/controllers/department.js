"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _department = _interopRequireDefault(require("../tools/department"));

var _response = _interopRequireDefault(require("../utils/response"));

var _lodash = _interopRequireDefault(require("lodash.isempty"));

class DepartmentController {
  static async getDepartments(req, res) {
    const foundDepartments = await _department.default.getAllDepartment();
    return await _response.default.successResponse(res, foundDepartments, 200, 'All departments retrieved');
  }

  static async getOneDepartment(req, res) {
    const {
      department_id
    } = req.params;
    const parsedId = parseInt(department_id, 10);

    if (!isNaN(parsedId)) {
      const foundDepartment = await _department.default.getADepartment(department_id);

      if (!(0, _lodash.default)(foundDepartment)) {
        return await _response.default.successResponse(res, foundDepartment, 200, 'Department retrieved');
      }

      return await _response.default.httpErrorResponse(res, null, 404, 'No department found');
    }

    return _response.default.httpErrorResponse(res, null, 400, `this Id ${department_id} ID is not a number`);
  }

}

exports.default = DepartmentController;