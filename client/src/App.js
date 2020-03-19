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
import banner from './images/njtransit_banner18.jpg'

class App extends Component 
{
  constructor(props)
  {
    super(props)

    this.state = {
      from: 'Andover',
      to: 'Andover',
      selectedType: 'One Way: $13.50',
      route: null
    }
  }

  async componentDidMount()
  {
    this.getRoute(1)
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
    let routeId = (event.target.options[event.target.selectedIndex].dataset.route)
    this.setState({
      from: event.target.value,
    })
    this.getRoute(routeId)
  }

  handleChangeToField = (event) =>
  {
    this.setState({
      to: event.target.value
    })
  }


  // select ticket type:
  handleTypeChange = (event) =>
  {
    this.setState({
      selectedType: event.target.value
    })
  }

  render()
  {
    return (
      <div className="App">
        <div className="iphone-size">
          <React.Fragment>
      
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/planatrip' render={(defaultProps) => (
              <PlanTrip
                {...defaultProps}
                handleChangeFromField={this.handleChangeFromField}
                handleChangeToField={this.handleChangeToField}
                handleTypeChange={this.handleTypeChange}
                routeId={this.state.route}
                fromValue={this.state.from}
                toValue={this.state.to}
              />)}
            />
              <Route exact path='/service' component={Service} />
              <Route exact path='/schedule' render={(defaultProps) => (
                <Schedule
                  {...defaultProps}
                  handleChangeFromField={this.handleChangeFromField}
                  handleChangeToField={this.handleChangeToField}
                  handleTypeChange={this.handleTypeChange}
                  routeId={this.state.route}
                  fromValue={this.state.from}
                  toValue={this.state.to}
                />)}
              />

              <Route exact path='/menu' component={Menu} />
              <Route exact path='/ticket' render={(defaultProps) => (
                <Ticket
                  {...defaultProps}
                  fromValue={this.state.from}
                  toValue={this.state.to}
                  routeId={this.state.route}
                  ticketType={this.state.selectedType}
                />)}
              />

              <Route exact path='/admin/tickets' component={AdminTickets} />
              <Route exact path='/admin/tickets/:id' component={AdminTicketDetail} />
              <Route exact path='/admin/tickets/:id/edit' component={AdminTicketEdit} />
            </Switch>

          </React.Fragment>
        </div>
      </div>
    )
  }
}

export default App
