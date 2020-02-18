import React from 'react'
import Layout from '../shared/Layout'
import { Link } from 'react-router-dom'
import ServiceStatus from '../shared/ServiceStatus'

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