'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 100],
        notEmpty: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 20],
        notEmpty: true,
      }
    }
  },
  {
    sequelize,
    modelName: 'user'
  });

  User.associate = (models) => {
    // associations can be defined here
    User.hasOne(models.Customer);
    User.hasOne(models.Deliverer);
    User.hasOne(models.Partner);
  };

  return User;
};