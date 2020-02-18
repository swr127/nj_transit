const { Ticket } = require("./models")
const { Route } = require("./models")
const { Stop } = require("./models")
const { Bus, sequelize } = require("./models")

const routeWithStatus = async () =>
{
    try
    {
        const query1 = await Bus.findAll()
        console.log(JSON.stringify(query1, null, 2))
        const query2 = await Bus.findAll({
            attributes: ['routeId', [sequelize.fn('min', sequelize.col('status')), 'status']],
            group: ['routeId'],
            order: ['routeId']
        })
        console.log(JSON.stringify(query2, null, 2))
    } catch (error)
    {
        console.log(error)
    }
}

routeWithStatus()