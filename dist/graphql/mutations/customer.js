"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCustomerAddress = exports.updateCustomerBioData = exports.updateCreditCard = exports.signup = exports.signin = void 0;

var _graphql = require("graphql");

var _customerSchema = require("../schema/customerSchema");

var _axios = _interopRequireDefault(require("axios"));

var _variable = require("../../utils/variable");

const signup = {
  type: _customerSchema.customerType,
  args: {
    name: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    email: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    password: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    }
  },

  resolve(parent, args, req) {
    return _axios.default.post(`${_variable.baseUrl}/customers/signup`, {
      name: args.name,
      email: args.email,
      password: args.password
    }).then(res => res.data.data);
  }

};
exports.signup = signup;
const signin = {
  type: _customerSchema.customerType,
  args: {
    email: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    password: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    }
  },

  resolve(parent, args, req) {
    return _axios.default.post(`${_variable.baseUrl}/customers/login`, {
      email: args.email,
      password: args.password
    }).then(res => res.data.data);
  }

};
exports.signin = signin;
const updateCustomerBioData = {
  type: _customerSchema.customerType,
  args: {
    email: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    password: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    name: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    day_phone: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    mobile_phone: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    }
  },

  resolve(parent, args, req) {
    return _axios.default.put(`${_variable.baseUrl}/customer/`, {
      name: args.name,
      email: args.email,
      password: args.password,
      day_phone: args.day_phone,
      mobile_phone: args.mobile_phone
    }, {
      headers: {
        Authorization: req.headers.authorization
      }
    }).then(res => res.data.data);
  }

};
exports.updateCustomerBioData = updateCustomerBioData;
const updateCreditCard = {
  type: _customerSchema.customerType,
  args: {
    credit_card: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    }
  },

  resolve(parent, args, req) {
    return _axios.default.put(`${_variable.baseUrl}/customer/creditCard`, {
      credit_card: args.credit_card
    }, {
      headers: {
        Authorization: req.headers.authorization
      }
    }).then(res => res.data.data.schema);
  }

};
exports.updateCreditCard = updateCreditCard;
const updateCustomerAddress = {
  type: _customerSchema.customerType,
  args: {
    address_1: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    address_2: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    city: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    region: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    country: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    postal_code: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    shipping_region_id: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt)
    }
  },

  resolve(parent, args, req) {
    return _axios.default.put(`${_variable.baseUrl}/customer/address`, {
      address_1: args.address_1,
      address_2: args.address_2,
      city: args.city,
      region: args.region,
      country: args.country,
      postal_code: args.postal_code,
      shipping_region_id: args.shipping_region_id
    }, {
      headers: {
        Authorization: req.headers.authorization
      }
    }).then(res => res.data.data);
  }

};
exports.updateCustomerAddress = updateCustomerAddress;