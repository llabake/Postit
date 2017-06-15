'use strict';
module.exports = (sequelize, DataTypes) =>{
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: { type:DataTypes.STRING, allowNull: false, validate:{isEmail: true}},
    password:{ type:DataTypes.STRING, allowNull:false},
    lastLogin: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
    }
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        User.hasMany(models.Message, {through:"UserMessage", foreignKey:"id",as:"messageid"});
        User.belongsToMany(Group, {through: 'UserGroup',
        foreignKey:'id', as: "groupId"})
      }
    }
  });
  return User;
};