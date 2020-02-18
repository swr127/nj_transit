'use strict'
const faker = require('faker')

const buses = [...Array(5)].map((bus) => (
    {
        departureTime: faker.date.between('2020-02-20', '2020-02-20'), // Random date in the future 
        arrivalTime: faker.date.between('2020-02-20', '2020-02-20'), // Random date in the future
        platform: faker.random.number(10), // equals between 0 and 9
        status: faker.random.arrayElement(['Good', 'Delay', 'Cancelled']), // equals good, delay or cancelled
        routeId: faker.random.number({ min: 1, max: 2 }), // equal either 1 or 2 (since we only have two routes)
        createdAt: new Date(),
        updatedAt: new Date()
    }
))

module.exports = {
    up: (queryInterface, Sequelize) =>
    {
        return queryInterface.bulkInsert('Buses', buses, {})
    },

    down: (queryInterface, Sequelize) =>
    {
        return queryInterface.bulkDelete('Buses', null, {})
    }
}
