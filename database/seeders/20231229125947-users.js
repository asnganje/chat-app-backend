'use strict';
const bcrypt = require('bcrypt')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'Nafisa',
        lastName: 'Abdalla',
        email: 'nafisaabdul@gmail.com',
        password: bcrypt.hashSync('secret', 10),
        gender: 'female'
      },
      {
        firstName: 'Nganje',
        lastName: 'Abdul',
        email: 'nganjeabd@gmail.com',
        password: 'secret1',
        gender: 'male'
      },
      {
        firstName: 'Auf',
        lastName: 'Nganje',
        email: 'aufnganje@gmail.com',
        password: 'secret2',
        gender: 'male'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
