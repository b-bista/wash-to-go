'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Service extends Model {}

  Service.init({
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
    modelName: 'customer'
  });

  Service.associate = (models) => {
    // associations can be defined here
    Service.belongsTo(models.Order);

  };

  return Service;
};