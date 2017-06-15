'use strict';
module.exports = function(sequelize, DataTypes) {
  var Message = sequelize.define('Message', {
    messageText: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        Message.belongsToMany(models.User, { through: "messageuser", foreignKey:'id',
        as :'userid'})
        Message.belongsToMany(models.Group, { through: "messagegroup", foreignKey:'groupid'})
      }
    }
  });
  return Message;
};