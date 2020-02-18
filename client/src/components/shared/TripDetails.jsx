import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

class TripDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            price: null
        }
    }

    async componentDidMount() {
        try {
            const response = await axios(`${apiUrl}/api/tickets`)
            console.log(response.data)
            this.setState({ 
                price: response.data
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

                <form>
                    <label>
                        <input type="radio" name="ticketType" />
                        <span>One Way: $</span>
                    </label>

                    <label>
                        <input type="radio" name="ticketType" />
                        <span>Round Trip: $...</span>
                    </label>

                    <label>
                        <input type="radio" name="ticketType" />
                        <span>Weekly Pass: $</span>
                    </label>

                    <label>
                        <input type="radio" name="ticketType" />
                        <span>Monthly Pass: $</span>
                    </label>

                    <label>
                        <span>Accessible Trip</span>
                        <input type="radio" name="accessible" />
                    </label>

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