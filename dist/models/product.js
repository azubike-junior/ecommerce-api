'use strict';

module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    product_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.STRING
    },
    discounted_price: {
      type: DataTypes.DOUBLE
    },
    image: {
      type: DataTypes.STRING
    },
    image_2: {
      type: DataTypes.STRING
    },
    thumbnail: {
      type: DataTypes.STRING
    },
    display: {
      type: DataTypes.STRING
    },
    department_id: {
      type: DataTypes.INTEGER
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });

  product.associate = db => {
    product.belongsToMany(db.category, {
      foreignKey: 'category_id',
      otherKey: 'product_id',
      through: 'productcategory'
    }), product.hasMany(db.shoppingCart, {
      foreignKey: 'product_id',
      target: 'product_id'
    });
    product.belongsTo(db.department, {
      foreignKey: 'department_id',
      target: 'department_id'
    });
  };

  return product;
};