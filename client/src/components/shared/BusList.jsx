import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import '../../styles/buslist.css'

class BusList extends Component {
    constructor(props) {
        super(props)

        this.state = {
        //    route: []
        }
    }

    // async componentDidMount () {
    //     try {
    //         const response = await axios(`${apiUrl}/api/routes/${this.props.routeId}/buses`)
    //         console.log(response)
    //         this.setState({ route: response.data.route })
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

    render() {
        let bus
        console.log(this.props)

        if (this.props.routeId) {
            bus = this.props.routeId.data.route.Buses.map((bus, id) => (
                <div className='bus-list' key={id}>
                    {bus.routeId}
                    Bus #{bus.id} <br />
                    Departure: {bus.departureTime} <br />
                    Arrival: {bus.arrivalTime} <br />
                    Platform #{bus.platform} <br />
                    Status: {bus.status} <br />
                    {/* write code for images (trip bar, status) */}
                </div>
            ))     
        }
        
        return (
            <div>
                Bus List
                {bus}
            </div>
        )
    }

}

export default BusList