import React from 'react'
import './Navbar.css'
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={Logo} alt="" className='logo'/>
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About Us</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li><button className='btn'>Contact us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar