'use strict';

module.exports = (sequelize, DataTypes) => {
  const attribute = sequelize.define('attribute', {
    attribute_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });

  attribute.associate = db => {
    attribute.hasMany(db.attribute_value, {
      foreignKey: 'attribute_id',
      target: 'attribute_id'
    });
  };

  return attribute;
};