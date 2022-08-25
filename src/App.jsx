import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import useTheme from './hooks/useTheme'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import GamesPage from './pages/GamesPage'
import BrowserGames from './pages/BrowserGames'
import './styles/index.scss'

function App() {


  return (
      <main>
         <Navbar />
         <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="browser/*" element={ <BrowserGames /> } />
            <Route path="games/*" element={ <GamesPage /> } />
         </Routes>
      </main>
  )
}

export default App
