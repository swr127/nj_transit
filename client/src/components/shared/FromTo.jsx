import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'

class FromTo extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            from: null,
            to: null
        }
    }

    async componentDidMount() {
        try {
            const response = await axios(`${apiUrl}/planatrip`)
            this.setState({ 

             })
        } catch (err) {
            console.error(err)
        }
    }

    render() {
        return (
            <div class='fromTo'>
                <select id='from'>
                    <option value='Stop 1'>Stop 1</option>
                    <option value='Stop 2'>Stop 2</option>
                    <option value='Stop 3'>Stop 3</option>
                    <option value='Stop 4'>Stop 4</option>
                    <option value='Stop 5'>Stop 5</option>
                    <option value='Stop 6'>Stop 6</option>
                    <option value='Stop 7'>Stop 7</option>
                    <option value='Stop 8'>Stop 8</option>
                    <option value='Stop 9'>Stop 9</option>
                    <option value='Stop 10'>Stop 10</option>
                </select>
                <select id='to'>
                    <option value='Stop 1'>Stop 1</option>
                    <option value='Stop 2'>Stop 2</option>
                    <option value='Stop 3'>Stop 3</option>
                    <option value='Stop 4'>Stop 4</option>
                    <option value='Stop 5'>Stop 5</option>
                    <option value='Stop 6'>Stop 6</option>
                    <option value='Stop 7'>Stop 7</option>
                    <option value='Stop 8'>Stop 8</option>
                    <option value='Stop 9'>Stop 9</option>
                    <option value='Stop 10'>Stop 10</option>
                </select>
            </div>
        )
    } 
}

export default FromTo