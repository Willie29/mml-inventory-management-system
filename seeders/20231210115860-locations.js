'use strict';

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

    const data = [
      {
        name: 'Jakarta',
        stock: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bandung',
        stock: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

    await queryInterface.bulkInsert('Locations', data, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Locations', null, {})
  }
};
