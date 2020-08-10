'use strict';

module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    category_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    department_id: {
      type: DataTypes.INTEGER
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });

  category.associate = db => {
    category.belongsToMany(db.product, {
      foreign_key: 'category_id',
      otherKey: 'product_id',
      through: 'productcategory'
    });
  };

  return category;
};