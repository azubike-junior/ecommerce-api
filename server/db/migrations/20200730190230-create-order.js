'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('order', {
      order_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      total_amount: {
        type: Sequelize.STRING
      },
      created_on: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      auth_code: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      comments: {
        type: Sequelize.STRING
      },
      customer_id: {
        type: Sequelize.INTEGER
      },
      shipped_on: {
        type: Sequelize.DATE
      },
      shipping_id: {
        type: Sequelize.INTEGER
      },
      tax_id: {
        type: Sequelize.INTEGER
      },
      reference: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('order');
  }
};