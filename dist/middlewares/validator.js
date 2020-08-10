"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validationBody = void 0;

var _joi = _interopRequireDefault(require("joi"));

const validationBody = schema => {
  return (req, res, next) => {
    const validation = _joi.default.validate(req.body, schema);

    if (validation.error) {
      return res.status(400).json({
        message: validation.error.details
      });
    }

    if (!req.value) {
      req.value = {};
    }

    req.value['body'] = validation.fields;
    return next();
  };
};

exports.validationBody = validationBody;