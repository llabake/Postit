'use strict';
module.exports = (sequelize, DataTypes)=> {
  var groupUsers = sequelize.define('groupUsers', {
    groupId: DataTypes.INTEGER,
    userID: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: (models) => {
      Group.hasMany(models.Message, {through:"MessageGroup", foreignKey:"id",as:"messageid"});
      Group.belongsToMany(User, {through: 'UserGroup',
      foreignKey:'id', as: "groupId"}) 
        // associations can be defined here
      }
    }
  });
  return groupUsers;
};