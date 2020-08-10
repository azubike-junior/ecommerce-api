'use strict';

module.exports = (sequelize, DataTypes) => {
  const tax = sequelize.define('tax', {
    tax_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      allowNull: false
    },
    tax_type: {
      type: DataTypes.STRING
    },
    tax_percentage: {
      type: DataTypes.STRING
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });

  tax.associate = db => {
    tax.belongsTo(db.order, {
      foreignKey: 'tax_id',
      target: 'tax_id'
    });
  };

  return tax;
};