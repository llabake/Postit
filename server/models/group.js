'use strict';
module.exports =(sequelize, DataTypes) =>{
  const Group = sequelize.define('Group', {
    groupName: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        Group.hasMany(models.Message,{through:'MessageGroup'})
        Group.belongsToMany(User, {through: 'UserGroup', 
          foreignKey:'id', 
          as: 'groupId'})
      }
    }
  });
  return Group;
};