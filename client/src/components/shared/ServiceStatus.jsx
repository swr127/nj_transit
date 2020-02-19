import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'

import { routeImageByID } from '../../routeImages'

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
                <div className='service-status-group-heading delay'>Delays</div>
                <div className='service-status-group'>
                    {this.mapOverStatus(routesSortedByStatus.delayed)}
                </div>
                <div className='service-status-group-heading cancelled'>Cancellations</div>
                <div className='service-status-group'>
                    {this.mapOverStatus(routesSortedByStatus.cancelled)}
                </div>
                <div className='service-status-group-heading'>Good Service</div>
                <div className='service-status-group'>
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
                        <img className='service-button-image' src={routeImageByID(route.routeId)} alt='' />
                        <div className='service-button-text'>{this.state.routes[rId] && this.state.routes[rId].name}</div>
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