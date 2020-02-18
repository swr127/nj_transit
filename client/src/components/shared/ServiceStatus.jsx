import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'

class ServiceStatus extends Component
{

    constructor(props)
    {
        super(props)
        this.state = {
            routeStatus: []
        }
    }

    async componentDidMount()
    {
        try
        {
            let routeResponse = await axios(`${apiUrl}/api/routes`)
            console.log(routeResponse.data)
        }
        catch (error)
        {

        }
    }


    render()
    {
        return (<div>Hello from Service Status</div>)
    }
}


export default ServiceStatus