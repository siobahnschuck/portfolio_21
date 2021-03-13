import React, { useState, useRef, useEffect } from 'react'
import TRUNK from 'vanta/dist/vanta.trunk.min'

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
          <h2>Siobahn Schuck</h2>
      <p > Creating tools for other creatives
        <br/> that both spark joy and foster community.
        <br/>
      </p>
      
      </section>
  </div>
}

export default Introduction