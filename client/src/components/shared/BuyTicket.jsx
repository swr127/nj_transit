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

                <div className='c1 r1'><h5 className='time'>7:15 AM</h5></div>
                <div className='c2 r1'></div>
                <div className='c3 r1'><h4 className='stop-name'>Bus Stop 1</h4></div>

                <div className='c1 r2'><h5 className='time'></h5></div>
                <div className='c2 r2'></div>
                <div className='c3 r2'><p className='click'>(Click to see more)</p></div>

                <div className='c1 r3'><h5 className='time'>8:05 AM</h5></div>
                <div className='c2 r3'></div>
                <div className='c3 r3'><h4 className='stop-name'>Bus Stop 3</h4></div>

                <div className='c1 r4'><h5 className='time'>8:20 AM</h5></div>
                <div className='c2 r4'></div>
                <div className='c3 r4'><h4 className='stop-name'>Bus Stop 4</h4></div>
            </div>

            <div className='donation'>
                <input 
                    className='donation-checkbox' 
                    type='checkbox' 
                    name='donation' 
                />
                <p className='donation-text'>
                    Would you like to <span className='bold-span'>round up your total </span>to donate to homelessness in NYC?
                </p>
            </div>

            <div className='final-price'>
                <h5 className='final-ticket-type'>{props.ticketType}</h5>
                <h5 className='final-tax'>Tax: $2.55</h5>
                <h5 className='donation-amount'>Donation: $0.95</h5>
                <div className='total-line'></div>
                <h4 className='final-total'>$17.00</h4>
            </div>

            {/* onClick with this button pulls up the have a great trip alert */}
            <button type='button'>Buy Ticket</button>

        </div>
    )
}

export default BuyTicket