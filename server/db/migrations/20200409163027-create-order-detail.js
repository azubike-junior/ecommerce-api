'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orderDetails', {
      order_detail_id: {
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      attributes: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.INTEGER

      },
      product_name: {
        type: Sequelize.STRING
      },
      unit_cost: {
        type: Sequelize.STRING
      },
      order_id: {
        type: Sequelize.INTEGER
      },
      product_id: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('orderDetails');
  }
};