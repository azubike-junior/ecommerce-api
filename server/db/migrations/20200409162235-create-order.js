'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      order_id: {
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      total_amount: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_on: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      status: {
        type: Sequelize.BOOLEAN,
        DefaultValue: false,
        allowNull: false,
      },
      comments: {
        type: Sequelize.STRING
      },
      customer_id: {
        type: Sequelize.INTEGER
      },
      auth_code: {
        type: Sequelize.STRING
      },
      Reference: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      shipped_on: {
        type: Sequelize.DATE
      },
      shipping_id: {
        type: Sequelize.INTEGER
      },
      tax_id: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('orders');
  }
};