'use strict';

const faker = require('faker')

module.exports = {

  up: async (queryInterface, Sequelize) => {

    let users = [
      { email: "test@test.com", name: "Jonathan", surname: "García", second_surname: "Montaño", role_id: 1}
    ]

    for(var i = 0; i < 20; i++) {
      users.push({ 
        email: faker.internet.email(), 
        name: faker.name.firstName(),  
        surname: faker.name.lastName(), 
        second_surname: faker.random.number(1) === 1 ? faker.name.lastName() : null,
        role_id: faker.random.number({min: 2, max:3})
      })
    }

    await queryInterface.bulkInsert('users', users, {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('users', null, {});

  }
};