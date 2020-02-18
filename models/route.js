'use strict';
module.exports = (sequelize, DataTypes) => {
  const Route = sequelize.define('Route', {
    startLocation: DataTypes.STRING,
    endDestination: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});
  Route.associate = function(models) {
    Route.hasMany(models.Stop, {
      foreignKey: 'routeId',
      onDelete: 'CASCADE'
    })
    Route.hasMany(models.Bus, {
      foreignKey: 'routeId',
      onDelete: 'CASCADE'
    })
  };
  return Route;
};