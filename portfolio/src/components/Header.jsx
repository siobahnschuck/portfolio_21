import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {


  return (
    <div className="nav-container"> 
      <div className="nav-elements">
        <NavLink className="nav-element" to="/" style={{textDecoration: "none", color: "white" }}> Home </NavLink> 
        <NavLink className="nav-element" to="/contact" style={{textDecoration: "none", color: "white" }}> Contact</NavLink> 
        <NavLink className="nav-element" to="/about" style={{textDecoration: "none", color: "white" }}>About</NavLink>
        <NavLink className="nav-element" to="/projects" style={{textDecoration: "none", color: "white" }}> Projects </NavLink> 
      </div>
    </div>
  )
}

export default Header