import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Link, NavLink } from 'react-router-dom'
import backIcon from '../../images/back.png'
import alertIcon from '../../images/view-alert-icon.png'
import serviceIcon from '../../images/service-status-icon.png'
import '../../styles/fromto.css'

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

                <nav className='tabs'>
                    <NavLink exact to='/planatrip'>Plan a trip</NavLink>
                    <NavLink exact to='/schedule'>View schedules</NavLink>
                    <NavLink exact to='/service'><img src={serviceIcon}></img></NavLink>
                </nav>

                <div className='back-bus-div'>
                    <Link className='back-button' exact to='/'>
                        <img className='back-image' src={backIcon}></img>
                        <p className='back-text'>Back</p>
                    </Link>

                    <span className='bus-number'>Bus #3889</span>
                </div>
                

                <div className='from-to'>
                    <h4 className='from-text'>From:</h4>
                    <select 
                        className='from-select'
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
                    <h4 className='to-text'>To:</h4>
                    <select 
                        className='to-select'
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
                    <div className='view-alert'>
                        <img src={alertIcon}></img>
                        <span className='alert-text'>View Alert</span>
                    </div>
                </div>



            </div>

        )
    } 
}

export default FromTo