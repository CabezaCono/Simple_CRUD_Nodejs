'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING(50),
        unique: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      surname: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      second_surname: {
        type: Sequelize.STRING(20)
      },

      role_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "roles",
          key: "id"
        }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};