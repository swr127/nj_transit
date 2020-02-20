import React, { Component } from 'react'
import Layout from '../shared/Layout'
import { Link } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import Axios from 'axios'

import '../../styles/admin-tickets.css'

class AdminTickets extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            tickets: []
        }
    }

    async componentDidMount()
    {
        try
        {
            const response = await Axios(`${apiUrl}/api/tickets`)
            this.setState({
                tickets: response.data.tickets
            })
        } catch (error)
        {
            console.error(error)
        }
    }

    mapThroughTickets()
    {
        console.log(this.state.tickets)
        return this.state.tickets.map((ticket, id) => (
            <Link to={`/admin/tickets/${ticket.id}`} key={id}>
                <div className='admin-ticket-button'>
                    Ticket # {ticket.id}<br />
                    {ticket.startLocation}<br />
                    {ticket.endDestination}<br />
                </div>
            </Link >
        ))
    }

    render()
    {
        return (
            <Layout>
                <h1>Admin Tickets:</h1>
                <div className='admin-ticket-list'>
                    {this.mapThroughTickets()}
                </div>
            </Layout>
        )
    }
}

export default AdminTickets