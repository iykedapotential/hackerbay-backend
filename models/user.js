'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.DATE,
    email: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here

      }
    }
  });
  return User;
};
