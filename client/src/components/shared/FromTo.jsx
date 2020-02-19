import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Link, NavLink } from 'react-router-dom'
import back from '../../images/back.png'
import alert from '../../images/view-alert-icon.png'

class FromTo extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            from: null,
            to: null,
            stops: []
        }
    }

    async componentDidMount() {
        try {
            const response = await axios(`${apiUrl}/api/stops`)
            // console.log(response.data)
            this.setState({ 
                stops: response.data.stops
             })
        } catch (err) {
            console.error(err)
        }
    }

    render() {
        return (
            <div className='FromTo'>

                <nav>
                    <NavLink exact to='/planatrip'>Plan a trip</NavLink>
                    <NavLink exact to='/schedule'>View schedules</NavLink>
                    <NavLink exact to='/service'>!!!</NavLink>
                </nav>

                <Link exact to='/'>
                    <img src={back}></img>
                </Link>

                <div>
                    <p>Bus #....</p>
                </div>

                <h4>From:</h4>
                <select 
                    onChange={this.props.handleChangeFromField} 
                    value={this.props.fromValue}
                    id='from'>{this.state.stops.map((stop, index) => {
                        return (
                            <option 
                                data-route={stop.routeId}   
                                value={stop.name}>
                                    {stop.name}
                            </option>
                        )
                    })}
                </select>

                <h4>To:</h4>
                <select 
                    onChange={this.props.handleChangeToField} 
                    value={this.props.toValue}
                    id='to'>{this.state.stops.map((stop, index) => {
                        return (
                            <option 
                                value={stop.name}>
                                    {stop.name}
                            </option>
                        )
                    })}
                </select>

                <div>
                    <img src={alert}></img>
                </div>

            </div>

        )
    } 
}

export default FromTo