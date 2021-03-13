import React, { useState } from 'react'
import Header from './Header'


const Contact = () => {


  return (
    <div className="contact-container" id="contact"> 
    <h1>CONTACT</h1>
      <form className="inner">
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="name" />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input type="text" placeholder="e-Mail" />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea className="form-control" rows="5"></textarea>
        </div>
        <button type="submit" className="btn-contactForm">Send!</button>
      </form>
      
    </div>
  )
}

export default Contact