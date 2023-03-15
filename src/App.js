import React from 'react'
import Nav from './components/Nav'
import Foot from './components/Foot'
import Homepage from './pages/Homepage'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import './styles/style.css'

function App() {
  console.log(<Homepage />)
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/about" element={<About />} />
      </Routes>

      <Foot />
    </div>
  )
}

export default App
