<a href="https://imgur.com/EabkOcK"><img src="https://i.imgur.com/EabkOcK.png" title="source: imgur.com" /></a>

# NJ Transit Overview

## Project Description

This **NJ Transit** web application is a redesigned version of the real NJ Transit mobile application. We are creating this for the purpose of presenting a better user experience.

The Team:
- Samantha Russell, Git Csar
- Trevor Smith-Holbourn, SCRUM Leader
- Tara Solbrig, CSS Extraordinaire

Link: https://njtransitmonkeys.herokuapp.com/

## Wireframes

- Zeplin: https://app.zeplin.io/project/5e42d44088671e0c4bdb325f/dashboard
- InVision: https://winnie.invisionapp.com/console/NJ-Transit-ck5bnof3d198601blb1c5b4mj/ck5bnofkv198801bl49en6yir/play#project_console

## MVP

- The app will have full CRUD functionality (back end & front end) for the NJ Transit Bus Line
	- User can plan a trip (buy tickets) for the Bus
	- User can view schedule for the Bus
	- User can view the service status for the Bus
-  The app will use CSS that matches the UX wireframes

## Post-MVP

- The app will replicate the MVP functionality for the Rail and LightRail 
- Create a user profile page with user authentication
- Update our class components to hooks 

## ERD Diagram

<a href="https://imgur.com/iCoOo6S"><img src="https://i.imgur.com/iCoOo6S.png" title="source: imgur.com" /></a>

## Endpoints

### High Priority 
- GET `/api/tickets`
	- Show all tickets
- GET `/api/routes`
	- Show all routes
- GET `/api/stops`
	- Show all stops
- GET `/api/buses`
	- Show all buses
- GET `/api/buses/:id`
	- Show a bus requested by ID
- POST `/api/buses`
	- Create a new bus to add to list of buses
- PUT `/api/buses/:id`
	- Update a bus by ID 
- DELETE `/api/buses/:id`
	- Delete a bus by ID

### Low Priority 
- GET `/api/tickets/:id`
	- Show a ticket requested by ID
- POST `/api/tickets/`
	- Create a new ticket and add to list of tickets
- PUT `/api/tickets/:id`
	- Update a ticket by ID 
- DELETE `/api/tickets/:id`
	- Delete a ticket by ID
- GET `/api/routes/:id`
	- Show a route requested by ID
- POST `/api/routes`
	- Create a new route to add to list of routes
- PUT `/api/routes/:id`
	- Update a route by ID 
- DELETE `/api/routes/:id`
	- Delete a route by ID
- GET `/api/stops`
	- Show all stops
- POST `/api/stops`
	- Create a new stop to add to list of stops
- PUT `/api/stops/:id`
	- Update a stop by ID 
- DELETE `/api/stops/:id`
	- Delete a stop by ID

Sample JSON from GET `/api/tickets`

  ```
  [
    {
      "id: 1, 
      "type": "One Way",
      "start-location": "New York Penn",
      "end-destination": "Trenton",
      "travel-time": "100 minutes",
      "price": 16.75,
      "tax": 1.75,
      "donation": Y
    },
      "id": 2,
      "type": "Weekly",
      "start-location": "Newark Penn",
      "end-destination": "Hamilton",
      "travel-time": "80 minutes",
      "price": 14.75,
      "tax": 1.25,
      "donation": N
    }
  ]
  ```

## React Component Hierarchy

<a href="https://imgur.com/QS9lhhB"><img src="https://i.imgur.com/QS9lhhB.png" title="source: imgur.com" /></a>

## Components

| Component | Description | 
| --- | :--- |
| App | This functional component will house all of our routes. *Stateless* |
| Header | This functional component will render basic header info. *Stateless*  | 
| Footer | This functional component will render basic footer info. *Stateless*  |
| Layout | This functional component will create a standardized layout for all of our components within the Routes folder. *Stateless*  |
| Service Status | This class component will house the service status icons for all of the buses. *Stateful* |
| Home | This functional component will render information for the homepage. *Stateless* |
| Menu | This functional component will render information for the bus menu. *Stateless*  |
| Plan a Trip | This class component will render information for buying a ticket. *Stateful* |
| Ticket | This class component will render a confirmation message for a purchased ticket. *Stateful* |
| Schedule | This class component will render a schedule for all of the bus routes. *Stateful* |
| Service | This class component will render the service status for all of the buses. *Stateful* |

## Priority Matrix

<a href="https://imgur.com/AxkQ9Za"><img src="https://i.imgur.com/AxkQ9Za.png" title="source: imgur.com" /></a>

## Timeframes

| Component | Estimated Time | Actual Time |
| --- | :---: | :---: |
| Set Up App File Structure | 4hrs | 2hrs |
| Write Fake JSON Data for Testing | 6hrs | 2hrs |
| Set Up Sequelize Models | 4hrs | 2hrs |
| Set Up Sequelize Migrations | 4hrs | 2hrs |
| Seed Database | 5hrs | 6hrs |
| Create Back-End Controllers | 14hrs | 2hrs |
| Create Back-End Express Router | 8hrs | 2hrs |
| Test Back-End CRUD Functionality | 8hrs | 2hrs |
| Create Front-End React Router | 4hrs | 8hrs |
| Create Front-End Shared Components | 4hrs | 14hrs |
| Create Front-End Routes Components | 8hrs | 14hrs |
| Test Front-End CRUD Functionality | 8hrs | 8hrs |
| CSS Styling | 25hrs | 26hrs |
| Total | 102hrs | 90hrs |

## Additional Libraries
`react-router-dom`, `axios`, `nodemon`, `morgan`, `sequelize`, `pg`, `cors`, `express`

## Expected Issues
We expect to run into issues with our stops table and platforms data point. At this time, we're not sure how we are going to tie our platforms with our stops, so we may create fake data on the front-end as a work around. 

## Issues and Resolutions
No major issues at this time. 

## Code Snippet

### Tara's Snippet:
I was able to use grid to style this block to look just like the prototype. I am especially proud of the column in the middle with the circles and the connecting line. 

```
<div className='stops'>
	<div className='blue-line'></div>

	<div className='c1 r1'><h5 className='time'>7:15 AM</h5></div>
	<div className='c2 r1'></div>
	<div className='c3 r1'><h4 className='stop-name'>Bus Stop 1</h4></div>

	<div className='c1 r2'><h5 className='time'></h5></div>
	<div className='c2 r2'></div>
	<div className='c3 r2'><p className='click'>(Click to see more)</p></div>

	<div className='c1 r3'><h5 className='time'>8:05 AM</h5></div>
	<div className='c2 r3'></div>
	<div className='c3 r3'><h4 className='stop-name'>Bus Stop 3</h4></div>

	<div className='c1 r4'><h5 className='time'>8:20 AM</h5></div>
	<div className='c2 r4'></div>
	<div className='c3 r4'><h4 className='stop-name'>Bus Stop 4</h4></div>
</div>
```
```
.stops {
  display: inline-grid;
  width: 100%;
  margin-top: 16px;
  grid-template-columns: 25px 60px 10px 10px 4px 10px 8px auto;
  grid-template-rows: 49px 49px 49px 49px;
}

.blue-line {
  grid-column: 5;
  grid-row: 1 / 5;
  width: 4px;
  height: 160px;
  margin-top: 15px;
  background-color: var(--dark-slate-blue);
  z-index: 1;
}

.c1 {
  grid-column: 2;
}

.time {
  width: 60px;
  height: 17px;
  font-family: Arial;
  font-size: 16px;
  font-weight: normal;
  text-align: center;
  color: var(--dark-slate-blue);
  margin: 0;
  padding: 16px 0;
}

.c2 {
  grid-column: 4 / 7;
  height: 16px;
  width: 16px;
  border: 4px solid var(--dark-slate-blue);
  border-radius: 100%;
  background-color: var(--white);
  z-index: 2;
  margin: 12.5px 0;
}

.c3 {
  grid-column: 8;
}

.stop-name {
  font-family: Arial;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  text-align: left;
  color: var(--dark-slate-blue);
  margin: 0;
  padding: 16px 0;
}

.click {
  font-family: Arial;
  font-size: 16px;
  font-weight: normal;
  font-style: italic;
  text-align: left;
  color: var(--brown-grey);
  margin: 0;
  padding: 16px 0;
}

.r1 {
  grid-row: 1;
}

.r2 {
  grid-row: 2;
}

.r3 {
  grid-row: 3;
}

.r4 {
  grid-row: 4;
}
```

### Samantha's Snippet:
I was able to convert back end data into images on the front-end using conditional rendering. 

```
getStatusImg(status) {
        if (status == 'Cancelled' || status == 'Delay') {
            return (
                <img className='bus-list-status' src={badService} alt='Service Status'/>
            )
        } else {
            return (
                <img className='bus-list-status' src={goodService} alt='Service Status'/>
            )
        }
    }

render() {
        let bus
        console.log(this.props)

        if (this.props.routeId) {
            bus = this.props.routeId.data.route.Buses.map((bus, id) => (
                <div className='bus-list-list' key={id}>
                    <div className='bus-list-box'>
                        <div className='bus-list-number'>Bus #{bus.busNumber} </div>
                        <div className='bus-list-middle'>
                            <img className='bus-list-img' src={busLine} alt='Bus Line'/>
                            <div className='bus-list-platform'>{bus.platform}</div>
                            { this.getStatusImg(bus.status) }
                        </div>
                        <div className='bus-list-times'>
                            <span className='bust-start-time'>{moment(bus.departureTime).format('h:mm a')}</span>
                            <span className='bus-end-time'>{moment(bus.arrivalTime).format('h:mm a')}</span>
                        </div>
                    </div>
                </div>
            ))     
        }
```

### Trevor's Snippet:
I wanted to show each route status as indicated by the worst case for each route so that a route showing good status means all buses have 'on time' status. If there is at least one delayed bus the whole route is summerized as delayed and if at least one cancelled bus the whole route is summerized as cancelled.
```
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
```

## Change Log
- Added additional shared components for styling 
- Converted App.js from a functional to class component to hold state
- Created an admin route to hold front-end CRUD functionality 
