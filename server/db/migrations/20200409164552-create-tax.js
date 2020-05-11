'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('taxes', {
      tax_id: {
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tax_type: {
        type: Sequelize.STRING
      },
      tax_percentage: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('taxes');
  }
};