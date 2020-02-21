import React, { Component } from 'react'
import moment from 'moment'
import busLine from '../../images/bus-line.png'
import goodService from '../../images/good-service.png'
import badService from '../../images/view-alert-icon.png'
import '../../styles/buslist.css'

class BusList extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    getStatusImg(status) {
        if (status === 'Cancelled' || status === 'Delay') {
            return (
                <img className='bus-list-status' src={badService} alt='Service Status'/>
            )
        } else {
            return (
                <img className='bus-list-status' src={goodService} alt='Service Status'/>
            )
        }
    }

    render() {
        let bus
        console.log(this.props)

        if (this.props.routeId) {
            bus = this.props.routeId.data.route.Buses.map((bus, id) => (
                <div className='bus-list-list' key={id}>
                    <div className='bus-list-box'>
                        <div className='bus-list-number'>Bus #{bus.busNumber} </div>
                        <div className='bus-list-middle'>
                            <img className='bus-list-img' src={busLine} alt='Bus Line'/>
                            <div className='bus-list-platform'>{bus.platform}</div>
                            { this.getStatusImg(bus.status) }
                        </div>
                        <div className='bus-list-times'>
                            <span className='bust-start-time'>{moment(bus.departureTime).format('h:mm a')}</span>
                            <span className='bus-end-time'>{moment(bus.arrivalTime).format('h:mm a')}</span>
                        </div>
                    </div>
                </div>
            ))     
        }
        
        return (
            <div>
                <div className='bus-headers'> 
                    <span className='bus-headers-platform'>Platform</span>
                    <span className='bus-headers-status'>Status</span>
                </div>
                <div>{bus}</div>
            </div>
        )
    }
}

export default BusList