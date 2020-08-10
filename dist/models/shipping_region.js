'use strict';

module.exports = (sequelize, DataTypes) => {
  const shipping_region = sequelize.define('shipping_region', {
    shipping_region_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      allowNull: false
    },
    shipping_region: {
      type: DataTypes.STRING
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });

  shipping_region.associate = db => {
    shipping_region.hasMany(db.shipping, {
      foreignKey: 'shipping_region_id',
      target: 'shipping_region_id'
    });
  };

  return shipping_region;
};