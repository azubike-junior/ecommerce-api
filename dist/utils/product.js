"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterProductsCategories = exports.productResult = exports.allproductsAvailable = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

const allproductsAvailable = (products, description_length, opt = true) => {
  let allProducts = [];

  if (opt) {
    products.forEach(product => {
      const productDescription = description_length >= product.description.length ? product.description : `${product.description.slice(0, description_length)}`;
      allProducts.push(_objectSpread({}, product.dataValues, {
        description: productDescription
      }));
    });
    return allProducts;
  }

  if (opt === false) {
    products.forEach(product => {
      const productDescription = description_length >= product.product.description.length ? product.product.description : `${product.product.description.slice(0, description_length)}`;
      allProducts.push(_objectSpread({}, product.product.dataValues, {
        description: productDescription
      }));
    });
    return allProducts;
  }

  products.forEach(singleProduct => {
    const productDescription = description_length >= singleProduct.description.length ? singleProduct.description : `${singleProduct.description.slice(0, description_length)}`;
    allProducts.push(_objectSpread({}, singleProduct.dataValues, {
      description: productDescription
    }));
  });
  return allItems(allProducts);
};

exports.allproductsAvailable = allproductsAvailable;

const allItems = array => {
  const all = [];
  array.forEach(product => {
    all.push(product);
  });
};

const productResult = products => {
  const all = [];
  products.forEach(product => {
    all.push({
      product_id: product.product_id,
      name: product.name,
      description: product.description,
      price: product.price,
      discounted_price: product.discounted_price,
      thumbnail: product.thumbnail
    });
  });
  return all;
};

exports.productResult = productResult;

const filterProductsCategories = ({
  category_id,
  category,
  category: {
    department_id,
    department: {
      name
    }
  }
}) => {
  return {
    category_id,
    category_name: category.name,
    department_id,
    department_name: name
  };
};

exports.filterProductsCategories = filterProductsCategories;