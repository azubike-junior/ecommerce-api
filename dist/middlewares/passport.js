"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.passportfacebookConfiguration = void 0;

var _passportFacebook = require("passport-facebook");

var _facebookConfig = require("../utils/facebookConfig");

var _facebookAuth = require("../utils/facebookAuth");

const passportfacebookConfiguration = passport => {
  passport.use(new _passportFacebook.Strategy(_facebookConfig.facebookConfig, _facebookAuth.facebookAuth));
};

exports.passportfacebookConfiguration = passportfacebookConfiguration;