'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */

        await queryInterface.createTable('Carts', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            UserId: Sequelize.INTEGER,
            ProductId: Sequelize.INTEGER,
            OrderID: Sequelize.INTEGER,
            quantity: Sequelize.INTEGER,
            uom: Sequelize.STRING,
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE
        })
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */

        await queryInterface.dropTable('Carts');
    }
};
