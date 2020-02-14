<a href="https://imgur.com/EabkOcK"><img src="https://i.imgur.com/EabkOcK.png" title="source: imgur.com" /></a>

# NJ Transit Overview

## Project Description

This **NJ Transit** web application is a redesigned version of the real NJ Transit mobile application. We are creating this for the purpose of presenting a better user experience.

The Team:
- Samantha Russell, Git Csar
- Trevor Holbourn, SCRUM Leader
- Tara Solbrig, CSS Extraordinaire

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

- GET `/api/tickets`
	- Show all tickets
- GET `/api/tickets/:id`
	- Show a ticket requested by ID
- POST `/api/tickets/`
	- Create a new ticket and add to list of tickets
- PUT `/api/tickets/:id`
	- Update a ticket by ID 
- DELETE `/api/tickets/:id`
	- Delete a ticket by ID
- GET `/api/routes`
	- Show all routes
- GET `/api/routes/:id`
	- Show a route requested by ID
- POST `/api/routes`
	- Create a new route to add to list of routes
- PUT `/api/routes/:id`
	- Update a route by ID 
- DELETE `/api/routes/:id`
	- Delete a route by ID
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
- GET `/api/stops`
	- Show all stops

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

Render your project priority matrix here

## Timeframes

Estimate the amount of time your team expects to spend on each area of your app

| Component | Estimated Time | Actual Time |
| --- | :---: | :---: |
| Sequelize Queries | 3hrs | 3.5hrs |
| Server | 4hrs | 2.5hrs |
| Front-End Routing | 2.5hrs | 5hrs |
| Total | 9.5hrs | 11hrs |

_Be sure to document the actual time spent as you progress_

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project, such as `react-router-dom`, `axios`, `nodemon` and others

## Expected Issues
List any major issues you expect to face and how you plan to handle them

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolutions

#### ISSUES AND RESOLUTIONS EXAMPLE:
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log

Update as neccessary with any changes or directional adjustments made throughout the project week
