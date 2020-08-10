"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makePayment = void 0;

var _stripe = _interopRequireDefault(require("stripe"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv.default.config();

const stripe = (0, _stripe.default)(process.env.STRIPE_TOKEN);

const makePayment = async (token, amount, currency, description) => {
  const charge = await stripe.charges.create({
    amount,
    currency,
    description,
    source: token
  });
  return charge;
};

exports.makePayment = makePayment;