import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'

import atlanticCity from '../../images/atlantic-city-icon.png'
import mainBergen from '../../images/main-bergen-icon.png'
import montclair from '../../images/montclair-icon.png'
import morrisEssex from '../../images/morris-essex-icon.png'
import northJersey from '../../images/north-jersey-icon.png'
import northeatCorridor from '../../images/northeast-corridor-icon.png'
import pasackValley from '../../images/pascack-valley-icon.png'
import raritanValley from '../../images/raritan-valley-icon.png'


import '../../styles/service-status.css'

class ServiceStatus extends Component
{

    constructor(props)
    {
        super(props)
        this.state = {
            routeStatus: [],
            routes: []
        }
    }

    async componentDidMount()
    {
        try
        {
            let routeStatusResponse = await axios(`${apiUrl}/api/routes/status`)
            let routeResponse = await axios(`${apiUrl}/api/routes`)

            this.setState({
                routeStatus: routeStatusResponse.data.routeStatus,
                routes: routeResponse.data.routes
            })
        }
        catch (error)
        {

        }
    }

    sortRoutesByStatus = (routeStatus) =>
    {
        const cancelledArray = []
        const delayedArray = []
        const onTimeArray = []

        if (routeStatus)
        {
            routeStatus.forEach((route) =>
            {
                switch (route.status)
                {
                    case 'Cancelled':
                        cancelledArray.push(route)
                        break
                    case 'Delay':
                        delayedArray.push(route)
                        break
                    case 'Good':
                        onTimeArray.push(route)
                        break
                    default:
                        break
                }
            })
        }
        return {
            cancelled: cancelledArray,
            delayed: delayedArray,
            onTime: onTimeArray
        }
    }

    buildStatusOutput = (routesSortedByStatus) =>
    {
        return (
            <React.Fragment>
                <h3>Delays</h3>
                <div>
                    {this.mapOverStatus(routesSortedByStatus.delayed)}
                </div>
                <h3>Cancelled</h3>
                <div>
                    {this.mapOverStatus(routesSortedByStatus.cancelled)}
                </div>
                <h3>Good Service</h3>
                <div>
                    {this.mapOverStatus(routesSortedByStatus.onTime)}
                </div>
            </React.Fragment>
        )
    }

    mapOverStatus = (routes) =>
    {
        if (routes.length > 0 && this.state.routes.length > 0)
        {
            return routes.map((route, id) =>
            {
                const rId = this.getRouteIndexById(route.routeId)
                return (
                    <div className='service-button' key={id}>
                        <img className='service-button-image' src={atlanticCity} alt='' />
                        <p className='service-button-text'>{this.state.routes[rId] && this.state.routes[rId].name}</p>
                    </div>
                )
            })
        }
        else
        {
            return (<h4>None</h4>)
        }
    }

    getRouteIndexById = (routeId) =>
    {
        const index = this.state.routes.map((o) => o.id).indexOf(routeId)
        return index
    }


    render()
    {
        const sortedRoutes = this.sortRoutesByStatus(this.state.routeStatus)
        const builtStatus = this.buildStatusOutput(sortedRoutes)
        return (<div className='service-status'>{builtStatus}</div>)
    }
}


export default ServiceStatus