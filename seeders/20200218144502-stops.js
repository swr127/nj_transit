'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Stops', [
      {
        name: 'Bus Stop 1',
        routeId: 1, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bus Stop 2',
        routeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bus Stop 3',
        routeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bus Stop 4',
        routeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bus Stop 5',
        routeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bus Stop 6',
        routeId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bus Stop 7',
        routeId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bus Stop 8',
        routeId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bus Stop 9',
        routeId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bus Stop 10',
        routeId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Stops', null, {});
  }
};