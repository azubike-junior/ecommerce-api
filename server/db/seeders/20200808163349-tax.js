'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('tax', [{
        tax_id: 1,
        tax_type: 'Sales Tax at 8.5%',
        tax_percentage: '8.59'
      },
      {
        tax_id: 2,
        tax_type: 'No Tax',
        tax_percentage: '2.22'
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('tax', null, {});

  }
};