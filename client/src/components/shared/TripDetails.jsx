import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

class TripDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            type: '',
            startLocation: '',
            endDestination: '',
            travelTime: '',
            price: null,
            tax: null,
            donation: null,
            busId: null
        }
    }

    async componentDidMount() {
        try {
            const response = await axios(`${apiUrl}/api/tickets`)
            console.log(response.data.tickets)
            this.setState({ 
                // price: response.data
             })
        } catch (err) {
            console.error(err)
        }
    }

    render() {
        return (
            <div>
                <h4>Depart at:</h4>
                <h4>Arrive by:</h4>

                {/* remove linebreaks below when styling */}

                <form>
                    <label>
                        <input type="radio" name="ticketType" />
                        <span>One Way: $13.50</span>
                    </label><br></br>

                    <label>
                        <input type="radio" name="ticketType" />
                        <span>Round Trip: $25.50</span>
                    </label><br></br>

                    <label>
                        <input type="radio" name="ticketType" />
                        <span>Weekly Pass: $70.50</span>
                    </label><br></br>

                    <label>
                        <input type="radio" name="ticketType" />
                        <span>Monthly Pass: $280</span>
                    </label><br></br>

                    <label>
                        <span>Accessible Trip</span>
                        <input type="checkbox" name="accessible" />
                    </label><br></br>

                    <input type="submit"></input>
                </form>

                <div className='view-times'>
                    <NavLink exact to='/schedule'>View all available times</NavLink>
                </div>

                <div>
                    <Link exact to='/ticket'>Review Ticket</Link>
                </div>


            </div>
        )
    }
}

export default TripDetails