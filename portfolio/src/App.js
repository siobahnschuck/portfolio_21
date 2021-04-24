import './css/App.css'
import Header from './components/Header'
import Container from './components/Container'
import React, { useRef, useEffect } from 'react'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Container />
      </div>
      <Header />
    </div>
  )
}

export default App
