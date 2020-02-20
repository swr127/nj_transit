import React, { Component } from 'react'
import Layout from '../shared/Layout'
import { Link } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import Axios from 'axios'

import '../../styles/admin-tickets.css'

class AdminTicketDetail extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            ticket: null,
            deleted: false
        }
    }

    async componentDidMount()
    {
        try
        {
            const response = await Axios(`${apiUrl}/api/tickets/${this.props.match.params.id}`)
            this.setState({
                ticket: response.data.ticket
            })
        } catch (error)
        {
            console.error(error)
        }
    }

    ticketDetail = () =>
    {
        console.log(this.state)
        if (this.state.ticket && !this.state.deleted)
        {
            return (<React.Fragment>
                <div className='admin-ticket-detail'>
                    <div className='admin-ticket-field-container'>
                        <div className='admin-ticket-field'>Ticket Number:</div><div className='admin-ticket-value'>{this.state.ticket.id}</div>
                    </div>
                    <div className='admin-ticket-field-container'>
                        <div className='admin-ticket-field'>Ticket Type:</div><div className='admin-ticket-value'>{this.state.ticket.type}</div>
                    </div>
                    <div className='admin-ticket-field-container'>
                        <div className='admin-ticket-field'>Ticket Start:</div><div className='admin-ticket-value'>{this.state.ticket.startLocation}</div>
                    </div>
                    <div className='admin-ticket-field-container'>
                        <div className='admin-ticket-field'>Ticket End:</div><div className='admin-ticket-value'>{this.state.ticket.endDestination}</div>
                    </div>
                    <div className='admin-ticket-field-container'>
                        <div className='admin-ticket-field'>Ticket BusId:</div><div className='admin-ticket-value'>{this.state.ticket.busId}</div>
                    </div>
                    <div className='admin-ticket-field-container'>
                        <div className='admin-ticket-field'>Ticket TravelTime:</div><div className='admin-ticket-value'>{this.state.ticket.travelTime}</div>
                    </div>
                    <div className='admin-ticket-field-container'>
                        <div className='admin-ticket-field'>Ticket Price:</div><div className='admin-ticket-value'>{this.state.ticket.price}</div>
                    </div>
                    <div className='admin-ticket-field-container'>
                        <div className='admin-ticket-field'>Ticket Tax:</div><div className='admin-ticket-value'>{this.state.ticket.tax}</div>
                    </div>
                    <div className='admin-ticket-field-container'>
                        <div className='admin-ticket-field'>Ticket Donation:</div><div className='admin-ticket-value'>{this.state.ticket.donation ? 'True' : 'False'}</div>
                    </div>
                </div>
                <div>
                    <Link to={`/admin/tickets/${this.props.match.params.id}/edit`}><button>Edit</button></Link>
                    <button className='delete' onClick={this.deleteTicket}>Delete</button>
                </div>
            </React.Fragment>)
        }
        else if (this.state.deleted)
        {
            return (<h4>Ticket deleted</h4>)
        }
        else
        {
            return (<h4>Loading...</h4>)
        }
    }

    deleteTicket = async () =>
    {
        try
        {
            const deletedSuccess = await Axios.delete(`${apiUrl}/api/tickets/${this.props.match.params.id}`)
            if (deletedSuccess)
            {
                this.setState({
                    deleted: true
                })
            }

        } catch (error)
        {
            console.error(error)
        }
    }

    render()
    {
        return (
            <Layout>
                <h1>Admin Ticket Detail:</h1>
                <div>
                    <Link to={`/admin/tickets`}><button>Back</button></Link>
                </div>
                {this.ticketDetail()}
            </Layout >
        )
    }
}

export default AdminTicketDetail