import React from 'react'
import './about.css'
import frame from '../src/assets/images/frame.png'

const About = () => {
  return (
    <div className='about-container'>
      <div className="top-slogan">
        <h1 className='about-text'>About BookKart.com</h1>
        </div>
      <img className='frame-img' src={frame} alt="" />
      <div className="about-para-container">
        <p className="para">BookKart is India's Largest and Cheapest Online Bookstore offering 40+ Million selections.</p>
        <p className="developer-information">Developed By MD TAUFIK</p>
      </div>
    </div>
  )
}

export default About
