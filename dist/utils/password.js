"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.comparePassword = exports.hashPassword = exports.removePassword = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

const removePassword = (_ref) => {
  let {
    password
  } = _ref,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["password"]);
  return rest;
};

exports.removePassword = removePassword;

const hashPassword = password => {
  const round = _bcryptjs.default.genSaltSync(10);

  return _bcryptjs.default.hashSync(password, round);
};

exports.hashPassword = hashPassword;

const comparePassword = (password, dbPassword) => {
  return _bcryptjs.default.compareSync(password, dbPassword);
};

exports.comparePassword = comparePassword;