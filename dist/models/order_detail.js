'use strict';

module.exports = (sequelize, DataTypes) => {
  const orderDetail = sequelize.define('order_detail', {
    order_detail_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      allowNull: false
    },
    attributes: {
      type: DataTypes.STRING
    },
    quantity: {
      type: DataTypes.INTEGER
    },
    product_name: {
      type: DataTypes.STRING
    },
    unit_cost: {
      type: DataTypes.STRING
    },
    order_id: {
      type: DataTypes.INTEGER
    },
    product_id: {
      type: DataTypes.INTEGER
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });

  orderDetail.associate = db => {
    orderDetail.belongsTo(db.order, {
      foreignKey: 'order_id',
      target: 'order_id'
    });
    orderDetail.belongsTo(db.product, {
      foreignKey: 'product_id',
      target: 'product_id'
    });
  };

  return orderDetail;
};