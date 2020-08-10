"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash.isempty"));

var _customer = _interopRequireDefault(require("../tools/customer"));

var _password = require("../utils/password");

var _authentication = require("../middlewares/authentication");

var _response = _interopRequireDefault(require("../utils/response"));

class CustomerController {
  static async registerCustomer(req, res) {
    const {
      name,
      email
    } = req.body;
    const customer = await _customer.default.getCustomer(email);

    if (customer) {
      return await _response.default.httpErrorResponse(res, null, 400, 'Email has been used');
    }

    const newCustomer = await _customer.default.createCustomer({
      name,
      password: req.body.password,
      email
    });
    const token = (0, _authentication.generateToken)(newCustomer.customer_id);
    return await _response.default.successResponse(res, token, 201, 'registered Successfully');
  }

  static async loginCustomer(req, res) {
    const {
      email,
      password
    } = req.body;
    const customer = await _customer.default.getCustomer(email);

    if (customer) {
      const userPassword = customer.get('password');
      const isMatch = (0, _password.comparePassword)(password, userPassword);

      if (isMatch) {
        const token = (0, _authentication.generateToken)(customer.customer_id);
        return _response.default.successResponse(res, token, 200, 'login Successfully');
      }

      return await _response.default.httpErrorResponse(res, null, 400, 'invalid login credential');
    }

    return await _response.default.httpErrorResponse(res, null, 404, 'invalid login credentials');
  }

  static async getCustomer(req, res) {
    const {
      customer_id
    } = req.user;
    console.log(customer_id);
    const foundCustomer = await _customer.default.getCustomerById(customer_id);
    const customer = await _customer.default.getCustomerDetails(foundCustomer);
    return _response.default.successResponse(res, customer, 200, 'Customer details retrieved');
  }

  static async updateCustomerData(req, res) {
    const {
      body: {
        name,
        email,
        password,
        day_phone,
        mobile_phone
      },
      customer
    } = req;
    const updatedCustomerData = await _customer.default.updateCustomerBiodata(customer, {
      name,
      email,
      password,
      day_phone,
      mobile_phone
    });
    console.log('===before', updatedCustomerData.password);
    updatedCustomerData.password = undefined;
    console.log('===after', updatedCustomerData.password);
    return await _response.default.successResponse(res, updatedCustomerData, 201, 'Customer Biodata updated');
  }

  static async updateCreditCard(req, res) {
    const {
      body: {
        credit_card
      },
      customer
    } = req;
    const creditCard = await _customer.default.updateCreditCard(customer, {
      credit_card
    });
    const customerDetail = await _customer.default.getCustomerDetails(creditCard);
    console.log(customerDetail.customer);
    return await _response.default.successResponse(res, customerDetail.customer, 201, 'Customer credit Card updated');
  }

  static async updateCustomerAddress(req, res) {
    const {
      body: {
        address_1,
        address_2,
        city,
        region,
        country,
        postal_code,
        shipping_region_id
      },
      customer
    } = req;
    const updatedCustomerAddress = await _customer.default.updateCustomerAddress(customer, {
      address_1,
      address_2,
      city,
      region,
      country,
      postal_code,
      shipping_region_id
    });
    console.log(updatedCustomerAddress);
    return await _response.default.successResponse(res, updatedCustomerAddress, 201, 'Customer Address updated');
  }

  static facebookLogin(req, res) {
    res.status(200).json({
      message: 'customer sign successfully',
      statusCode: 200
    });
  }

}

exports.default = CustomerController;