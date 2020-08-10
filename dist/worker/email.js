"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mail = _interopRequireDefault(require("@sendgrid/mail"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv.default.config();

const {
  sendgrid_key,
  EMAIL
} = process.env;

_mail.default.setApiKey(sendgrid_key);

class SendEmail {
  static async sendOrder(email, cart, order_id) {
    const product_name = cart[0].dataValues.product.name;
    const product_id = cart[0].dataValues.product_id;
    const attributes = cart[0].dataValues.attributes;
    const unit_cost = cart[0].dataValues.product.price;
    const quantity = cart[0].dataValues.quantity;
    const subtotal = cart[0].dataValues.product.price * cart[0].dataValues.quantity;
    const msg = {
      to: email,
      from: EMAIL,
      subject: 'All Ordered Items',
      html: `<div style ="background-color: lightgray; width: 100%; height:50%; padding: 10px">
                    We are pleased to inform you that the product with the following has been Ordered successfully:<br>
                    <hr>
                    <span style ="font-weight: bold;">Order Product Name :</span><span style ="color:brown">${product_name}</span><br><hr>
                     <span style ="font-weight: bold;">Order ID :</span><span style ="color:brown">${order_id}</span><br><hr>
                    <span style ="font-weight: bold;">Order Product ID :</span><span style ="color:brown">${product_id}</span><br><hr>
                    <span style ="font-weight: bold;">Order Attributes :</span><span style ="color:brown">${attributes}</span><br><hr>
                    <span style ="font-weight: bold;">Order Unit Cost :</span><span style ="color:brown">${unit_cost}</span><br><hr>
                    <span style ="font-weight: bold;">Order Quantity :</span><span style ="color:brown">${quantity}</span><br><hr>
                    <span style ="font-weight: bold;">Order Total :</span><span style ="color:brown">${subtotal}</span><br><hr>
                    </div>`
    };
    return await _mail.default.send(msg);
  }

}

exports.default = SendEmail;