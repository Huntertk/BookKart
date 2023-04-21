import React, { useState } from 'react'
import logo from "../src/assets/images/logo.png"
import './header.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navOpen = () => {
    setIsOpen((prev) => {
      return prev ? false : true
    })
  }
  return (
    <header className='heading-container'>
        <div className="heading-top-right-container">
            <img className='nav-logo' src={logo} alt="logo" />
            <p className="heading">BookKart.com</p>
        </div>
        <div className="nav-navigate" onClick={navOpen}>
            <i className="fa-solid fa-bars"></i>
        </div>
        <nav className={`nav-links-container ${isOpen ? "nav-link-open" : "nav-link-close"}`}>
            <i className="fa-solid fa-x nav-icon" onClick={navOpen}></i>
            <span className='nav-link'>Best Selling</span>
            <span className='nav-link'>New Arrival</span>
            <span className='nav-link'>Fiction</span>
            <span className='nav-link'>About Us</span>
            <i className="fa-solid fa-user nav-link user-logo" ></i>
        </nav>
    </header >
  )
}

export default Header
