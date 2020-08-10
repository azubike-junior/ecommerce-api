'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('product_attribute', [{
        product_id: 1,
        attribute_value_id: 1
      },
      {
        product_id: 2,
        attribute_value_id: 1
      },
      {
        product_id: 3,
        attribute_value_id: 1
      },
      {
        product_id: 4,
        attribute_value_id: 1
      },
      {
        product_id: 5,
        attribute_value_id: 1
      },
      {
        product_id: 6,
        attribute_value_id: 1
      },
      {
        product_id: 7,
        attribute_value_id: 1
      },
      {
        product_id: 8,
        attribute_value_id: 1
      },
      {
        product_id: 9,
        attribute_value_id: 1
      },
      {
        product_id: 10,
        attribute_value_id: 1
      },
      {
        product_id: 11,
        attribute_value_id: 1
      },
      {
        product_id: 12,
        attribute_value_id: 1
      },
      {
        product_id: 13,
        attribute_value_id: 1
      },
      {
        product_id: 14,
        attribute_value_id: 1
      },
      {
        product_id: 15,
        attribute_value_id: 1
      },
      {
        product_id: 16,
        attribute_value_id: 1
      },
      {
        product_id: 17,
        attribute_value_id: 1
      },
      {
        product_id: 18,
        attribute_value_id: 1
      },
      {
        product_id: 19,
        attribute_value_id: 1
      },
      {
        product_id: 20,
        attribute_value_id: 1
      },
      {
        product_id: 21,
        attribute_value_id: 1
      },
      {
        product_id: 22,
        attribute_value_id: 2
      },
      {
        product_id: 23,
        attribute_value_id: 2
      },
      {
        product_id: 24,
        attribute_value_id: 2
      },
      {
        product_id: 25,
        attribute_value_id: 3
      },
      {
        product_id: 26,
        attribute_value_id: 3
      },
      {
        product_id: 27,
        attribute_value_id: 3
      },
      {
        product_id: 28,
        attribute_value_id: 4
      },
      {
        product_id: 29,
        attribute_value_id: 4
      },
      {
        product_id: 30,
        attribute_value_id: 5
      },
      {
        product_id: 31,
        attribute_value_id: 5
      },
      {
        product_id: 32,
        attribute_value_id: 6
      },
      {
        product_id: 33,
        attribute_value_id: 7
      },
      {
        product_id: 34,
        attribute_value_id: 8
      },
      {
        product_id: 35,
        attribute_value_id: 8
      },
      {
        product_id: 36,
        attribute_value_id: 10
      },
      {
        product_id: 37,
        attribute_value_id: 11
      },
      {
        product_id: 38,
        attribute_value_id: 8
      },
      {
        product_id: 39,
        attribute_value_id: 9
      }

    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('product_attribute', null, {});

  }
};