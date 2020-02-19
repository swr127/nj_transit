const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

// HIGH PRIORITY CRUD 
router.get('/', (req, res) => res.send('Welcome to NJ Transit!'))
router.get('/api/tickets', controllers.getAllTickets)
router.get('/api/routes', controllers.getAllRoutes)
router.get('/api/stops', controllers.getAllStops)
router.get('/api/buses', controllers.getAllBuses)
router.get('/api/buses/:id', controllers.getBusById)
router.post('/api/buses', controllers.createBus)
router.put('/api/buses/:id', controllers.updateBus)
router.delete('/api/buses/:id', controllers.deleteBus)

// LOW PRIORITY CRUD
router.get('/api/routes/status', controllers.routeWithStatus)
router.get('/api/tickets/:id', controllers.getTicketById)
router.post('/api/tickets', controllers.createTicket)
router.put('/api/tickets/:id', controllers.updateTicket)
// router.delete('/api/tickets/:id', controllers.deleteTicket)
// router.get('/api/routes/:id', controllers.getRouteById)
// router.post('/api/routes', controllers.createRoute)
// router.put('/api/routes/:id', controllers.updateRoute)
// router.delete('/api/routes/:id', controllers.deleteRoute)
// router.get('/api/stops/:id', controllers.getStopById)
// router.post('/api/stops', controllers.createStop)
// router.put('/api/stops/:id', controllers.updateStop)
// router.delete('/api/stops/:id', controllers.deleteStop)

router.get('/api/routes/withBuses', controllers.getAllRoutesWithBuses)
router.get('/api/buses/with/routes', controllers.getAllBusesWithRoutes)

module.exports = router

