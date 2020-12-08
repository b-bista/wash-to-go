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
    description: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 100],
        notEmpty: true,
      }
    },
    price: {
      type: DataTypes.DOUBLE,
      validate: {
        notEmpty: true,
      }
    }
  },
  {
    sequelize,
    modelName: 'service'
  });

  Service.associate = (models) => {
    // associations can be defined here
    Service.belongsTo(models.Business);

  };

  return Service;
};