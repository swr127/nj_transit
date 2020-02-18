const { Ticket } = require("../models")
const { Route } = require("../models")
const { Stop } = require("../models")
const { Bus, sequelize } = require("../models")

const getAllTickets = async (req, res) =>
{
    try
    {
        const tickets = await Ticket.findAll()
        return res.status(200).json({ tickets })
    } catch (error)
    {
        return res.status(500).send(error.message)
    }
}

const getAllRoutes = async (req, res) =>
{
    try
    {
        const routes = await Route.findAll()
        return res.status(200).json({ routes })
    } catch (error)
    {
        return res.status(500).send(error.message)
    }
}

const getAllStops = async (req, res) =>
{
    try
    {
        const stops = await Stop.findAll()
        return res.status(200).json({ stops })
    } catch (error)
    {
        return res.status(500).send(error.message)
    }
}

const getAllBuses = async (req, res) =>
{
    try
    {
        const buses = await Bus.findAll()
        return res.status(200).json({ buses })
    } catch (error)
    {
        return res.status(500).send(error.message)
    }
}

const getBusById = async (req, res) =>
{
    try
    {
        const { id } = req.params
        const bus = await Bus.findOne({
            where: { id: id }
        })
        if (bus)
        {
            return res.status(200).json({ bus })
        }
        return res.status(404).send('Bus does not exist!')
    } catch (error)
    {
        return res.status(500).send(error.message)
    }
}

const createBus = async (req, res) =>
{
    try
    {
        const bus = await Bus.create(req.body)
        return res.status(201).json({ bus })
    } catch (error)
    {
        return res.status(500).send(error.message)
    }
}

const updateBus = async (req, res) =>
{
    try
    {
        const { id } = req.params
        const updated = await Bus.update(req.body, {
            where: { id: id }
        })
        if (updated)
        {
            const updatedBus = await Bus.findOne({
                where: { id: id }
            })
            return res.status(201).json({ updatedBus })
        }
        throw new Error('Bus not found!')
    } catch (error)
    {
        return res.status(500).send(error.message)
    }
}

const deleteBus = async (req, res) =>
{
    try
    {
        const { id } = req.params
        const deleted = await Bus.destroy({
            where: { id: id }
        })
        if (deleted)
        {
            return res.status(204).send('Bus successfully deleted!')
        }
        throw new Error('Bus not found!')
    } catch (error)
    {
        return res.status(500).send(error.message)
    }
}

const routeWithStatus = async (req, res) =>
{
    try
    {
        const routeStatus = await Bus.findAll({
            attributes: ['routeId', [sequelize.fn('min', sequelize.col('status')), 'status']],
            group: ['routeId'],
            order: ['routeId']
        })

        return res.status(200).json({ routeStatus })
        return res.status(404).send('Error')
    } catch (error)
    {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllTickets,
    getAllRoutes,
    getAllStops,
    getAllBuses,
    getBusById,
    createBus,
    updateBus,
    deleteBus,
    routeWithStatus
}