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

class App extends Component 
{
  constructor(props) {
    super(props)

    this.state = {
      from: '',
      to: '',
      selectedType: null
    }
  }

  handleChangeFromField = (event) => {
    console.log(event.target.value)
    console.log(event.target.options[ event.target.selectedIndex ].dataset.route)
    this.setState({
      from: event.target.value
    })

  }

  handleChangeToField = (event) => {
    console.log(event.target.value)
    this.setState({
      to: event.target.value
    })
  }

  handleTypeChange = (event) => {
    console.log(event.target.value)
    this.setState({
      selectedType: event.target.value
    })
  }

  render() {
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
              />
            </Route>
            <Route exact path='/service' component={Service} />
            <Route exact path='/schedule' component={Schedule} />
            <Route exact path='/menu' component={Menu} />
            <Route exact path='/ticket' component={Ticket} />
          </Switch>
        </React.Fragment>
      </div>
    )
  }
}

export default App
