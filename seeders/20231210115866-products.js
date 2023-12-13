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

    let data = [
      {
        "name": "DC Shoes Striker",
        category: 'Shoes',
        uom: 'pcs',
      },
      {
        "name": "Nike Air Max",
        category: 'Shoes',
        uom: 'pcs',
      },
      {
        "name": "Adidas Predator",
        category: 'Shoes',
        uom: 'pcs',
      },
      {
        "name": "Nike Air Jordan",
        category: 'Shoes',
        uom: 'pcs',
      },
      {
        "name": "Nike Air Force",
        category: 'Shoes',
        uom: 'pcs',
      },
      {
        "name": "Nike Air Max 90",
        category: 'Shoes',
        uom: 'pcs',
      },
      {
        "name": "Nike Air Max 97",
        category: 'Shoes',
        uom: 'pcs',
      },
      {
        "name": "Nike Air Max 95",
        category: 'Shoes',
        uom: 'pcs',
      },
      {
        "name": "Nike Air Max 270",
        category: 'Shoes',
        uom: 'pcs',
      },
      {
        "name": "Nike Air Max 720",
        category: 'Shoes',
        uom: 'pcs',
      },
      {
        "name": "Nike Air Max 2090",
        category: 'Shoes',
        uom: 'pcs',
      },
      {
        "name": "Nike Air Max Plus",
        category: 'Shoes',
        uom: 'pcs',
      },
      {
        "name": "Nike Air Max 2090",
        category: 'Shoes',
        uom: 'pcs',
      },
      {
        "name": "Nike Air Max Plus",
        category: 'Shoes',
        uom: 'pcs',
      },
      {
        "name": "Nike Air Max 2090",
        category: 'Shoes',
        uom: 'pcs',
      },
      {
        "name": "Nike Air Max Plus",
        category: 'Shoes',
        uom: 'pcs',
      },
      {
        "name": "Nike Air Max 2090",
        category: 'Shoes',
        uom: 'pcs',
      },
      {
        "name": "Nike Air Max Plus",
        category: 'Shoes',
        uom: 'pcs',
      },
      {
        "name": "Nike Air Max 2090",
        category: 'Shoes',
        uom: 'pcs',
      },
    ]

    data.forEach(el => {
      el.createdAt = new Date(),
          el.updatedAt = new Date()
    })

    await queryInterface.bulkInsert('Products', data, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Products', null, {})
  }
};
