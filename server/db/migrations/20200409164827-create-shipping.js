'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('shippings', {
      shipping_id: {
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      shipping_type: {
        type: Sequelize.STRING
      },
      shipping_cost: {
        type: Sequelize.STRING
      },
      shipping_region_id: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('shippings');
  }
};