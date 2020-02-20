'use strict'

module.exports = {
  up: (queryInterface, Sequelize) =>
  {
    return queryInterface.bulkInsert('Routes', [

      { // Route 1
        startLocation: 'West Caldwell',
        endDestination: 'Butler',
        name: 'Atlantic City',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { // Route 2
        startLocation: 'Millstone',
        endDestination: 'Blackwood',
        name: 'Bergen County',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { // Route 3
        startLocation: 'Laurel',
        endDestination: 'Matawan',
        name: 'Montclair-Boonton',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { // Route 4
        startLocation: 'Woodstown',
        endDestination: 'Red Bank',
        name: 'Morris & Essex',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { // Route 5
        startLocation: 'Bernardsville',
        endDestination: 'High Bridge',
        name: 'North Jersey',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { // Route 6
        startLocation: 'Harrington',
        endDestination: 'Caldwell',
        name: 'Northeast Corridor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { // Route 7
        startLocation: 'Heathcote',
        endDestination: 'Orange',
        name: 'Pascack Valley',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { // Route 8
        startLocation: 'Paterson',
        endDestination: 'Crestwood',
        name: 'Raritan Valley',
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {})
  },

  down: (queryInterface, Sequelize) =>
  {
    return queryInterface.bulkDelete('Routes', null, {})
  }
}