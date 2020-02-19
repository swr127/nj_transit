import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Layout from '../shared/Layout'
import FromTo from '../shared/FromTo'
import BusList from '../shared/BusList'

class Schedule extends Component {
    constructor(props) {
        super(props)

        this.state = {
           // write code to lift state from FromTo component 
        }
    }

    async componentDidMount () {
        try {
            const response = await axios()
            // import URL from appConfig
            console.log(response)
            // write code to set state 
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        // write code to render state
        return (
            <Layout>
                <FromTo 
                    handleChangeFromField={this.props.handleChangeFromField} 
                    handleChangeToField={this.props.handleChangeToField} 
                />
                <BusList />
            </Layout>
        )
    }
}

export default Schedule
