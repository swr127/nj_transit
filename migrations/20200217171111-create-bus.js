'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Buses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      departureTime: {
        type: Sequelize.DATE
      },
      arrivalTime: {
        type: Sequelize.DATE
      },
      platform: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      busNumber: {
        type: Sequelize.INTEGER,
      },   
      routeId: {
        type: Sequelize.INTEGER,
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Buses');
  }
};