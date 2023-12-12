'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */

        await queryInterface.createTable('Orders', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            UserId: Sequelize.INTEGER,
            applicantStaff: {
                type: Sequelize.STRING
            },
            activity: {
                type: Sequelize.STRING
            },
            division: {
                type: Sequelize.STRING
            },
            orderStatus: {
                type: Sequelize.STRING
            },
            machine: {
                type: Sequelize.STRING
            },
            confirmTime: {
                type: Sequelize.DATE,
                allowNull: true
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        })
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */

        await queryInterface.dropTable('Orders');
    }
};
