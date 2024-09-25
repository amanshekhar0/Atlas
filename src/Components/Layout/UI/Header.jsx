import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import darkImg from "../../../../public/images/dark-img.png"
import lightImg from "../../../../public/images/light-img.png"

const Header = () => {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    document.body.classList.toggle('light-mode', !darkMode)
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className='Logo'>
            <h1 className='world-atlas'>WorldAtlas</h1>
          </div>
          <nav>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="country">Country</NavLink></li>
            <li><NavLink to="contact">Contact</NavLink></li>
          </nav>
          <div className="theme-toggle">
            <img 
              src={darkMode ? darkImg : lightImg} 
              alt="Toggle Theme" 
              onClick={toggleDarkMode} 
              className="theme-toggle-img"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
