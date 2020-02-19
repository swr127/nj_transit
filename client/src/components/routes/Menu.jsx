import React from 'react'
import Layout from '../shared/Layout'
import { Link } from 'react-router-dom'
import ServiceStatus from '../shared/ServiceStatus'

import arrowIcon from '../../images/arrow-icon.png'
import planIcon from '../../images/plan-icon.png'
import scheduleIcon from '../../images/schedule-icon.png'
import busIcon from '../../images/bus-icon.png'
import busIconLarge from '../../images/bus-icon-large.png'
import lightRailIcon from '../../images/light-rail-icon.png'
import railIcon from '../../images/rail-icon.png'
import serviceIcon from '../../images/service-status-icon.png'

import '../../styles/menu.css'

const Menu = (props) =>
{
    return (<Layout>
        <div>
            <div className='small-transport-option'><img src={railIcon} /><div>Rail</div></div>
            <div className='small-transport-option'><img src={lightRailIcon} /><div>L. Rail</div></div>
            <div className='large-transport-option'><img src={busIconLarge} /><div>Bus</div></div>
            <div>
                <Link to='/menu'>
                    <button className='home-button'>
                        <img src={planIcon} />
                        <span className='home-button-text'>Plan a trip</span>
                        <img src={arrowIcon} />
                    </button>
                </Link>
                <Link to='/menu'>
                    <button className='home-button'>
                        <img src={scheduleIcon} />
                        <span className='home-button-text'>View all schedules</span>
                        <img src={arrowIcon} />
                    </button>
                </Link>
                <Link to='/service'>
                    <button className='home-button'>
                        <img src={serviceIcon} />
                        <span className='home-button-text'>Service Status</span>
                        <img src={arrowIcon} />
                    </button>
                </Link>
            </div>
            <ServiceStatus />
        </div>
    </Layout>)
}

export default Menu