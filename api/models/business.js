'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Business extends Model {}

  Business.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 50],
        notEmpty: true,
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      }
    },
    address1: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 100],
        notEmpty: true,
      }
    },
    address2: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 50],
        notEmpty: true,
      }
    },
    state: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 50],
        notEmpty: true,
      }
    },
    zipCode: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 5],
        notEmpty: true,
      }
    },
    country: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 30],
        notEmpty: true,
      }
    },
  },
  {
    sequelize,
    modelName: 'business'
  });

  Business.associate = (models) => {
    // associations can be defined here
    Business.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      },
      onDelete: 'CASCADE'}
    );
    
    Business.hasMany(models.Order);
    Business.hasMany(models.Service);


  };

  return Business;
};