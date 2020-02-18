import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Link, NavLink } from 'react-router-dom'

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
        console.log(this.state.stops)
        return (
            <div className='FromTo'>

                <nav>
                    <NavLink exact to='/planatrip'>Plan a trip</NavLink>
                    <NavLink exact to='/schedule'>View schedules</NavLink>
                    <NavLink exact to='/service'>!!!</NavLink>
                </nav>

                <Link exact to='/'>
                    Back
                </Link>

                <h4>From:</h4>
                <select id='from'>{this.state.stops.map((stop, index) => {
                    console.log(stop.name)
                    return (
                        <option value={stop.name}>{stop.name}</option>
                    )
                })}
                </select>

                <h4>To:</h4>
                <select id='to'>{this.state.stops.map((stop, index) => {
                    return (
                        <option value={stop.name}>{stop.name}</option>
                    )
                })}
                </select>
            </div>

        )
    } 
}

export default FromTo