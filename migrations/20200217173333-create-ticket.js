'use strict'
module.exports = {
  up: (queryInterface, Sequelize) =>
  {
    return queryInterface.createTable('Tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      startLocation: {
        type: Sequelize.STRING
      },
      endDestination: {
        type: Sequelize.STRING
      },
      busId: {
        type: Sequelize.INTEGER
      },
      travelTime: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.FLOAT
      },
      tax: {
        type: Sequelize.FLOAT
      },
      donation: {
        type: Sequelize.BOOLEAN
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
  down: (queryInterface, Sequelize) =>
  {
    return queryInterface.dropTable('Tickets')
  }
}