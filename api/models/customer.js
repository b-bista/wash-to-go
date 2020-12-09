'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {}

  Customer.init({
    firstName: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 50],
        notEmpty: true,
      }
    },
    lastName: {
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
    modelName: 'customer'
  });

  Customer.associate = (models) => {
    // associations can be defined here
    Customer.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      },
      onDelete: 'CASCADE'}
    );
    
    Customer.hasMany(models.Order);


  };

  return Customer;
};