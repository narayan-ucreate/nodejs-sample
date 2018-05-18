'use strict';
var Sequelize = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'first name is a required field'
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'last name is a required field'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'email is a required field'
        }, isEmail: {
          args: true,
          msg: 'The email you entered is invalid or is already in our system.'
        }
      }
    },
  }, {});
  User.associate = function (models) {
    // associations can be defined here
  };
  User.getAllUser = function () {

  }
  return User;
};