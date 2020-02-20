import React from 'react'
import Layout from '../shared/Layout'
import { Link } from 'react-router-dom'
import ServiceStatus from '../shared/ServiceStatus'

import arrowIcon from '../../images/arrow-icon.png'
import busIcon from '../../images/bus-icon.png'
import lightRailIcon from '../../images/light-rail-icon.png'
import railIcon from '../../images/rail-icon.png'
import serviceIcon from '../../images/service-status-icon.png'

import '../../styles/home.css'

const Home = (props) =>
{
    return (<Layout>
        <div>
            <h1>Trip Planner</h1>
            <div>
                <Link to='/menu'>
                    <button className='home-button'>
                        <img src={busIcon} alt='Bus Icon' />
                        <span className='home-button-text'>Bus</span>
                        <img src={arrowIcon} alt='Next Arrow Icon' />
                    </button>
                </Link>
                <button className='home-button'>
                    <img src={railIcon} alt='Rail Icon' />
                    <span className='home-button-text'>Rail</span>
                    <img src={arrowIcon} alt='Next Arrow Icon' />
                </button>
                <button className='home-button'>
                    <img src={lightRailIcon} alt='Light Rail Icon' />
                    <span className='home-button-text'>Light Rail</span>
                    <img src={arrowIcon} alt='Next Arrow Icon' />
                </button>
                <Link to='/service'>
                    <button className='home-button'>
                        <img src={serviceIcon} alt='Next Arrow Icon' />
                        <span className='home-button-text'>Service Status</span>
                        <img src={arrowIcon} alt='Next Arrow Icon' />
                    </button>
                </Link>
            </div>
            <ServiceStatus />
        </div>
    </Layout>)
}

export default Home