import React from 'react'
import '../../styles/boughtticket.css'

const BoughtTicket = (props) => {
    console.log(props)

    const handleClick = () => {
        props.toggle()
    }

    return (
        <div className='ticket-modal'>
            <div className='ticket-modal-content'>
                <span className='close-popup' onClick={handleClick}>&times;</span>
                <h1 className='great-trip-text'>Have A Great Trip!</h1>
                <h5 className='question-text'>How would you like your ticket?</h5>
            </div>
        </div>
    )
}

export default BoughtTicket