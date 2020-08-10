'use strict';

module.exports = (sequelize, DataTypes) => {
  const department = sequelize.define('department', {
    department_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });

  department.associate = db => {
    department.hasMany(db.category, {
      foreignKey: 'department_id',
      target: 'department_id'
    });
    department.hasMany(db.product, {
      foreignKey: 'department_id',
      target: 'department_id'
    });
  };

  return department;
};