import React, { Component } from 'react'
import apiUrl from '../../apiConfig'
import axios from 'axios'
import Layout from '../shared/Layout'
import FromTo from '../shared/FromTo'
import BuyTicket from '../shared/BuyTicket'

class Ticket extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    async componentDidMount() {
        try {
            const response = await axios(`${apiUrl}/ticket`)
            this.setState({ })
        } catch (err) {
            console.error(err)
        }
    }

    render() {
        return (
            <Layout>
                <h1>Hello from Ticket!</h1>
                <FromTo 
                    routeId={this.props.routeId} 
                    fromValue={this.props.fromValue}
                    toValue={this.props.toValue}
                />
                <BuyTicket
                    routeId={this.props.routeId}
                    ticketType={this.props.ticketType}
                />
            </Layout>
        )
    }
}

export default Ticket