import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const HeroSection = () => {
  return (
    <div>
        <div className="container-hero">
        <div className="child1">
          <h1 className="heading">Explore the world one country at a time</h1>
          <p className="paragraph">
            Discover the culture beauty of every nation,sort search filter
            through countires to find details you like
          </p>
          <div className="btn">
            <NavLink to="/country">
            <button className="hero-button">
            StartExploring <FaLongArrowAltRight/>

          </button>
            </NavLink>
          

          </div>
         
        </div>
        <div className="child2">
          <img className="globe-img
          " src="/images/g2.jpg" alt="world'beauty" />
        </div>
      </div>
      
    </div>
  )
}

export default HeroSection
