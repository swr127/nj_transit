import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import '../../styles/tripdetails.css'
import boardingIcon from '../../images/boarding-icon.png'
import travelTimeIcon from '../../images/travel-time-icon.png'

// does this component still need to be a class? I think we're just passing props through at this point

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
                <div className='boarding-grid'>
                    <img className='boarding-image' src={boardingIcon}></img>
                    <h5 className='boarding-on'>Boarding on:</h5>
                    <h4 className='platform'>Platform 2</h4>
                </div>

                <div className='travel-grid'>
                    <img src={travelTimeIcon}></img>
                    <h5>Travel Time:</h5>
                    <h4>7:15 AM - 8:20 AM</h4>
                </div>

                {/* remove linebreaks below when styling */}

                <form>
                    <label>
                        <input type="radio" name="ticketType" value="One Way: $13.50" onChange={this.props.handleTypeChange} />
                        <span>One Way: $13.50</span>
                    </label><br></br>

                    <label>
                        <input type="radio" name="ticketType" value="Round Trip: $25.50" onChange={this.props.handleTypeChange} />
                        <span>Round Trip: $25.50</span>
                    </label><br></br>

                    <label>
                        <input type="radio" name="ticketType" value="Weekly Pass: $70.50" onChange={this.props.handleTypeChange} />
                        <span>Weekly Pass: $70.50</span>
                    </label><br></br>

                    <label>
                        <input type="radio" name="ticketType" value="Monthly Pass: $280" onChange={this.props.handleTypeChange} />
                        <span>Monthly Pass: $280</span>
                    </label><br></br>

                    <label>
                        <span>Accessible Trip</span>
                        <input type="checkbox" name="accessible" />
                    </label><br></br>

                </form>

                {/* <Link exact to='/ticket'>Submit</Link> */}

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