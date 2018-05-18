'use strict';
var Sequelize = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'The email you entered is invalid or is already in our system.'
        },
      }
    },
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    // associations can be defined here
  };
  User.getAllUser = function () {

  }
  return User;
};