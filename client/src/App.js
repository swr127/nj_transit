import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/routes/Home'
import PlanTrip from './components/routes/PlanTrip'
import Service from './components/routes/Service'
import Schedule from './components/routes/Schedule'
import Menu from './components/routes/Menu'
import Ticket from './components/routes/Ticket'
import './App.css'
import apiUrl from './apiConfig'
import Axios from 'axios'
import AdminTickets from './components/routes/AdminTickets'
import AdminTicketDetail from './components/routes/AdminTicketDetail'
import AdminTicketEdit from './components/routes/AdminTicketEdit'

class App extends Component 
{
  constructor(props)
  {
    super(props)

    this.state = {
      from: 'Bus Stop 1',
      to: 'Bus Stop 1',
      selectedType: null,
      route: null
    }
  }

  async getRoute(id)
  {
    try
    {
      const response = await Axios(`${apiUrl}/api/routes/${id}/buses`)
      this.setState({
        route: response
      })
    } catch (error)
    {
      console.error(error)
    }
  }

  handleChangeFromField = (event) =>
  {
    console.log(event.target.value)
    let routeId = (event.target.options[event.target.selectedIndex].dataset.route)
    this.setState({
      from: event.target.value,
    })
    this.getRoute(routeId)
  }

  handleChangeToField = (event) =>
  {
    console.log(event.target.value)
    this.setState({
      to: event.target.value
    })
  }

  handleTypeChange = (event) =>
  {
    console.log(event.target.value)
    this.setState({
      selectedType: event.target.value
    })
  }

  render()
  {
    return (
      <div className="App">
        <React.Fragment>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/planatrip'>
              <PlanTrip
                handleChangeFromField={this.handleChangeFromField}
                handleChangeToField={this.handleChangeToField}
                handleTypeChange={this.handleTypeChange}
                routeId={this.state.route}
              />
            </Route>
            <Route exact path='/service' component={Service} />
            <Route exact path='/schedule'>
              <Schedule
                handleChangeFromField={this.handleChangeFromField}
                handleChangeToField={this.handleChangeToField}
                handleTypeChange={this.handleTypeChange}
                routeId={this.state.route}
              />
            </Route>
            <Route exact path='/menu' component={Menu} />
            <Route exact path='/ticket'>
              <Ticket
                // fromValue={this.state.from}
                // toValue={this.state.to}
                // routeId={this.state.route}
                // ticketType={this.state.selectedType}
                fromValue='Bus stop 1'
                toValue='Bus stop 2'
                routeId='1'
                ticketType='One Way: $13.50'
              />
            </Route>
            <Route exact path='/admin/tickets' component={AdminTickets} />
            <Route exact path='/admin/tickets/:id' component={AdminTicketDetail} />
            <Route exact path='/admin/tickets/:id/edit' component={AdminTicketEdit} />
          </Switch>
        </React.Fragment>
      </div>
    )
  }
}

export default App
