import React, { useState, useRef, useEffect } from 'react'
import TRUNK from 'vanta/dist/vanta.trunk.min'
import self from '../imgs/self.jpeg'

import '../css/About.css'
const Introduction = () => {

  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(TRUNK({
        el: myRef.current
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div ref={myRef} id="home">
    <section className="intro">
      <h2 className="name" >siobahn schuck</h2>
      <section className="about-inspo">
        <img className="self" src={self} alt="self-portrait" />
      </section>
      <p className="tag-line" > Web Developing, Designing, and Dreaming</p>
    </section>
  </div>
}

export default Introduction