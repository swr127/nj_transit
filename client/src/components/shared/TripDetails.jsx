import React from 'react'

const TripDetails = (props) => {
    return (
        <div>
            <h4>Depart at:</h4>
            <h4>Arrive by:</h4>

            <form>
                <input type="radio" name="ticketType"></input>
                <label for="one-way">One Way: $...</label>
                <input type="radio" name="ticketType"></input>
                <label for="round-trip">Round Trip: $...</label>  
                <input type="radio" name="ticketType"></input>
                <label for="weekly-pass">Weekly Pass: $</label>
                <input type="radio" name="ticketType"></input>
                <label for="monthly-pass">Monthly Pass: $</label>
                <label for="accessible-trip">Accessible Trip</label>
                <input type="radio" name="accessible"></input>

                <input type="submit"></input>
            </form>
        </div>
    )
}

export default TripDetails