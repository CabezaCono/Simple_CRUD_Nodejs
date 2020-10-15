'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    let roles = [
      { name: "Admin", description: "Eres Administrador" },
      { name: "Mod", description: "Eres Moderador" },
      { name: "Student", description: "Eres Estudiante" }
    ]

    await queryInterface.bulkInsert('roles', roles, {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('roles', null, {});
     
  }
};
