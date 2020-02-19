import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import '../../styles/buslist.css'

class BusList extends Component {
    constructor(props) {
        super(props)

        this.state = {
           bus: []
        }
    }

    async componentDidMount () {
        try {
            const response = await axios(`${apiUrl}/api/buses`)
            this.setState({ bus: response.data.buses })
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        const bus = this.state.bus.map(bus => (
            <div className='bus-list' key={bus.id}>
                Bus #{bus.id} <br />
                Departure: {bus.departureTime} <br />
                Arrival: {bus.arrivalTime} <br />
                Platform #{bus.platform} <br />
                Status: {bus.status} <br />
                {/* write code for images (trip bar, status) */}
            </div>
        )) 

        return (
            <div>
                {bus}
            </div>
        )
    }

}

export default BusList