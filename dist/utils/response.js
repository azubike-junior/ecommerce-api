"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

class ResponseTool {
  static httpErrorResponse(res, data, statusCode, message) {
    const error = _objectSpread({
      statusCode: statusCode
    }, data, {
      message
    });

    return res.status(400).json({
      error
    });
  }

  static successResponse(res, data, statusCode, message) {
    statusCode = 200 || 201;
    return res.status(statusCode).json({
      statusCode,
      message,
      data
    });
  }

  static serverError(res) {
    return res.status(500).json({
      error: {
        statusCode: 500,
        message: 'Server Unavailable'
      }
    });
  }

}

exports.default = ResponseTool;