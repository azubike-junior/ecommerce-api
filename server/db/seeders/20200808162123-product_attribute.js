'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('product_attribute', [{
        product: 1,
        attribute_value_id: 1
      },
      {
        product: 2,
        attribute_value_id: 1
      },
      {
        product: 3,
        attribute_value_id: 1
      },
      {
        product: 4,
        attribute_value_id: 1
      },
      {
        product: 5,
        attribute_value_id: 1
      },
      {
        product: 6,
        attribute_value_id: 1
      },
      {
        product: 7,
        attribute_value_id: 1
      },
      {
        product: 8,
        attribute_value_id: 1
      },
      {
        product: 9,
        attribute_value_id: 1
      },
      {
        product: 10,
        attribute_value_id: 1
      },
      {
        product: 11,
        attribute_value_id: 1
      },
      {
        product: 12,
        attribute_value_id: 1
      },
      {
        product: 13,
        attribute_value_id: 1
      },
      {
        product: 14,
        attribute_value_id: 1
      },
      {
        product: 15,
        attribute_value_id: 1
      },
      {
        product: 16,
        attribute_value_id: 1
      },
      {
        product: 17,
        attribute_value_id: 1
      },
      {
        product: 18,
        attribute_value_id: 1
      },
      {
        product: 19,
        attribute_value_id: 1
      },
      {
        product: 20,
        attribute_value_id: 1
      },
      {
        product: 21,
        attribute_value_id: 1
      },
      {
        product: 22,
        attribute_value_id: 2
      },
      {
        product: 23,
        attribute_value_id: 2
      },
      {
        product: 24,
        attribute_value_id: 2
      },
      {
        product: 25,
        attribute_value_id: 3
      },
      {
        product: 26,
        attribute_value_id: 3
      },
      {
        product: 27,
        attribute_value_id: 3
      },
      {
        product: 28,
        attribute_value_id: 4
      },
      {
        product: 29,
        attribute_value_id: 4
      },
      {
        product: 30,
        attribute_value_id: 5
      },
      {
        product: 31,
        attribute_value_id: 5
      },
      {
        product: 32,
        attribute_value_id: 6
      },
      {
        product: 33,
        attribute_value_id: 7
      },
      {
        product: 34,
        attribute_value_id: 8
      },
      {
        product: 35,
        attribute_value_id: 8
      },
      {
        product: 36,
        attribute_value_id: 10
      },
      {
        product: 37,
        attribute_value_id: 11
      },
      {
        product: 38,
        attribute_value_id: 8
      },
      {
        product: 39,
        attribute_value_id: 9
      }

    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('product_attribute', null, {});

  }
};