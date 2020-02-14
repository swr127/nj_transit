# Project 3 Overview

## Project Description

Describe your project, and what it is being created for, here in non-technical terms. Include the names of everyone on your team and any designated roles.

## Wireframes

Display the mockups for your project as designed by your UX team

## MVP

Carefully decide what to place into your MVP as the client will expect this functionality upon project completion 

#### MVP EXAMPLE:
- User can be create a profile and post information
- User profiles are indexed and searchable
- User profile information can be updated and deleted

## Post-MVP

Brainstorm additional functionality and cool ideas that you would like to include in your app once MVP has been reached

#### POST-MVP EXAMPLE:

- User can create a profilec account w/ user auth
- User can "like" other User profiles
- Account passwords can be reset by email

## ERD Diagram

Render a diagram of your database showing how your tables relate to each other, what their specific attributes will be, as well as their expected datatypes

## Endpoints

List the backend routes you expect to utilize with a description of their functionality, and include at least one example of sample JSON to be returned

#### ENDPOINTS EXAMPLE:

- GET `/api/users`
	- Index route returning an array of all Users and nested 'Likes'
- GET `/api/users/:id`
	- Show route for a user requested by ID
- POST `/api/users`
	- Create route for a new user

Sample JSON from GET `/api/users`

  ```
  [
    {
      "name": "Erinn",
      "email": "erinn@erinn.erinn",
      "likes": [
        {
          "name": "Frank"
        }
      ]
    },
    {
      "name": "Frank",
      "email": "frank@erinn.erinn",
      "likes": [
        {
          "name": "Erinn"
        }
      ]
    }
  ]
  ```

## React Component Hierarchy

Render your component hierarchy here

## Components

Breakdown the initial logic defined in the previous sections into stateful and stateless components

| Component | Description | 
| --- | :--- |
| App | This component will render the Header, Footer and Main Routes. It will be a class component that uses state to store user info. |
| Profile | This class component will serve as a route for a logged in user's profile, and will track state for user "likes."  |
| Header | This functional component will house a nav bar.  | 
| Footer | This functional component will render basic footer info. |

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
