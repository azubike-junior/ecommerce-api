"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateData = void 0;

var _joi = _interopRequireDefault(require("joi"));

const validateData = async (inputBody, schema) => {
  try {
    const fields = await _joi.default.validate(inputBody, schema);
    return {
      hasError: false,
      fields
    };
  } catch ({
    details
  }) {
    console.log('======details', details);
    const errors = {};
    details.forEach(err => {
      errors[err.path[0]] = errors[err.path[0]] || err.message.replace(/"/g, "");
    });
    console.log(errors);
    return {
      hasError: true,
      errors
    };
  }
};

exports.validateData = validateData;