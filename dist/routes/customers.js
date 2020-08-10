"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _customer = _interopRequireDefault(require("../controllers/customer"));

var _passport = _interopRequireDefault(require("passport"));

var _valiadateData = require("../middlewares/valiadateData");

var _authentication = _interopRequireDefault(require("../middlewares/authentication"));

const customersRoute = _express.default.Router();

customersRoute.post('/signup', _valiadateData.validateSchema, _customer.default.registerCustomer);
customersRoute.post('/login', _customer.default.loginCustomer);
customersRoute.get('/', _authentication.default, _customer.default.getCustomer);
customersRoute.get('/facebook', _passport.default.authenticate('facebook', {
  scope: ['profile', 'email']
}));
customersRoute.get('/auth/facebook/callback', _passport.default.authenticate('facebook', {
  session: false
}), _customer.default.facebookLogin);
var _default = customersRoute;
exports.default = _default;