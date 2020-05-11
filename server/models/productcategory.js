'use strict';
module.exports = (sequelize, DataTypes) => {
  const productcategory = sequelize.define('productcategory', {}, {
    freezeTableName: true,
    timestamps: false
  });
  productcategory.associate = db => {
    productcategory.belongsTo(db.product, {
        foreignKey: 'product_id',
        target: 'product_id'
      }),
      productcategory.belongsTo(db.category, {
        foreignKey: 'category_id',
        target: 'category_id'
      })
  };
  return productcategory;
};