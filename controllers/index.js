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

const getTicketById = async (req, res) =>
{
    try
    {
        const { id } = req.params
        const ticket = await Ticket.findOne({
            where: { id: id }
        })
        if (ticket)
        {
            return res.status(200).json({ ticket })
        }
        return res.status(404).send('Ticket does not exist!')
    } catch (error)
    {
        return res.status(500).send(error.message)
    }
}

const createTicket = async (req, res) =>
{
    try
    {
        const ticket = await Ticket.create(req.body)
        return res.status(201).json({ ticket })
    } catch (error)
    {
        return res.status(500).send(error.message)
    }
}

const updateTicket = async (req, res) =>
{
    try
    {
        const { id } = req.params
        const updated = await Ticket.update(req.body, {
            where: { id: id }
        })
        if (updated)
        {
            const updatedTicket = await Ticket.findOne({
                where: { id: id }
            })
            return res.status(201).json({ updatedTicket })
        }
        throw new Error('Ticket not found!')
    } catch (error)
    {
        return res.status(500).send(error.message)
    }
}

const deleteTicket = async (req, res) =>
{
    try
    {
        const { id } = req.params
        const deleted = await Ticket.destroy({
            where: { id: id }
        })
        if (deleted)
        {
            return res.status(204).send('Ticket successfully deleted!')
        }
        throw new Error('Ticket not found!')
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

const getAllBusesWithRoutes = async (req, res) =>
{
    try
    {
        const buses = await Bus.findAll({
            include: [
                {
                    model: Route
                }
            ],
            order: [
                ['departureTime', 'ASC'],
                ['routeId', 'ASC']
            ]
        })
        return res.status(200).json({ buses })
    } catch (error)
    {
        return res.status(500).send(error.message)
    }
}

const getAllRoutesWithBuses = async (req, res) =>
{
    try
    {
        const routes = await Route.findAll({
            include: [
                {
                    model: Bus
                }
            ]
        })
        return res.status(200).json({ routes })
    } catch (error)
    {
        return res.status(500).send(error.message)
    }
}

const getRouteById = async (rec, res) =>
{
    try
    {
        const route = await Route.findByPk(rec.params.id)
        return res.status(200).json({ route })
    } catch (error)
    {
        return res.status(500).send(error.message)
    }
}

const getBusesByRouteId = async (rec, res) =>
{
    try
    {
        const route = await Route.findByPk(rec.params.id, {
            include: [
                { model: Bus }
            ]
        })
        return res.status(200).json({ route })
    } catch (error)
    {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllTickets,
    getTicketById,
    createTicket,
    updateTicket,
    getAllRoutes,
    getAllStops,
    getAllBuses,
    getBusById,
    createBus,
    updateBus,
    deleteBus,
    routeWithStatus,
    getAllRoutesWithBuses,
    getAllBusesWithRoutes,
    getRouteById,
    getBusesByRouteId,
    deleteTicket
}