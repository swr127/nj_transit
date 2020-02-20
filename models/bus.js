'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bus = sequelize.define('Bus', {
    departureTime: DataTypes.DATE,
    arrivalTime: DataTypes.DATE,
    platform: DataTypes.INTEGER,
    status: DataTypes.STRING,
    busNumber: DataTypes.INTEGER,
    routeId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Route',
        key: 'id',
        as: 'routeId'
      }
    }  
  }, {});
  Bus.associate = function(models) {
    Bus.belongsTo(models.Route,{
      foreignKey: 'routeId',
      // does the onDelete go here, or in bus? our homeworks have put it both places
    }),

    Bus.hasMany(models.Ticket, {
      foreignKey: 'busId',
      onDelete: 'CASCADE'
    })
  };
  return Bus;
};