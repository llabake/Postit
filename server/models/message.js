'use strict';
module.exports = function(sequelize, DataTypes) {
  var Message = sequelize.define('Message', {
    messageText: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Message.belongsTo(models.User, { foreignKey:'id',
        as :'messageid'})
        Message.belongsTo(models.Group)
      }
    }
  });
  return Message;
};