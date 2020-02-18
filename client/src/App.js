import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/routes/Home'
import PlanTrip from './components/routes/PlanTrip'
import Service from './components/routes/Service'
import Schedule from './components/routes/Schedule'
import Menu from './components/routes/Menu'
import Ticket from './components/routes/Ticket'
import './App.css'

function App()
{
  return (
    <div className="App">
      <React.Fragment>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/planatrip' component={PlanTrip} />
          <Route exact path='/service' component={Service} />
          <Route exact path='/schedule' component={Schedule} />
          <Route exact path='/menu' component={Menu} />
          <Route exact path='/ticket' component={Ticket} />
        </Switch>
      </React.Fragment>
    </div>
  )
}

export default App
