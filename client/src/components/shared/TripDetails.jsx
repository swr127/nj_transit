import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import '../../styles/tripdetails.css'
import boardingIcon from '../../images/boarding-icon.png'
import travelTimeIcon from '../../images/travel-time-icon.png'
import bitmapIcon from '../../images/bitmap.png'

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
                <div className='travel-grid'>
                    <img className='boarding-image' src={boardingIcon}></img>
                    <h5 className='boarding-on'>Boarding on:</h5>
                    <h4 className='platform'>Platform 2</h4>
                
                    <img className='travel-image' src={travelTimeIcon}></img>
                    <h5 className='travel-time'>Travel Time:</h5>
                    <h4 className='times'>7:15 AM - 8:20 AM</h4>
                </div>


                <form className='ticket-grid'>
                    <input 
                        className='checkbox' 
                        id='one-way' 
                        type="radio" 
                        name="ticketType" 
                        value="One Way: $13.50" 
                        onChange={this.props.handleTypeChange} 
                    />
                    <span className='text' id='one-way-text'>
                        One Way: $13.50
                    </span>

                    <input 
                        className='checkbox' 
                        id='round-trip' 
                        type="radio" 
                        name="ticketType" 
                        value="Round Trip: $25.50" 
                        onChange={this.props.handleTypeChange} 
                    />
                    <span className='text' id='round-trip-text'>
                        Round Trip: $25.50
                    </span>

                    <input 
                        className='checkbox' 
                        id='weekly' 
                        type="radio" 
                        name="ticketType" 
                        value="Weekly Pass: $70.50" 
                        onChange={this.props.handleTypeChange} 
                    />
                    <span className='text' id='weekly-text'>
                        Weekly Pass: $70.50
                    </span>

                    <input 
                        className='checkbox' 
                        id='monthly' 
                        type="radio" 
                        name="ticketType" 
                        value="Monthly Pass: $280" 
                        onChange={this.props.handleTypeChange} 
                    />
                    <span className='text' id='monthly-text'>
                        Monthly Pass: $280
                    </span>
                </form>

                <form className='accessible-grid'>
                        <img className='accessible-image' src={bitmapIcon}></img>
                        <span className='accessible-text'>
                            Accessible Trip
                        </span>
                        <input 
                            className='accessible-box' 
                            type="checkbox" 
                            name="accessible"
                        />
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