'use strict';
module.exports = (sequelize, DataTypes) => {
  const Route = sequelize.define('Route', {
    startLocation: DataTypes.STRING,
    endDestination: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});
  Route.associate = function(models) {
    // not certain this is how multiple associations go here. also, does the onDelete need to go here?
    Route.hasMany(models.Stop, {
      foreignKey: 'route_id'
    })
    Route.hasMany(models.Bus, {
      foreignKey: 'route_id'
    })
  };
  return Route;
};