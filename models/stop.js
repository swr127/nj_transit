'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stop = sequelize.define('Stop', {
    name: DataTypes.STRING,
    routeId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Route',
        key: 'id',
        as: 'routeId'
      }
    }
  }, {});
  Stop.associate = function(models) {
    Stop.belongsTo(models.Route, {
      foreignKey: 'routeId'
    })
  };
  return Stop;
};