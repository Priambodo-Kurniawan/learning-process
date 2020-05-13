'use strict';
const { generatePassword } = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class User extends Model {}

  User.init({
    email: {
      type: DataTypes.STRING,
      unique: {
        msg: 'Email already in use!'
      },
    },
    password: DataTypes.STRING
  }, {
    sequelize,
    hooks: {
      beforeCreate: (user) => {
        user.password = generatePassword(user.password)
      }
    }
  })


  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};