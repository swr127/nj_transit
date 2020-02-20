'use strict'
module.exports = {
  up: (queryInterface, Sequelize) =>
  {
    return queryInterface.bulkInsert('Stops', [
      {
        name: 'West Caldwell',
        routeId: 1,
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pleasantville',
        routeId: 1,
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Island Heights',
        routeId: 1,
        order: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Deal',
        routeId: 1,
        order: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hoboken',
        routeId: 1,
        order: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'West Milford',
        routeId: 1,
        order: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Springfield',
        routeId: 1,
        order: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Barnegat',
        routeId: 1,
        order: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'River Edge',
        routeId: 1,
        order: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Butler',
        routeId: 1,
        order: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Millstone',
        routeId: 2,
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bay Head',
        routeId: 2,
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lyndhurst',
        routeId: 2,
        order: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'West-Lake',
        routeId: 2,
        order: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Highlands',
        routeId: 2,
        order: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hackensack',
        routeId: 2,
        order: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Audubon',
        routeId: 2,
        order: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Merchantville',
        routeId: 2,
        order: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Margate City',
        routeId: 2,
        order: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Blackwood',
        routeId: 2,
        order: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Laurel Springs',
        routeId: 3,
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Helmetta',
        routeId: 3,
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Clinton',
        routeId: 3,
        order: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Manville',
        routeId: 3,
        order: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cape May',
        routeId: 3,
        order: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Seaside Park',
        routeId: 3,
        order: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fairview',
        routeId: 3,
        order: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'North Wildwood',
        routeId: 3,
        order: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Waldwick',
        routeId: 3,
        order: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Matawan',
        routeId: 3,
        order: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Woodstown',
        routeId: 4,
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Victory',
        routeId: 4,
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ramsey',
        routeId: 4,
        order: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Keyport',
        routeId: 4,
        order: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Westwood',
        routeId: 4,
        order: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Leonia',
        routeId: 4,
        order: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Norwood',
        routeId: 4,
        order: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Trenton',
        routeId: 4,
        order: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gibbsboro',
        routeId: 4,
        order: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Red Bank',
        routeId: 4,
        order: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bernardsville',
        routeId: 5,
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Strathmere',
        routeId: 5,
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cherry Hill',
        routeId: 5,
        order: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Holiday Heights',
        routeId: 5,
        order: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ship Bottom',
        routeId: 5,
        order: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Belmar',
        routeId: 5,
        order: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kinnelon',
        routeId: 5,
        order: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Beckett',
        routeId: 5,
        order: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fort Lee',
        routeId: 5,
        order: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'High Bridge',
        routeId: 5,
        order: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Harrington',
        routeId: 6,
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hackettstown',
        routeId: 6,
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Woodlynne',
        routeId: 6,
        order: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ramblewood',
        routeId: 6,
        order: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'New Providence',
        routeId: 6,
        order: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lavallette',
        routeId: 6,
        order: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lincroft',
        routeId: 6,
        order: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Folsom',
        routeId: 6,
        order: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'South Belmar',
        routeId: 6,
        order: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Caldwell',
        routeId: 6,
        order: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Heathcote',
        routeId: 7,
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Wanamassa',
        routeId: 7,
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Highland Lake',
        routeId: 7,
        order: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dayton',
        routeId: 7,
        order: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Florence-Roebling',
        routeId: 7,
        order: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lincoln Park',
        routeId: 7,
        order: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bloomfield',
        routeId: 7,
        order: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'North Cape May',
        routeId: 7,
        order: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Andover',
        routeId: 7,
        order: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Orange',
        routeId: 7,
        order: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Paterson',
        routeId: 8,
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Twin Rivers',
        routeId: 8,
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'North Caldwell',
        routeId: 8,
        order: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Leisure',
        routeId: 8,
        order: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Annandale',
        routeId: 8,
        order: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Moorestown',
        routeId: 8,
        order: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vista',
        routeId: 8,
        order: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dunellen',
        routeId: 8,
        order: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Atlantic',
        routeId: 8,
        order: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Crestwood',
        routeId: 8,
        order: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {})
  },
  down: (queryInterface, Sequelize) =>
  {
    return queryInterface.bulkDelete('Stops', null, {})
  }
}