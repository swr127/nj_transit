import React, { Component } from 'react'
import axios from 'axios'
import Layout from '../shared/Layout'
import BusList from '../shared/BusList'

// Maybe this component isn't stateful?
class Schedule extends Component {
    constructor(props) {
        super(props)

        this.state = {
           // write code for state  
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
        // write in code for all components on page 

        return (
            <Layout>
                <h1>Hello from Schedule component!</h1>
                <BusList />
            </Layout>

        )
    }

}

export default Schedule