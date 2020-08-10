"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.generateToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _response = _interopRequireDefault(require("../utils/response"));

const generateToken = customer_id => {
  const token = _jsonwebtoken.default.sign({
    customer_id
  }, process.env.SECRET, {
    expiresIn: '3h'
  });

  console.log(token);
  return {
    customer_id,
    token,
    tokenExpiration: 3
  };
};

exports.generateToken = generateToken;

var _default = (req, res, next) => {
  const user_key = req.headers.authorization;

  try {
    if (typeof user_key !== 'undefined' || user_key !== '') {
      const decoded = _jsonwebtoken.default.verify(user_key, process.env.SECRET);

      req.user = decoded;
      return next();
    }

    return _response.default.httpErrorResponse(res, null, 401, 'Unauthorized');
  } catch (e) {
    return _response.default.httpErrorResponse(res, null, 400, 'Invalid access token');
  }
};

exports.default = _default;