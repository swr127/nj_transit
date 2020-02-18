import React, { Component } from 'react'

class PlanTrip extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    async componentDidMount() {
        try {
            const response = await axios(``)
            this.setState({ })
        } catch (err) {
            console.error(err)
        }
    }

    render() {
        <h1>Hello from PlanTrip!</h1>
    }
}

export default PlanTrip