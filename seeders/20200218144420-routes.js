'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Routes', [{
        startLocation: 'Stop 1',
        endDestination: 'Stop 4',
        name: 'Northeast Corridor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startLocation: 'Stop 6',
        endDestination: 'Stop 10',
        name: 'Main-Bergen County',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Routes', null, {});

  }
};
