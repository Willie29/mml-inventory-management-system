'use strict';
let bcryptjs = require("bcryptjs")
module.exports = {
    async up(queryInterface, Sequelize) {
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
                "username": "Willyam",
                "email": "willyam@mail.com",
                "password": "pass123",
                "role": "admin",
                phone: "081234567890",
                position: "Stock Manager",
                firstName: "Willyam",
                lastName: "Dyanata"
            }, {
                "username": "Steven",
                "email": "steven@mail.com",
                "password": "pass123",
                "role": "employee",
                phone: "081476649375",
                position: "Staff Gudang B",
                firstName: "Steven",
                lastName: "Setiadi"
            },
        ]
        let salt = bcryptjs.genSaltSync(10)

        data.forEach(el => {
            el.password = bcryptjs.hashSync(el.password, salt)
            el.createdAt = new Date(),
                el.updatedAt = new Date()
        })

        await queryInterface.bulkInsert('Users', data, {})
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('Users', null, {})
    }
};
