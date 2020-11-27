'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Order extends Model {}

  Order.init({
    type: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 50],
        notEmpty: true,
      }
    },
    status: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 50],
        notEmpty: true,
      }
    },
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