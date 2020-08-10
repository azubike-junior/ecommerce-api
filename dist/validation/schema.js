"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCartSchema = exports.formatError = exports.updateCart = exports.paymentSchema = exports.orderSchema = exports.addShoppingCartSchema = exports.reviewSchema = exports.updateCardSchema = exports.facebookSchema = exports.updateAddressOfCustomerSchema = exports.updateDataOfCustomerSchema = exports.signInSchema = exports.signUpSchema = void 0;

var _joi = _interopRequireDefault(require("joi"));

var _expressValidator = require("express-validator");

const name = _joi.default.string().required().min(1).label('name');

const email = _joi.default.string().email().required().trim().label("Email").lowercase();

const password = _joi.default.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{6,}$/).min(6).required().trim().label("Password").error(errors => {
  return formatError(errors, "Password", "Password must be atleast 6 chars with atleast 1 uppercase, 1 number, & 1 special char");
});

const address_2 = _joi.default.string().allow("").trim().strict().label('address_2');

const address_1 = _joi.default.string().required().trim().label('address_1');

const city = _joi.default.string().required().min(1).trim().label('city');

const country = _joi.default.string().required().min(1).trim().label('country');

const shipping_region_id = _joi.default.number().integer().required().label('shipping_region_id');

const day_phone = _joi.default.string().allow('').trim().strict().label('day_phone');

const postal_code = _joi.default.string().required().min(1).trim().label('postal_code');

const credit_card = _joi.default.string().required().min(1).trim().label('credit_card');

const currency = _joi.default.string().allow(null).allow('').optional();

const region = _joi.default.string().required().min(1).trim().label("region");

const eve_phone = _joi.default.string().allow('').trim().strict().label('eve_phone');

const mobile_phone = _joi.default.string().allow().trim().strict().label('mobile_phone');

const rating = _joi.default.number().integer().required().min(1).label('rating');

const review = _joi.default.string().required().min(1).trim().label('review');

const cart_id = _joi.default.string().required().label('cart_id');

const shipping_id = _joi.default.number().integer().required().label('shipping_id');

const attributes = _joi.default.string().required().trim().label('attributes');

const description = _joi.default.string().required().trim().label('description');

const product_id = _joi.default.number().integer().required().label('product_id');

const stripeToken = _joi.default.string().required().trim().label('stripeToken');

const order_id = _joi.default.number().integer().required().label('order_id');

const tax_id = _joi.default.number().integer().required().label('tax_id');

const amount = _joi.default.number().integer().required().label('amount');

const access_token = _joi.default.string().required().trim().label('access_token');

const quantity = _joi.default.number().integer().min(1).label('quantity');

const signUpSchema = _joi.default.object().keys({
  name,
  email,
  password
});

exports.signUpSchema = signUpSchema;

const signInSchema = _joi.default.object().keys({
  email: _joi.default.string().trim().required(),
  password: _joi.default.string().trim().required()
});

exports.signInSchema = signInSchema;

const updateDataOfCustomerSchema = _joi.default.object().keys({
  name,
  email,
  password,
  mobile_phone,
  eve_phone,
  day_phone
});

exports.updateDataOfCustomerSchema = updateDataOfCustomerSchema;

const updateAddressOfCustomerSchema = _joi.default.object().keys({
  address_1,
  address_2,
  city,
  region,
  postal_code,
  shipping_region_id,
  country
});

exports.updateAddressOfCustomerSchema = updateAddressOfCustomerSchema;

const facebookSchema = _joi.default.object().keys({
  access_token
});

exports.facebookSchema = facebookSchema;

const updateCardSchema = _joi.default.object().keys({
  credit_card
});

exports.updateCardSchema = updateCardSchema;

const reviewSchema = _joi.default.object().keys({
  review,
  rating
});

exports.reviewSchema = reviewSchema;

const addShoppingCartSchema = _joi.default.object().keys({
  cart_id,
  product_id,
  attributes
});

exports.addShoppingCartSchema = addShoppingCartSchema;

const orderSchema = _joi.default.object().keys({
  cart_id,
  shipping_id,
  tax_id
});

exports.orderSchema = orderSchema;

const paymentSchema = _joi.default.object().keys({
  amount,
  description,
  stripeToken,
  currency,
  order_id
});

exports.paymentSchema = paymentSchema;

const updateCart = _joi.default.object().keys({
  quantity
});

exports.updateCart = updateCart;

const formatError = (errors, label, message) => {
  const err = errors[0];

  switch (err.type) {
    case "string.regex.base":
      return message || `${label || err.path} is inavlid`;

    default:
      return err;
  }
}; // export const signUpSchema = [
//     check('name').isLength({
//         min: 1
//     })
//     .trim()
//     .escape()
//     .withMessage('Name field is required'),
//     check('email')
//     .isEmail()
//     .isLength({
//         min: 1
//     })
//     .trim()
//     .escape()
//     .withMessage('Email field is required'),
//     check('password')
//     .isLength({
//         min: 8
//     })
//     .trim()
//     .withMessage('Password must be more than 8 characters'),
//     (req, res, next) => {
//         const errors = validationResult(req)
//         if (!errors.isEmpty()) {
//             return res.status(400).json({
//                 message: errors.array()
//             })
//         }
//         return next();
//     }
// ]
// export const signInSchema = [
//     check('email')
//     .isEmail()
//     .isLength({
//         min: 1
//     })
//     .trim()
//     .escape()
//     .withMessage('Email field is required'),
//     check('password')
//     .isLength({
//         min: 8
//     })
//     .trim()
//     .withMessage('Password must be more than 8 characters'),
//     (req, res, next) => {
//         const errors = validationResult(req)
//         if (!errors.isEmpty()) {
//             return res.status(400).json({
//                 message: errors.array()
//             })
//         }
//         return next();
//     }
// ]


exports.formatError = formatError;

const updateCartSchema = () => {
  return [(0, _expressValidator.check)('quantity').isNumeric().withMessage('quantity must be a number').isLength({
    min: 1
  }).withMessage('quantity field is empty'), (req, res, next) => {
    const errors = (0, _expressValidator.validationResult)(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: errors.array()
      });
    }

    return next();
  }];
};

exports.updateCartSchema = updateCartSchema;