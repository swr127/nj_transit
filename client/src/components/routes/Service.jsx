import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Layout from '../shared/Layout'
import { Link, NavLink } from 'react-router-dom'
import back from '../../images/back.png'
import serviceIcon from '../../images/service-status-icon.png'
import busIcon from '../../images/bus-icon-med.png'
import railIcon from '../../images/rail-icon-med.png'
import lightRailIcon from '../../images/light-rail-icon-med.png'
import atlanticCity from '../../images/atlantic-city-icon.png'
import { routeImageByID } from '../../routeImages'
import '../../styles/service.css'

class Service extends Component {
    constructor(props) {
        super(props)

        this.state = {
           service: []
        }
    }

    async componentDidMount () {
        try {
            const response = await axios(`${apiUrl}/api/buses/with/routes`)
            this.setState({ service: response.data.buses })
            
        } catch (error) {
            console.error(error)
        }
    }

    getStatusColor(status) {
        if (status == 'Cancelled') {
            return (
                <div className='service-bus-status-red'>Cancelled</div>
            )
        } else if (status == 'Delayed') { 
            return (
                <div className='service-bus-status-red'>Delayed</div>
            )
        } else {
            return (
                <div className='service-bus-status-green'>On Time</div>
            ) 
        }
    }

    render() {
        const service = this.state.service.map(bus => (
            <div className='service' key={bus.id}>
                <div className='service-info'>
                    <img className='service-button-image' src={routeImageByID(bus.routeId)} alt='' />
                    <div className='service-route'>{bus.Route.name}</div>
                    { this.getStatusColor(bus.status) }
                </div>
                <div className='service-bus-number'>Bus #{bus.busNumber}</div>
                <div className='small-line'></div>
            </div>
    ))

        return (
            <Layout>
                <nav className='service-tabs'>
                    <NavLink exact to='/planatrip'>Plan a trip</NavLink>
                    <NavLink exact to='/schedule'>View schedules</NavLink>
                    <NavLink exact to='/service'><img src={serviceIcon}></img></NavLink>
                </nav>
                
                <div className='icons-imgs'>
                    <img className='railIcon' src={railIcon} alt='Rail Icon' />
                    <img className='busIcon' src={busIcon} alt='Bus Icon' />
                    <img className='lightIcon' src={lightRailIcon} alt='Light Rail Icon' /> 
                
                </div>

                <div className='icons-text'>
                    <span className='icon-text'>RAIL</span>
                    <span className='icon-text'>BUS</span>
                    <span className='icon-text'>L.RAIL</span>
                </div>

                <div className='large-line'></div>

                {service}

                <Link className='back-button' exact to='/'>
                    <img src={back}></img>
                    <span className='back'>Back</span>
                </Link>

            </Layout>
        )
    }
}

export default Service