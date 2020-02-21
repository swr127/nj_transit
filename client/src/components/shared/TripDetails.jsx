import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../../styles/tripdetails.css'
import travelTimeIcon from '../../images/travel-time-icon.png'
import bitmapIcon from '../../images/bitmap.png'

const TripDetails = (props) => {
        return (
            <div>
                <div className='trip-grid'>                
                    <img className='trip-image' src={travelTimeIcon} alt='Travel Time'></img>
                    <h5 className='trip-time'>Travel Time:</h5>
                    <h4 className='trip-times'>
                        <span className='time-span'>7:15 AM</span>
                         — 
                        <span className='time-span'>8:20 AM</span>
                    </h4>
                </div>


                <form className='ticket-grid'>
                    <input 
                        className='checkbox' 
                        id='one-way' 
                        type="radio" 
                        name="ticketType" 
                        value="One Way: $13.50" 
                        onChange={props.handleTypeChange} 
                        checked
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
                        onChange={props.handleTypeChange} 
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
                        onChange={props.handleTypeChange} 
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
                        onChange={props.handleTypeChange} 
                    />
                    <span className='text' id='monthly-text'>
                        Monthly Pass: $280
                    </span>
                </form>

                <form className='accessible-grid'>
                    <img className='accessible-image' src={bitmapIcon} alt='Wheelchair Accessible'></img>
                    <span className='accessible-text'>
                        Accessible Trip
                    </span>
                    <input 
                        className='accessible-box' 
                        type="checkbox" 
                        name="accessible"
                    />
                </form>

                <div className='review-line'>
                    <div className='view-times'>
                        <NavLink exact to='/schedule'>View all available times</NavLink>
                    </div>

                    <div className='review-button'>
                        
                    </div>
                    <Link className='button-text' to='/ticket'>Review Ticket</Link>
                </div>


            </div>
        )
}

export default TripDetails