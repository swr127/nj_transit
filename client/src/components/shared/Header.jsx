import React from 'react'
import { Link } from 'react-router-dom'
import headerImage from '../../images/nj-transit-header.png'
import '../../styles/header.css'

const Header = (props) =>
{
    return (<Link to='/'><img className='header-image' src={headerImage} alt='NJ Transit Header Image' width='320' /></Link>)
}

export default Header