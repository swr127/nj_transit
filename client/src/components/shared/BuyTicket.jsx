import React from 'react'

const BuyTicket = (props) => {
    console.log(props)
    return (
        <div>
            <h4>Stopping at:</h4>

            <div className='stopping-at'>
                <div className='row-1'>
                    <div className='column-1'><h5>7:15 AM</h5></div>
                    <div className='column-2'></div>
                    <div className='column-3'><h4>Bus Stop 1</h4></div>
                </div>
                <div className='row-2'>
                    <div className='column-1'></div>
                    <div className='column-2'></div>
                    <div className='column-3'><p>(Click to see more)</p></div>
                </div>
                <div className='row-3'>
                    <div className='column-1'><h5>8:05 AM</h5></div>
                    <div className='column-2'></div>
                    <div className='column-3'><h4>Bus Stop 3</h4></div>
                </div>
                <div className='row-4'>
                    <div className='column-1'><h5>8:20 AM</h5></div>
                    <div className='column-2'></div>
                    <div className='column-3'><h4>Bus Stop 4</h4></div>
                </div>
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