"use strict";

var _password = require("../utils/password");

'use strict';

module.exports = (sequelize, DataTypes) => {
  const customer = sequelize.define('customer', {
    customer_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address_1: {
      type: DataTypes.STRING
    },
    address_2: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    region: {
      type: DataTypes.STRING
    },
    postal_code: {
      type: DataTypes.STRING
    },
    shipping_region_id: {
      type: DataTypes.INTEGER
    },
    credit_card: {
      type: DataTypes.STRING
    },
    day_phone: {
      type: DataTypes.STRING
    },
    mobile_phone: {
      type: DataTypes.STRING
    },
    country: {
      type: DataTypes.STRING
    }
  }, {
    freezeTableName: true,
    timestamps: false,
    hooks: {
      beforeCreate: user => {
        user.password = (0, _password.hashPassword)(user.password);
        return user.password;
      }
    }
  });

  customer.associate = db => {
    customer.hasMany(db.order, {
      foreignKey: 'customer_id',
      target: 'customer_id'
    });
    customer.hasOne(db.shipping_region, {
      foreignKey: 'shipping_region_id',
      target: 'shipping_region_id'
    });
  };

  return customer;
};