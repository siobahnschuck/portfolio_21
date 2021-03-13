import React, { NavLink} from 'react'
import {Link } from 'react-scroll'

const Header = () => {


  return (
    <div className="nav-container"> 
      <ul className="nav-elements">
        <li><Link activeClass="active" className="nav-element" to="home" spy={true} smooth={true} style={{textDecoration: "none", color: "white" }}> Home </Link> </li>
        <li><Link className="nav-element" to="contact" spy={true} smooth={true} style={{textDecoration: "none", color: "white" }}> Contact</Link> </li>
        <li><Link className="nav-element" to="about" spy={true} smooth={true} style={{textDecoration: "none", color: "white" }}>About</Link> </li>
        <li><Link className="nav-element" to="projects" spy={true} smooth={true} style={{textDecoration: "none", color: "white" }}> Projects </Link> </li>
        <li style={{textDecoration: "none", color: "white" }}>Resume<a target="#" href="https://myresumeUrl.atsomehostingsite.pdf" title="Resume" style={{textDecoration: "none", color: "white" }}/></li>
      </ul>
    </div>
  )
}

export default Header