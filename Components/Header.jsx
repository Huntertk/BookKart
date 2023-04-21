import React, { useState } from 'react'
import logo from "../src/assets/images/logo.png"
import './header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navOpen = () => {
    setIsOpen((prev) => {
      return prev ? false : true
    })
  }


  const activeStyle = {
    color: '#FF6969',
    border: '1px solid #FF6969',
    padding: '0.31em'
  }
  return (
    <header className='heading-container'>
      <NavLink to="/">
        <div className="heading-top-right-container">
            <img className='nav-logo' src={logo} alt="logo" />
            <p className="heading">BookKart.com</p>
        </div>
      </NavLink>
        <div className="nav-navigate" onClick={navOpen}>
            {isOpen ? <i className="fa-solid fa-x nav-icon"></i> : <i className="fa-solid fa-bars"></i>}
        </div>

         {/* ${isOpen ? "nav-link-open" : "nav-link-close"} */}
            {/* <i className="fa-solid fa-x nav-icon" onClick={navOpen}></i> */}

        <nav className={`nav-links-container ${isOpen === false ? 'show' : null}`}>
            <NavLink 
            to="/best-selling"
            style={({isActive})=> {return isActive ? activeStyle : null}}
            >

            <span className='nav-link'>Best Selling</span>
            </NavLink>

            <NavLink 
            to="/new-arrival"
            style={({isActive})=> {return isActive ? activeStyle : null}}
            >
            <span className='nav-link'>New Arrival</span>
            </NavLink>


             <NavLink 
            to="/about"
            style={({isActive})=> {return isActive ? activeStyle : null}}
            >
            <span className='nav-link'>About</span>
            </NavLink>

            <i className="fa-solid fa-user nav-link user-logo" ></i>
        </nav>
    </header >
  )
}

export default Header
