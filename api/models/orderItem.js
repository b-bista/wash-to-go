'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {}

  OrderItem.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 50],
        notEmpty: true,
      }
    },
    quantity: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 50],
        notEmpty: true,
      }
    },
    price: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 3],
        notEmpty: true,
      }
    }
  },
  {
    sequelize,
    modelName: 'orderItem'
  });

  OrderItem.associate = (models) => {
    // associations can be defined here
    OrderItem.belongsTo(models.Order);

  };

  return OrderItem;
};