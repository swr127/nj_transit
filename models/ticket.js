'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    type: DataTypes.STRING,
    startLocation: DataTypes.STRING,
    destination: DataTypes.STRING,
    travelTime: DataTypes.DATE,
    price: DataTypes.FLOAT,
    tax: DataTypes.FLOAT,
    donation: DataTypes.BOOLEAN,
    bus_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Bus',
        key: 'id',
        as: 'bus_id'
      }
    }
  }, {});
  Ticket.associate = function(models) {
    Ticket.belongsTo(models.Bus, {
      foreignKey: 'bus_id',
      // does the onDelete go here, or in bus? our homeworks have put it both places
      onDelete: 'CASCADE'
    })
  };
  return Ticket;
};