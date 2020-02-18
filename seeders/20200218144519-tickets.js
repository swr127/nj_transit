'use strict';

const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Tickets', [{
        type: 'One Way',
        startLocation: 'Stop 1',
        endDestination: 'Stop 3',
        travelTime: faker.date.between('2020-02-20', '2020-02-20'),
        price: faker.finance.amount(5.00, 15.00, 2),
        tax: faker.finance.amount(1.00, 5.00, 2),
        donation: false,
        busId: faker.random.number(5),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'One Way',
        startLocation: 'Stop 6',
        endDestination: 'Stop 8',
        travelTime: faker.date.between('2020-02-20', '2020-02-20'),
        price: faker.finance.amount(5.00, 15.00, 2),
        tax: faker.finance.amount(1.00, 5.00, 2),
        donation: true,
        busId: faker.random.number(5),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Round Trip',
        startLocation: 'Stop 1',
        endDestination: 'Stop 5',
        travelTime: faker.date.between('2020-02-20', '2020-02-20'),
        price: faker.finance.amount(5.00, 15.00, 2),
        tax: faker.finance.amount(1.00, 5.00, 2),
        donation: true,
        busId: faker.random.number(5),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'One Way',
        startLocation: 'Stop 1',
        endDestination: 'Stop 3',
        travelTime: faker.date.between('2020-02-20', '2020-02-20'),
        price: faker.finance.amount(5.00, 15.00, 2),
        tax: faker.finance.amount(1.00, 5.00, 2),
        donation: true,
        busId: faker.random.number(5),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Round Trip',
        startLocation: 'Stop 2',
        endDestination: 'Stop 3',
        travelTime: faker.date.between('2020-02-20', '2020-02-20'),
        price: faker.finance.amount(5.00, 15.00, 2),
        tax: faker.finance.amount(1.00, 5.00, 2),
        donation: false,
        busId: faker.random.number(5),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'One Way',
        startLocation: 'Stop 3',
        endDestination: 'Stop 4',
        travelTime: faker.date.between('2020-02-20', '2020-02-20'),
        price: faker.finance.amount(5.00, 15.00, 2),
        tax: faker.finance.amount(1.00, 5.00, 2),
        donation: false,
        busId: faker.random.number(5),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Round Trip',
        startLocation: 'Stop 7',
        endDestination: 'Stop 9',
        travelTime: faker.date.between('2020-02-20', '2020-02-20'),
        price: faker.finance.amount(5.00, 15.00, 2),
        tax: faker.finance.amount(1.00, 5.00, 2),
        donation: true,
        busId: faker.random.number(5),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'One Way',
        startLocation: 'Stop 1',
        endDestination: 'Stop 5',
        travelTime: faker.date.between('2020-02-20', '2020-02-20'),
        price: faker.finance.amount(5.00, 15.00, 2),
        tax: faker.finance.amount(1.00, 5.00, 2),
        donation: false,
        busId: faker.random.number(5),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'One Way',
        startLocation: 'Stop 8',
        endDestination: 'Stop 10',
        travelTime: faker.date.between('2020-02-20', '2020-02-20'),
        price: faker.finance.amount(5.00, 15.00, 2),
        tax: faker.finance.amount(1.00, 5.00, 2),
        donation: true,
        busId: faker.random.number(5),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Round Trip',
        startLocation: 'Stop 6',
        endDestination: 'Stop 10',
        travelTime: faker.date.between('2020-02-20', '2020-02-20'),
        price: faker.finance.amount(5.00, 15.00, 2),
        tax: faker.finance.amount(1.00, 5.00, 2),
        donation: false,
        busId: faker.random.number(5),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'One Way',
        startLocation: 'Stop 3',
        endDestination: 'Stop 4',
        travelTime: faker.date.between('2020-02-20', '2020-02-20'),
        price: faker.finance.amount(5.00, 15.00, 2),
        tax: faker.finance.amount(1.00, 5.00, 2),
        donation: true,
        busId: faker.random.number(5),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Tickets', null, {});

  }
};
