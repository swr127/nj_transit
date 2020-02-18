import React, { Component } from 'react'
import axios from 'axios'
import Layout from '../shared/Layout'
import BusList from '../shared/BusList'

// Maybe this component isn't stateful?
class Schedule extends Component {
    constructor(props) {
        super(props)

        this.state = {
           // write code to lift state from PlanTrip component 
        }
    }

    async componentDidMount () {
        try {
            const response = await axios()
            // import URL from appConfig
            console.log(response)
            // write in code for state 
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        // write in code to render state

        return (
            <Layout>
                <h2>Hello from Schedule component!</h2>
                <BusList />
            </Layout>

        )
    }

}

export default Schedule