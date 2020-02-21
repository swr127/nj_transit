import React from 'react'
import '../../styles/boughtticket.css'
import xIcon from '../../images/bitmap@2x.png'

const BoughtTicket = (props) => {
    const handleClick = () => {
        props.toggle()
    }

    return (
        <div className='ticket-modal'>
            <div className='ticket-modal-content'>
                <span className='close-popup' onClick={handleClick}><img src={xIcon} alt='X button'></img></span>

                <h1 className='great-trip-text'>Have A Great Trip!</h1>
                <h5 className='question-text'>How would you like your ticket?</h5>

                <form>
                    <div className='get-ticket-buttons'>
                        <input 
                            className='ticket-checkbox' 
                            type="radio" 
                            name="get-ticket" 
                            value="download" 
                            readOnly
                            checked
                        />
                        <h4 className='get-ticket-text'>Download ticket to my phone.</h4>
                    </div>

                    <div className='get-ticket-buttons'>
                        <input 
                            className='ticket-checkbox' 
                            type="radio" 
                            name="get-ticket" 
                            value="email"
                            readOnly
                        />
                        <h4 className='get-ticket-text'>Email my ticket to me.</h4>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BoughtTicket