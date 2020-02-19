import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Link, NavLink } from 'react-router-dom'
import back from '../../images/back.png'
import alert from '../../images/view-alert-icon.png'
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

                <nav className='tabs'>
                    <NavLink exact to='/planatrip'>Plan a trip</NavLink>
                    <NavLink exact to='/schedule'>View schedules</NavLink>
                    <NavLink exact to='/service'><img src={serviceIcon}></img></NavLink>
                </nav>

                <Link className='back-button' exact to='/'>
                    <img src={back}></img>
                    <span className='back'>Back</span>
                </Link>

                <div>
                    <p>Bus #....</p>
                </div>
                <div className='from-to'>
                    <div className='from'>
                        <h4>From:</h4>
                        <select 
                            className='select'
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
                    </div>

                    <div className='to'>
                        <h4>To:</h4>
                        <select 
                            className='select'
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
                    </div>
                </div>

                <div>
                    <img src={alert}></img>
                </div>

            </div>

        )
    } 
}

export default FromTo