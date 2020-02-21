import React from 'react'
import { Link } from 'react-router-dom'
import headerImage from '../../images/nj-transit-header.png'
import '../../styles/header.css'

const Header = () =>
{
    return (<Link to='/'><img className='header-image' src={headerImage} alt='NJ Transit' width='320' /></Link>)
}

export default Header