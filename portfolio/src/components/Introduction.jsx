import React, { useState } from 'react'
import Header from './Header'
import earth from '../imgs/earthBackground.jpeg'

const Introduction = () => {


  return (
    <div> 
      <Header/>
      <div>
      <p className="intro"> 
        Siobahn Schuck is a Fullstack Developer and Video Artist, 
        <br/>
        focused on creating tools for other creatives
        <br/> that both spark joy and foster community.
        <br/>
        <button>Enter</button>
      </p>
      <img className="earth" src={earth} alt="earth" /> 
      </div>
    </div>
  )
}

export default Introduction