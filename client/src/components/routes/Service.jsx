import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Layout from '../shared/Layout'
import { Link, NavLink } from 'react-router-dom'

class Service extends Component {
    constructor(props) {
        super(props)

        this.state = {
           bus: [],
           route: [],
           service: []
        }
    }

    async componentDidMount () {
        try {
            const busResponse = await axios(`${apiUrl}/api/buses`)
            const routeResponse = await axios(`${apiUrl}/api/routes`)
            const serviceResponse = await axios(`${apiUrl}/api/routes/status`)
           
            this.setState({ bus: busResponse.data.buses })
            this.setState({ route: routeResponse.data.routes })
            this.setState({ service: serviceResponse.data.routeStatus })
            
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        const bus = this.state.bus.map(bus => (
            <li key={bus.id}>
                Bus #{bus.id}
            </li>
        ))

        const route = this.state.route.map(route => (
            <li key={route.id}>
                {route.name}
            </li>
        ))

        const service = this.state.service.map(route => (
            <li key={route.routeId}>
                Status: {route.status}
            </li>
        ))

        return (
            <Layout>
                <nav>
                    <NavLink exact to='/planatrip'>Plan a trip</NavLink>
                    <NavLink exact to='/schedule'>View schedules</NavLink>
                    <NavLink exact to='/service'>!!!</NavLink>
                </nav>
                
                <p>Insert Bus, Rail, and Light Rail Images</p>
                <ul>
                    {bus} <br />
                    {route} <br />
                    {service} <br />
                </ul>

                <Link exact to='/'>
                    Back
                </Link>

            </Layout>
        )
    }
}

export default Service