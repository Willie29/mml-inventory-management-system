'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('History', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId:{
        type: Sequelize.INTEGER,
      },
      OrderId:{
        type: Sequelize.INTEGER,
      },
      RequestId:{
        type: Sequelize.INTEGER,
      },
      log_type: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('History');
  }
};