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
                "username": "admin",
                "email": "admin@mail.com",
                "password": "pass123",
                "role": "admin",
                position: "Manager",
                firstName: "Admin",
                lastName: "Satu"
            }, {
                "username": "kasino",
                "email": "kasino@mail.com",
                "password": "pass123",
                "role": "employee",
                position: "Staff",
                firstName: "Kasino",
                lastName: "Indro"
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
