import React, { Component } from 'react'
import axios from 'axios'
import Layout from '../shared/Layout'

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
            const busResponse = await axios(`${apiUrl}api/buses`)
            const routeResponse = await axios(`${apiUrl}api/routes`)
            const serviceResponse = await axios(`${apiUrl}api/routes/status`)
           
            this.setState({ bus: busResponse.data.buses })
            this.setState({ route: routeResponse.data.routes })
            this.setState({ service: serviceResponse.data.routeStatus })
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        const service = this.state.service.map(route => (
            <li key={route.routeId}>
                {route.status}
            </li>
        ))

        return (
            <Layout>
                <h2>Hello from service component!</h2>
                <ul>
                    {service} 
                </ul>
            </Layout>
        )
    }
}

export default Service