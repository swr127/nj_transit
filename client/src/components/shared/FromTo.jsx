import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { NavLink } from 'react-router-dom'
import backIcon from '../../images/back.png'
import alertIcon from '../../images/view-alert-icon.png'
import serviceIcon from '../../images/service-status-icon.png'
import '../../styles/fromto.css'

class FromTo extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            from: null,
            to: null,
            stops: []
        }
    }

    async componentDidMount()
    {
        try
        {
            const response = await axios(`${apiUrl}/api/stops`)
            this.setState({
                stops: response.data.stops
            })
        } catch (err)
        {
            console.error(err)
        }
    }

    renderBusNumber = () =>
    {
        if (this.props.routeId)
        {

            if (this.props.location.pathname === '/schedule' || this.props.location.pathname === '/planatrip')
            {
                return
            }
            else
            {
                if (this.props.routeId && this.props.routeId.data.route.Buses)
                {
                    return <span className='bus-number'>Bus #{this.props.routeId.data.route.Buses[0].busNumber}</span>
                }
            }
        }
    }

    renderBusAlert = () =>
    {
        if (this.props.routeId)
        {
            if (this.props.location.pathname === '/schedule' || this.props.location.pathname === '/planatrip')
            {
                return
            }
            else
            {
                if (this.props.routeId.data.route.Buses[0].status !== 'On Time')
                {
                    return (<div className='view-alert'>
                        <img src={alertIcon} alt='Alert'></img>
                        <span className='alert-text'>View Alert</span>
                    </div>)
                }
            }
        }
    }

    readOnlyOnBuyTicketPage = () =>
    {
        if (this.props.routeId)
        {
            if (this.props.location.pathname === '/schedule' || this.props.location.pathname === '/planatrip')
            {
                return false
            }
            else
            {
                return true
            }
        }
    }


    goBack = () =>
    {
        this.props.history && this.props.history.goBack()
    }

    render()
    {
        return (
            <div className='FromTo'>

                <nav className='tabs'>
                    <NavLink exact to='/planatrip'>Plan a trip</NavLink>
                    <NavLink exact to='/schedule'>View schedules</NavLink>
                    <NavLink exact to='/service'><img src={serviceIcon} alt='Service'></img></NavLink>
                </nav>

                <div className='back-bus-div'>
                    <div className='back-button' onClick={this.goBack}>
                        <img className='back-image' src={backIcon} alt='Back'></img>
                        <p className='back-text'>Back</p>
                    </div>
                    {this.renderBusNumber()}
                </div>


                <div className='from-to'>
                    <h4 className='from-text'>From:</h4>
                    <select
                        className='from-select'
                        onChange={this.props.handleChangeFromField}
                        value={this.props.fromValue}
                        disabled={this.readOnlyOnBuyTicketPage()}
                        id='from'>{this.state.stops.map((stop, index) =>
                        {
                            return (
                                <option
                                    key={index}
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
                        disabled={this.readOnlyOnBuyTicketPage()}
                        id='to'>{this.state.stops.map((stop, index) =>
                        {
                            return (
                                <option
                                    key={index}
                                    value={stop.name}>
                                    {stop.name}
                                </option>
                            )
                        })}
                    </select>
                    {this.renderBusAlert()}
                </div>



            </div>

        )
    }
}

export default FromTo