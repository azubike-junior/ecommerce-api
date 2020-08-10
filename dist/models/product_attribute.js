'use strict';

module.exports = (sequelize, DataTypes) => {
  const productAttribute = sequelize.define('product_attribute', {
    product_attribute_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    attribute_value_id: {
      type: DataTypes.INTEGER
    },
    product_id: {
      type: DataTypes.INTEGER
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });

  productAttribute.associate = db => {
    productAttribute.belongsTo(db.product, {
      foreignKey: 'product_id',
      target: 'product_id',
      primaryKey: 'product_id'
    });
    productAttribute.belongsTo(db.attribute_value, {
      foreignKey: 'attribute_value_id',
      target: 'attribute_value_id',
      primaryKey: 'attribute_id'
    });
  };

  return productAttribute;
};