'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('attribute_value', [{
        attribute_value_id: 1,
        attribute_id: 1,
        value: 'S'
      },
      {
        attribute_value_id: 2,
        attribute_id: 1,
        value: 'M'
      },
      {
        attribute_value_id: 3,
        attribute_id: 1,
        value: 'L'
      },
      {
        attribute_value_id: 4,
        attribute_id: 1,
        value: 'XL'
      },
      {
        attribute_value_id: 5,
        attribute_id: 1,
        value: 'XXL'
      },
      {
        attribute_value_id: 6,
        attribute_id: 2,
        value: 'White'
      },
      {
        attribute_value_id: 7,
        attribute_id: 2,
        value: 'Red'
      },
      {
        attribute_value_id: 8,
        attribute_id: 2,
        value: 'Blue'
      },
      {
        attribute_value_id: 9,
        attribute_id: 2,
        value: 'Green'
      },
      {
        attribute_value_id: 10,
        attribute_id: 2,
        value: 'Yellow'
      },
      {
        attribute_value_id: 11,
        attribute_id: 2,
        value: 'Indigo'
      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('attribute_value', null, {});

  }
};