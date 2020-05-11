import {
  SAVE_PRODUCT,
  MOVE_TO_CART
} from '../utils/variable'
'use strict';
module.exports = (sequelize, DataTypes) => {
  const shoppingCart = sequelize.define('shoppingCart', {
    item_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    cart_id: {
      type: DataTypes.STRING
    },
    attributes: {
      type: DataTypes.STRING
    },
    product_id: {
      type: DataTypes.INTEGER
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    added_On: {
      type: DataTypes.DATE
    },
    get_now: {
      type: DataTypes.INTEGER
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });
  shoppingCart.associate = db => {
    shoppingCart.belongsTo(db.product, {
      foreignKey: 'product_id',
      target: 'product_id'
    })
  };

  shoppingCart.prototype.saveOrMoveTocart = async function (option) {
    this.get_now = option
    await this.save()
    await this.reload()
  }

  return shoppingCart;
};