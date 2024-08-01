import React from 'react'
import './About.css'
import about_img from '../assets/about.png'
import play_icon from '../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nuturing Tomorrow's Leaders Today</h2>
            <p>Our diverse academic programs, led by distinguished faculty, offer students a comprehensive and transformative learning experience. At, we believe in the power of education to change lives and shape the future. Our state-of-the-art facilities, vibrant campus life, and commitment to community engagement create a nurturing environment for students to thrive and reach their full potential.</p>
            <p>To be a leading institution of higher learning recognized globally for excellence in education, research, and innovation, shaping future leaders and contributing to the advancement of society.</p>
            <p>Provide a high-quality, inclusive, and diverse educational experience that empowers students to achieve their full potential.</p>
            <p> Foster a culture of research and innovation that addresses local and global challenges, pushing the boundaries of knowledge and technology.</p>
        </div>
    </div>
  )
}

export default About