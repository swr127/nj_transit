import React, { Component } from 'react'
import axios from 'axios'
import Layout from '../shared/Layout'

class Service extends Component {
    constructor(props) {
        super(props)

        this.state = {
           route: [],
           bus: []
        }
    }

    async componentDidMount () {
        try {
            const response = await axios('http://localhost:3000/api/routes')
            const responseTwo = await axios('http://localhost:3000/api/buses')
            // update to import URL from appConfig
            console.log(response)
            console.log(responseTwo)
            this.setState({ route: response.data.routes })
            this.setState({ bus: responseTwo.data.buses })
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        const route = this.state.route.map(route => (
            <li key={route.id}>
                {route.name}
            </li>
        ))

        const bus = this.state.bus.map(bus => (
            <li key={bus.id}>
                {bus.id}
                {bus.status}
            </li>
        ))

        return (
            <Layout>
                <ul>
                    {route} 
                    {bus}
                </ul>
            </Layout>
        )
    }
}

export default Service