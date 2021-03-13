import React, { useState } from 'react'
import Header from './Header'
import self from '../imgs/self.jpeg'

const About = () => {


  return (
    <div  id="about" className="about-container"> 
    <section className="about-main">
    <h1 className="title">ABOUT ME</h1>
      <p className="about-txt"> 
        I'm a Chicago based software developer and Video Artist who is passionate about eloquent programs and intuitive interfaces. With a diverse background in New Media Art and past experience working as a museum curator, I bring a variety of approaches to solving problems creatively and efficiently with code. 
      <br/> I thrive in team structured enviornments where collaboration is the key to success. I am detail oriented and believe even the smallest components have a big picture impact. Overall my interests lie at the intersection of art, humans, and the world wide web. 
      </p>
    <img className="self" src={self} alt="self-portrait"/>
    </section>
    <section className="about-inspo">
      <h3>QUote </h3>
    </section>
    <section className="skills">
      <h1 className="title">SKILLS</h1>
      <p>An evergrowing list</p>
    </section>
    <section className="element">
      <h3>Another quote or image of something</h3>
    </section>
    </div>
  )
}

export default About