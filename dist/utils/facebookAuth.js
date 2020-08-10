"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.facebookAuth = void 0;

var _customer = _interopRequireDefault(require("../tools/customer"));

var _lodash = _interopRequireDefault(require("lodash.isempty"));

var _password = require("./password");

const facebookAuth = (access, token, profile, done) => {
  process.nextTick(async () => {
    try {
      const customer = await _customer.default.getCustomer(profile.emails[0].value);

      if (!(0, _lodash.default)(customer)) {
        const newCustomer = await _customer.default.createCustomer({
          name,
          email,
          password: ''
        });
        return done(null, (0, _password.removePassword)(newCustomer));
      }

      return done(null, (0, _password.removePassword)(newCustomer));
    } catch (e) {
      throw e;
    }
  });
};

exports.facebookAuth = facebookAuth;