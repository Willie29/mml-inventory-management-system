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
        createdAt: new Date(),
        qty: 10,
        ProductId: 1,
        updatedAt: new Date()
      },
      {
        name: 'Bandung',
        createdAt: new Date(),
        qty: 10,
        ProductId: 2,
        updatedAt: new Date()
      },
      {
        name: 'Bandung',
        createdAt: new Date(),
        qty: 10,
        ProductId: 1,
        updatedAt: new Date()
      },
      {
        name: 'Jakarta',
        createdAt: new Date(),
        qty: 10,
        ProductId: 2,
        updatedAt: new Date()
      },
      {
        name: 'Jakarta',
        createdAt: new Date(),
        qty: 10,
        ProductId: 3,
        updatedAt: new Date()
      },
      {
        name: 'Bandung',
        createdAt: new Date(),
        qty: 10,
        ProductId: 3,
        updatedAt: new Date()
      },
      {
        name: 'Jakarta',
        createdAt: new Date(),
        qty: 10,
        ProductId: 4,
        updatedAt: new Date()
      },
      {
        name: 'Bandung',
        createdAt: new Date(),
        qty: 10,
        ProductId: 4,
        updatedAt: new Date()
      },
      {
        name: 'Jakarta',
        createdAt: new Date(),
        qty: 10,
        ProductId: 5,
        updatedAt: new Date()
      },
      {
        name: 'Bandung',
        createdAt: new Date(),
        qty: 10,
        ProductId: 5,
        updatedAt: new Date()
      },
      {
        name: 'Jakarta',
        createdAt: new Date(),
        qty: 10,
        ProductId: 6,
        updatedAt: new Date()
      },
      {
        name: 'Bandung',
        createdAt: new Date(),
        qty: 10,
        ProductId: 6,
        updatedAt: new Date()
      },
      {
        name: 'Jakarta',
        createdAt: new Date(),
        qty: 10,
        ProductId: 7,
        updatedAt: new Date()
      },
      {
        name: 'Bandung',
        createdAt: new Date(),
        qty: 10,
        ProductId: 7,
        updatedAt: new Date()
      },
      {
        name: 'Jakarta',
        createdAt: new Date(),
        qty: 10,
        ProductId: 8,
        updatedAt: new Date()
      },
      {
        name: 'Bandung',
        createdAt: new Date(),
        qty: 10,
        ProductId: 8,
        updatedAt: new Date()
      },
      {
        name: 'Jakarta',
        createdAt: new Date(),
        qty: 10,
        ProductId: 9,
        updatedAt: new Date
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
