'use strict';
module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    confirmpassword: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.hasMany(models.Message,{through:'MessageUser'})
        User.belongsToMany(Group, {through: 'GroupUser', 
          foreignKey:'id', 
          as: 'groupId'})
      }
    }
  });
  return Users;
};