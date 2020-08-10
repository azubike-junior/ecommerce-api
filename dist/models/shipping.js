'use strict';

module.exports = (sequelize, DataTypes) => {
  const shipping = sequelize.define('shipping', {
    shipping_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      allowNull: false
    },
    shipping_type: {
      type: DataTypes.STRING
    },
    shipping_cost: {
      type: DataTypes.STRING
    },
    shipping_region_id: {
      type: DataTypes.INTEGER
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });

  shipping.associate = db => {
    shipping.belongsTo(db.shipping_region, {
      foreignKey: 'shipping_region_id',
      target: 'shipping_region_id'
    });
  };

  return shipping;
};