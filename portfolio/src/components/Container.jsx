import React from 'react'
import About from './About'
import Introduction from './Introduction'
import Contact from './Contact'
import Projects from './Projects'
import Skills from './Skills'

const Container = () => {

  return (
    <div>
      <Introduction />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default Container