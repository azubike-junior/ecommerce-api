'use strict';

module.exports = (sequelize, DataTypes) => {
  const attributeValue = sequelize.define('attribute_value', {
    attribute_value_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    attribute_id: {
      type: DataTypes.INTEGER
    },
    value: {
      type: DataTypes.STRING
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });

  attributeValue.associate = db => {
    attributeValue.belongsTo(db.attribute, {
      foreignKey: 'attribute_id',
      target: 'attribute_id'
    });
  };

  return attributeValue;
};