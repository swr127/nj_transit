'use strict'

module.exports = {
    up: (queryInterface, Sequelize) =>
    {
        return queryInterface.bulkInsert('Buses', [
            {
                departureTime: '2020-02-21 12:15:00-05',
                arrivalTime: '2020-02-21 13:20:00-05',
                platform: 2,
                status: 'Cancelled', // equals On Time, Delayed or Cancelled
                routeId: 1,
                busNumber: 3801,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                departureTime: '2020-02-21 12:17:00-05',
                arrivalTime: '2020-02-21 13:29:00-05',
                platform: 2,
                status: 'Delayed', // equals On Time, Delayed or Cancelled
                routeId: 2,
                busNumber: 4003,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                departureTime: '2020-02-21 13:17:00-05',
                arrivalTime: '2020-02-21 14:29:00-05',
                platform: 2,
                status: 'Delayed', // equals On Time, Delayed or Cancelled
                routeId: 2,
                busNumber: 3835,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                departureTime: '2020-02-21 14:17:00-05',
                arrivalTime: '2020-02-21 15:29:00-05',
                platform: 2,
                status: 'On Time', // equals On Time, Delayed or Cancelled
                routeId: 2,
                busNumber: 3823,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                departureTime: '2020-02-21 15:17:00-05',
                arrivalTime: '2020-02-21 16:29:00-05',
                platform: 2,
                status: 'On Time', // equals On Time, Delayed or Cancelled
                routeId: 2,
                busNumber: 3845,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                departureTime: '2020-02-21 12:17:00-05',
                arrivalTime: '2020-02-21 13:29:00-05',
                platform: 2,
                status: 'On Time', // equals On Time, Delayed or Cancelled
                routeId: 2,
                busNumber: 3901,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                departureTime: '2020-02-21 13:15:00-05',
                arrivalTime: '2020-02-21 14:20:00-05',
                platform: 2,
                status: 'On Time', // equals On Time, Delayed or Cancelled
                routeId: 1,
                busNumber: 3878,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                departureTime: '2020-02-21 12:32:00-05',
                arrivalTime: '2020-02-21 13:45:00-05',
                platform: 2,
                status: 'On Time', // equals On Time, Delayed or Cancelled
                routeId: 3,
                busNumber: 3865,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                departureTime: '2020-02-21 13:32:00-05',
                arrivalTime: '2020-02-21 14:45:00-05',
                platform: 2,
                status: 'On Time', // equals On Time, Delayed or Cancelled
                routeId: 3,
                busNumber: 3877,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                departureTime: '2020-02-21 14:32:00-05',
                arrivalTime: '2020-02-21 15:45:00-05',
                platform: 2,
                status: 'On Time', // equals On Time, Delayed or Cancelled
                routeId: 3,
                busNumber: 3823,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                departureTime: '2020-02-21 15:32:00-05',
                arrivalTime: '2020-02-21 16:45:00-05',
                platform: 2,
                status: 'On Time', // equals On Time, Delayed or Cancelled
                routeId: 3,
                busNumber: 3845,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                departureTime: '2020-02-21 16:32:00-05',
                arrivalTime: '2020-02-21 17:45:00-05',
                platform: 2,
                status: 'On Time', // equals On Time, Delayed or Cancelled
                routeId: 3,
                busNumber: 3833,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                departureTime: '2020-02-21 14:15:00-05',
                arrivalTime: '2020-02-21 15:20:00-05',
                platform: 1,
                status: 'On Time', // equals On Time, Delayed or Cancelled
                routeId: 1,
                busNumber: 3876,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                departureTime: '2020-02-21 12:09:00-05',
                arrivalTime: '2020-02-21 13:43:00-05',
                platform: 3,
                status: 'On Time', // equals On Time, Delayed or Cancelled
                routeId: 4,
                busNumber: 3880,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                departureTime: '2020-02-21 13:09:00-05',
                arrivalTime: '2020-02-21 14:43:00-05',
                platform: 3,
                status: 'On Time', // equals On Time, Delayed or Cancelled
                routeId: 4,
                busNumber: 3888,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                departureTime: '2020-02-21 14:09:00-05',
                arrivalTime: '2020-02-21 15:43:00-05',
                platform: 3,
                status: 'On Time', // equals On Time, Delayed or Cancelled
                routeId: 4,
                busNumber: 3703,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                departureTime: '2020-02-21 15:09:00-05',
                arrivalTime: '2020-02-21 16:43:00-05',
                platform: 3,
                status: 'On Time', // equals On Time, Delayed or Cancelled
                routeId: 4,
                busNumber: 3705,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                departureTime: '2020-02-21 15:15:00-05',
                arrivalTime: '2020-02-21 16:20:00-05',
                platform: 2,
                status: 'On Time', // equals On Time, Delayed or Cancelled
                routeId: 1,
                busNumber: 3810,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                departureTime: '2020-02-21 12:09:00-05',
                arrivalTime: '2020-02-21 13:43:00-05',
                platform: 3,
                status: 'On Time', // equals On Time, Delayed or Cancelled
                routeId: 5,
                busNumber: 3727,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                departureTime: '2020-02-21 13:09:00-05',
                arrivalTime: '2020-02-21 14:43:00-05',
                platform: 3,
                status: 'On Time', // equals On Time, Delayed or Cancelled
                routeId: 5,
                busNumber: 3777,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                departureTime: '2020-02-21 14:09:00-05',
                arrivalTime: '2020-02-21 15:43:00-05',
                platform: 3,
                status: 'On Time', // equals On Time, Delayed or Cancelled
                routeId: 5,
                busNumber: 3787,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                departureTime: '2020-02-21 15:09:00-05',
                arrivalTime: '2020-02-21 16:43:00-05',
                platform: 3,
                status: 'On Time', // equals On Time, Delayed or Cancelled
                routeId: 5,
                busNumber: 3838,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                departureTime: '2020-02-21 15:15:00-05',
                arrivalTime: '2020-02-21 16:20:00-05',
                platform: 1,
                status: 'On Time', // equals On Time, Delayed or Cancelled
                routeId: 1,
                busNumber: 3737,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                departureTime: '2020-02-21 12:17:00-05',
                arrivalTime: '2020-02-21 13:01:00-05',
                platform: 7,
                status: 'Cancelled', // equals On Time, Delayed or Cancelled
                routeId: 6,
                busNumber: 3799,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                departureTime: '2020-02-21 13:17:00-05',
                arrivalTime: '2020-02-21 14:01:00-05',
                platform: 2,
                status: 'On Time', // equals On Time, Delayed or Cancelled
                routeId: 6,
                busNumber: 3707,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                departureTime: '2020-02-21 14:17:00-05',
                arrivalTime: '2020-02-21 15:01:00-05',
                platform: 2,
                status: 'On Time', // equals On Time, Delayed or Cancelled
                routeId: 6,
                busNumber: 3700,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                departureTime: '2020-02-21 15:17:00-05',
                arrivalTime: '2020-02-21 16:01:00-05',
                platform: 2,
                status: 'On Time', // equals On Time, Delayed or Cancelled
                routeId: 6,
                busNumber: 3600,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                departureTime: '2020-02-21 12:03:00-05',
                arrivalTime: '2020-02-21 12:57:00-05',
                platform: 5,
                status: 'Delayed', // equals On Time, Delayed or Cancelled
                routeId: 7,
                busNumber: 3795,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                departureTime: '2020-02-21 13:03:00-05',
                arrivalTime: '2020-02-21 13:57:00-05',
                platform: 5,
                status: 'On Time', // equals On Time, Delayed or Cancelled
                routeId: 7,
                busNumber: 3767,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                departureTime: '2020-02-21 14:03:00-05',
                arrivalTime: '2020-02-21 14:57:00-05',
                platform: 5,
                status: 'On Time', // equals On Time, Delayed or Cancelled
                routeId: 7,
                busNumber: 3790,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                departureTime: '2020-02-21 15:03:00-05',
                arrivalTime: '2020-02-21 15:57:00-05',
                platform: 1,
                status: 'On Time', // equals On Time, Delayed or Cancelled
                routeId: 7,
                busNumber: 3868,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                departureTime: '2020-02-21 12:43:00-05',
                arrivalTime: '2020-02-21 13:57:00-05',
                platform: 8,
                status: 'On Time', // equals On Time, Delayed or Cancelled
                routeId: 8,
                busNumber: 3768,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                departureTime: '2020-02-21 13:43:00-05',
                arrivalTime: '2020-02-21 14:57:00-05',
                platform: 8,
                status: 'On Time', // equals On Time, Delayed or Cancelled
                routeId: 8,
                busNumber: 3601,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                departureTime: '2020-02-21 14:43:00-05',
                arrivalTime: '2020-02-21 15:57:00-05',
                platform: 8,
                status: 'On Time', // equals On Time, Delayed or Cancelled
                routeId: 8,
                busNumber: 3699,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                departureTime: '2020-02-21 15:43:00-05',
                arrivalTime: '2020-02-21 16:57:00-05',
                platform: 8,
                status: 'On Time', // equals On Time, Delayed or Cancelled
                routeId: 8,
                busNumber: 4020,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {})
    },

    down: (queryInterface, Sequelize) =>
    {
        return queryInterface.bulkDelete('Buses', null, {})
    }
}
