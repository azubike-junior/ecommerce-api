"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = _interopRequireDefault(require("../models"));

const {
  audit
} = _models.default;

class AuditTool {
  static async createAudit(option) {
    return await audit.create(option);
  }

}

exports.default = AuditTool;