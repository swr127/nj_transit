import React from 'react'
import Layout from '../shared/Layout'
import { Link } from 'react-router-dom'
import ServiceStatus from '../shared/ServiceStatus'
import arrow from '../../images/arrow-icon.png'
import atlanticCity from '../../images/atlantic-city-icon.png'
import mainBergen from '../../images/main-bergen-icon.png'
import montclair from '../../images/montclair-icon.png'
import morrisEssex from '../../images/morris-essex-icon.png'
import northJersey from '../../images/north-jersey-icon.png'
import northeatCorridor from '../../images/northeast-corridor-icon.png'
import pasackValley from '../../images/pascack-valley-icon.png'
import planIcon from '../../images/plan-icon.png'
import raritanValley from '../../images/raritan-valley-icon.png'
import schedule from '../../images/schedule-icon.png'

const Home = (props) =>
{
    return (<Layout>
        <div>
            <h1>Trip Planner</h1>
            <div>
                <Link to='#'><button>Bus</button></Link>
                <Link to='#'><button>Rail</button></Link>
                <Link to='#'><button>Light Rail</button></Link>
                <Link to='#'><button>Service Status</button></Link>
            </div>
            <ServiceStatus />
        </div>
    </Layout>)
}

export default Home