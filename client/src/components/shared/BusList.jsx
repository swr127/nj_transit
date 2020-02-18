import React, { Component } from 'react'
import axios from 'axios'

class BusList extends Component {
    constructor(props) {
        super(props)

        this.state = {
           bus: []
        }
    }

    async componentDidMount () {
        try {
            const response = await axios('http://localhost:3000/api/buses')
            // import URL from appConfig
            console.log(response)
            this.setState({ bus: response.data.buses })
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        const bus = this.state.bus.map(bus => (
            <li key={bus.id}>
                Bus #{bus.id} <br />
                Departure: {bus.departureTime} <br />
                Arrival: {bus.arrivalTime} <br />
                Platform #{bus.platform} <br />
                Status: {bus.status} <br />
            </li>
            // write code for images (trip bar, status)
        )) 

        return (
            <ul>{bus}</ul>
        )
    }

}

export default BusList