import React from 'react'
import '../../styles/tripdetails.css'
import '../../styles/buyticket.css'
import boardingIcon from '../../images/boarding-icon.png'
import travelTimeIcon from '../../images/travel-time-icon.png'
import stoppingAtIcon from '../../images/stopping-at-icon@2x.png'

const BuyTicket = (props) => {
    console.log(props)
    return (
        <div>
            <div className='travel-grid'>
                <img className='boarding-image' src={boardingIcon}></img>
                <h5 className='boarding-on'>Boarding on:</h5>
                <h4 className='platform'>Platform 2</h4>

                <img className='travel-image' src={travelTimeIcon}></img>
                <h5 className='travel-time'>Travel Time:</h5>
                <h4 className='times'>
                    <span className='time-span'>7:15 AM</span>
                    —
                    <span className='time-span'>8:20 AM</span>
                </h4>
            </div>

            <div className='stopping-at'>
                <img className='stopping-image' src={stoppingAtIcon}></img>
                <h4 className='stopping-text'>Stopping at:</h4>
            </div>

            <div className='stops'>
                <div className='blue-line'></div>
                
                <div className='column-1'><h5 className='time'>7:15 AM</h5></div>
                <div className='column-2'></div>
                <div className='column-3'><h4 className='stop-name'>Bus Stop 1</h4></div>

                <div className='column-1'><h5 className='time'></h5></div>
                <div className='column-2'></div>
                <div className='column-3'><p className='click'>(Click to see more)</p></div>

                <div className='column-1'><h5 className='time'>8:05 AM</h5></div>
                <div className='column-2'></div>
                <div className='column-3'><h4 className='stop-name'>Bus Stop 3</h4></div>

                <div className='column-1'><h5 className='time'>8:20 AM</h5></div>
                <div className='column-2'></div>
                <div className='column-3'><h4 className='stop-name'>Bus Stop 4</h4></div>
            </div>

            <label>
                <input type='checkbox' name='donation' />
                <span>Would you like to round up your total to donate to homelessness in NYC?</span>
            </label>

            <div className='price'>
                <h5>{props.ticketType}</h5>
                <h5>Tax: $2.55</h5>
                <h5>Donation: $0.95</h5>
                <h4>$17.00</h4>
            </div>

            {/* onClick with this button pulls up the have a great trip alert */}
            <button type='button'>Buy Ticket</button>

        </div>
    )
}

export default BuyTicket