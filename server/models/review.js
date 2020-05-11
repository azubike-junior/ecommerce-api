'use strict';
module.exports = (sequelize, DataTypes) => {
  const review = sequelize.define('review', {
    review_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER
    },
    review: {
      type: DataTypes.STRING
    },
    product_id: {
      type: DataTypes.INTEGER
    },
    customer_id: {
      type: DataTypes.INTEGER
    },
  }, {
    freezeTableName: true,
    timestamps: false
  });
  review.associate = db => {
    review.belongsTo(db.product, {
        foreignKey: 'product_id',
        target: 'product_id'
      }),
      review.belongsTo(db.customer, {
        foreignKey: 'customer_id',
        target: 'customer_id'
      })
  };
  return review;
};