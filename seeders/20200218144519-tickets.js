'use strict'

module.exports = {
  up: (queryInterface, Sequelize) =>
  {

    return queryInterface.bulkInsert('Tickets', [
      {
        type: 'One Way',
        startLocation: 'Pleasantville',
        endDestination: 'Hoboken',
        travelTime: 45,
        price: 13.50,
        tax: 2.55,
        donation: true,
        busId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'One Way',
        startLocation: 'Lyndhurst',
        endDestination: 'Blackwood',
        travelTime: 50,
        price: 12.50,
        tax: 2.40,
        donation: false,
        busId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})

  },

  down: (queryInterface, Sequelize) =>
  {

    return queryInterface.bulkDelete('Tickets', null, {})

  }
}
