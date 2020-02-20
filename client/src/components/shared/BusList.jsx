import React, { Component } from 'react'
import moment from 'moment'
import busLine from '../../images/bus-line.png'
import goodService from '../../images/good-service.png'
import '../../styles/buslist.css'

class BusList extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        let bus
        console.log(this.props)

        if (this.props.routeId) {
            bus = this.props.routeId.data.route.Buses.map((bus, id) => (
                <div className='bus-list' key={id}>
                    <div className='bus-box'>
                        <div className='bus-number'>Bus #{bus.id} </div>
                        <div className='bus-middle'>
                            <img className='bus-img' src={busLine} alt='Bus Line'/>
                            <div className='bus-platform'>{bus.platform}</div>
                            <img className='bus-status' src={goodService} alt='Service Status'/>
                        </div>
                        <div className='bus-times'>
                            <span className='start-time'>{bus.departureTime, moment().format('LT')}</span>
                            <span className='end-time'>{bus.arrivalTime, moment().format('LT')}</span>
                        </div>
                    </div>
                    {/* write code for status image */}
                </div>
            ))     
        }
        
        return (
            <div>
                {/* <div className='bus-headers'>Platform Status</div> */}
                <div> 
                    {bus}
                </div>
            </div>
        )
    }

}

export default BusList