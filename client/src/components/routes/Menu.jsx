import React from 'react'
import Layout from '../shared/Layout'
import { Link } from 'react-router-dom'
import ServiceStatus from '../shared/ServiceStatus'

import arrowIcon from '../../images/arrow-icon.png'
import planIcon from '../../images/plan-icon.png'
import scheduleIcon from '../../images/schedule-icon.png'
import busIcon from '../../images/bus-icon.png'
import lightRailIcon from '../../images/light-rail-icon.png'
import railIcon from '../../images/rail-icon.png'
import serviceIcon from '../../images/service-status-icon.png'

const Menu = (props) =>
{
    return (<Layout>
        <div>
            <div><img src={railIcon} /><div>Rail</div></div>
            <div><img src={lightRailIcon} /><div>L. Rail</div></div>
            <div><img src={busIcon} /><div>Bus</div></div>
            <div>
                <Link to='/menu'><button><img src={planIcon} />Plan a trip<img src={arrowIcon} /></button></Link>
                <Link to='/menu'><button><img src={scheduleIcon} />View all schedules<img src={arrowIcon} /></button></Link>
                <Link to='/service'><button><img src={serviceIcon} />Service Status<img src={arrowIcon} /></button></Link>
            </div>
            <ServiceStatus />
        </div>
    </Layout>)
}

export default Menu