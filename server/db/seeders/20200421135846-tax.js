'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('taxes', [{
      tax_type: 'Sales Tax at 8.5%',
      tax_percentage: '8.50'
    }, {
      tax_type: 'No Tax',
      tax_percentage: '8.50'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tax', null, {});
  }
};