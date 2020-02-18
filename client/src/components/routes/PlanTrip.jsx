import React, { Component } from 'react'
import apiUrl from '../../apiConfig'
import axios from 'axios'
import Layout from '../shared/Layout'

class PlanTrip extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    async componentDidMount() {
        try {
            const response = await axios(`${apiUrl}/planatrip`)
            this.setState({ })
        } catch (err) {
            console.error(err)
        }
    }

    render() {
        return (
            <Layout>
                <h1>Hello from Ticket!</h1>
            </Layout>        )
    }
}

export default PlanTrip