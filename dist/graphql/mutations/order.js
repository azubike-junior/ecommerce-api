"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateOrder = exports.setShippedDate = exports.setAuthCode = exports.createOrder = void 0;

var _graphql = require("graphql");

var _orderSchema = require("../schema/orderSchema");

var _axios = _interopRequireDefault(require("axios"));

var _variable = require("../../utils/variable");

const createOrder = {
  type: _orderSchema.orderType,
  args: {
    cart_id: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    shipping_id: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt)
    },
    tax_id: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt)
    }
  },

  resolve(parent, args, req) {
    return _axios.default.post(`${_variable.baseUrl}/orders/`, {
      cart_id: args.cart_id,
      shipping_id: args.shipping_id,
      tax_id: args.tax_id
    }, {
      headers: {
        Authorization: req.headers.authorization
      }
    }).then(res => res.data.data);
  }

};
exports.createOrder = createOrder;
const setShippedDate = {
  type: _orderSchema.orderType,
  args: {
    order_id: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt)
    }
  },

  resolve(parent, args, req) {
    return _axios.default.put(`${_variable.baseUrl}/orders/set_shipped_on_date/${args.order_id}`, {
      order_id: args.order_id
    }, {
      headers: {
        Authorization: req.headers.authorization
      }
    }).then(res => res.data.data);
  }

};
exports.setShippedDate = setShippedDate;
const setAuthCode = {
  type: _orderSchema.orderType,
  args: {
    order_id: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt)
    },
    auth_code: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    Reference: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    }
  },

  resolve(parent, args, req) {
    return _axios.default.put(`${_variable.baseUrl}/orders/set_auth_code/${args.order_id}`, {
      auth_code: args.auth_code,
      Reference: args.Reference
    }, {
      headers: {
        Authorization: req.headers.authorization
      }
    }).then(res => res.data.data);
  }

};
exports.setAuthCode = setAuthCode;
const updateOrder = {
  type: _orderSchema.orderType,
  args: {
    order_id: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt)
    },
    comments: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    name: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    }
  },

  resolve(parent, args, req) {
    return _axios.default.put(`${_variable.baseUrl}/orders/update_order/${args.order_id}`, {
      order_id: args.order_id,
      comments: args.comments,
      name: args.name
    }, {
      headers: {
        Authorization: req.headers.authorization
      }
    }).then(res => res.data.data);
  }

};
exports.updateOrder = updateOrder;