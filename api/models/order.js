'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Order extends Model {}

  Order.init({
    status: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 50],
        notEmpty: true,
      }
    },
    total: {
      type: DataTypes.STRING
    },
    orderDate: {
      type: DataTypes.DATE
    },
    comments: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    modelName: 'order'
  });

  Order.associate = (models) => {
    // associations can be defined here
    Order.belongsTo(models.Customer);
    Order.hasMany(models.Service);
    //Order.hasOne(models.Partner);
    //Order.hasMany(models.Deliverer);
  };

  return Order;
};