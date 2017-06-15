'use strict';
module.exports = {
  up: (queryInterface, Sequelize)=> {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true,
        validate: {
        notEmpty: true
      }
      },
      userName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
        notEmpty: true
      }
      },
      confirmpassword: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
        notEmpty: true
      }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface /*, Sequelize*/) {
    return queryInterface.dropTable('Users');
  }
};