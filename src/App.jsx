import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import useTheme from './hooks/useTheme'
import useGames from './hooks/useGames'
import Navbar from './components/Navbar/Navbar'
import Loading from './components/Loading/Loading'
import './styles/index.scss'

function App() {
    const {games, setGames} = useGames('/games')

  return (
    <main>
        <Navbar />
        <Loading />
    </main>
  )
}

export default App
