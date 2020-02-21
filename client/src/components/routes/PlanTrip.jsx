import React, { Component } from 'react'
import Layout from '../shared/Layout'
import TripDetails from '../shared/TripDetails'
import FromTo from '../shared/FromTo'

class PlanTrip extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {
        }
    }
  
    async componentDidMount() {
        try {
            this.setState({ })
        } catch (err) {
            console.error(err)
        }
    }

    render()
    {
        return (
            <Layout>
                <FromTo
                    {...this.props}
                    handleChangeFromField={this.props.handleChangeFromField}
                    handleChangeToField={this.props.handleChangeToField}
                />
                <TripDetails
                    handleTypeChange={this.props.handleTypeChange}
                />
            </Layout>
        )
    }
}

export default PlanTrip