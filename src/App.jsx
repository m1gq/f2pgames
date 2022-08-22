import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import useTheme from './hooks/useTheme'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import './styles/index.scss'

function App() {


  return (
      <>
          <Navbar />
          <main>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
          </main>
      </>
  )
}

export default App
