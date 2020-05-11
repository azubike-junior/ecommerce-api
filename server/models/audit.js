'use strict';
module.exports = (sequelize, DataTypes) => {
  const audit = sequelize.define('audit', {
    audit_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    order_id: {
      type: DataTypes.INTEGER,
    },
    created_on: {
      type: DataTypes.DATE
    },
    message: {
      type: DataTypes.STRING
    },
    code: {
      type: DataTypes.INTEGER
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });
  audit.associate = function (models) {
    // associations can be defined here
  };
  return audit;
};