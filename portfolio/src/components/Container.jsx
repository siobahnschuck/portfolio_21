import React from 'react'
import About from './About'
import Introduction from './Introduction'
import Contact from './Contact'
import Projects from './Projects'

const Container = () => {

  return (
    <div>
      <Introduction/> 
      <About />
      <Projects/>
      <Contact />
    </div>
  )
}

export default Container