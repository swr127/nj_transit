'use strict'
module.exports = (sequelize, DataTypes) =>
{
  const Ticket = sequelize.define('Ticket', {
    type: DataTypes.STRING,
    startLocation: DataTypes.STRING,
    endDestination: DataTypes.STRING,
    travelTime: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    tax: DataTypes.FLOAT,
    donation: DataTypes.BOOLEAN,
    busId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Bus',
        key: 'id',
        as: 'busId'
      }
    }
  }, {})
  Ticket.associate = function (models)
  {
    Ticket.belongsTo(models.Bus, {
      foreignKey: 'busId'
    })
  }
  return Ticket
}