"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareProducts = exports.formatAtt = exports.prepareSavedItems = exports.cartFormat = exports.default = void 0;

var _default = ({
  order_id,
  total_amount,
  created_on,
  shipped_on,
  status,
  name
}) => {
  return {
    order_id,
    total_amount,
    created_on,
    shipped_on,
    status,
    name
  };
};

exports.default = _default;

const cartFormat = products => {
  console.log(products);
  let allProduct = [];
  products.forEach(product => {
    allProduct.push({
      item_id: product.item_id,
      attributes: product.attributes,
      product_id: product.product_id,
      quantity: product.quantity,
      product_name: product.product.name,
      discounted_price: product.product.discounted_price,
      product_price: product.product.price,
      product_image: product.product.image,
      subtotal: product.product.price * product.quantity
    });
  });
  return allProduct;
};

exports.cartFormat = cartFormat;

const prepareSavedItems = items => {
  let allItems = [];
  items.forEach(item => {
    console.log(item);
    allItems.push({
      item_id: item.item_id,
      name: item.product.name,
      attribute: item.attributes,
      price: item.product.price
    });
  });
  return allItems;
};

exports.prepareSavedItems = prepareSavedItems;

const formatAtt = async attributes => {
  let allAttributes = [];
  attributes.forEach(attribute => {
    allAttributes.push({
      attribute_name: attribute.attribute_value.attribute.name,
      attribute_value_id: attribute.attribute_value.attribute_value_id,
      attribute_value: attribute.attribute_value.value
    });
  });
  return allAttributes;
};

exports.formatAtt = formatAtt;

const prepareProducts = async (products, order_id) => {
  let allOrders = [];
  products.forEach(item => {
    allOrders.push({
      order_id,
      product_id: item.product_id,
      product_name: item.product.name,
      attributes: item.attributes,
      unit_cost: item.product.discounted_price * item.product.price,
      quantity: item.quantity,
      subtotal: item.quantity * item.product.price
    });
  });
  return allOrders;
};

exports.prepareProducts = prepareProducts;