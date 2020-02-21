import React from 'react'
import Layout from '../shared/Layout'
import { Link } from 'react-router-dom'
import ServiceStatus from '../shared/ServiceStatus'

import arrowIcon from '../../images/arrow-icon.png'
import planIcon from '../../images/plan-icon.png'
import scheduleIcon from '../../images/schedule-icon.png'
import busIconLarge from '../../images/bus-icon-large.png'
import serviceIcon from '../../images/service-status-icon.png'

import railIconShadow from '../../images/shadows/rail-icon.png'
import lightRailIconShadow from '../../images/shadows/light-rail-icon.png'

import '../../styles/menu.css'

const Menu = (props) =>
{
    return (<Layout>
        <div>
            <div className='small-transport-container'>
                <div className='small-transport-option'><img className='small-transport-image' src={railIconShadow} alt='Rail'/><div className='small-transport-option-text'>RAIL</div></div>
                <div className='small-transport-option'><img className='small-transport-image' src={lightRailIconShadow} alt='Light Rail'/><div className='small-transport-option-text'>L.RAIL</div></div>
            </div>
            <div className='large-transport-option'><img src={busIconLarge} alt='Bus'/><div className='large-transport-option-text'>BUS</div></div>
            <div>
                <Link to='/planatrip'>
                    <button className='menu-button'>
                        <img src={planIcon} alt='Plan' />
                        <span className='menu-button-text'>Plan a trip</span>
                        <img src={arrowIcon} alt='Arrow'/>
                    </button>
                </Link>
                <Link to='/schedule'>
                    <button className='menu-button'>
                        <img src={scheduleIcon} alt='Schedule' />
                        <span className='menu-button-text'>View all schedules</span>
                        <img src={arrowIcon} alt='Arrow' />
                    </button>
                </Link>
                <Link to='/service'>
                    <button className='menu-button'>
                        <img src={serviceIcon} alt='View Service'/>
                        <span className='menu-button-text'>Service Status</span>
                        <img src={arrowIcon} alt='Arrow'/>
                    </button>
                </Link>
            </div>
            <ServiceStatus />
        </div>
    </Layout>)
}

export default Menu