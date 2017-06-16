'use strict';

const Sequelize = require('./index').Sequelize;
const sequelize = require('./index').sequelize;
module.exports = () =>{
  var User = sequelize.define('User', {
    username: Sequelize.STRING,
    email: { type:Sequelize.STRING, allowNull: false, validate:{isEmail: true}},
    password:{ type:Sequelize.STRING, allowNull:false},
    lastLogin: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
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
