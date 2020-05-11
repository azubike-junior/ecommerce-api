import {
  PAID
} from '../utils/variable'

'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    order_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    total_amount: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_on: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    auth_code: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    comments: {
      type: DataTypes.STRING
    },
    customer_id: {
      type: DataTypes.INTEGER
    },
    shipped_on: {
      type: DataTypes.DATE
    },
    shipping_id: {
      type: DataTypes.INTEGER
    },
    tax_id: {
      type: DataTypes.INTEGER
    },
    Reference: {
      type: DataTypes.STRING
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });
  order.associate = db => {
    order.belongsTo(db.customer, {
      foreignKey: 'customer_id',
      target: 'customer_id'
    });

    order.hasOne(db.shipping, {
      foreignKey: 'shipping_id',
      target: 'shipping_id'
    });

    order.hasOne(db.tax, {
      foreignKey: 'tax_id',
      target: 'tax_id'
    });

    order.hasMany(db.orderDetail, {
      foreignKey: 'order_id',
      target: 'order_id'
    });
  };

  order.prototype.confirmPayment = async function () {
    this.status = PAID;
    await this.save();
    await this.reload();
  }
  return order;
};