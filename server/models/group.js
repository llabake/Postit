'use strict';
module.exports = function(sequelize, DataTypes) {
  const Group = sequelize.define('Group', {
    groupName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Group.hasMany(models.Message)
        Group.belongsToMany(User, {through: 'UserGroup', 
          foreignKey:'id', 
          as: 'userId'})
      }
    }
  });
  return Group;
};