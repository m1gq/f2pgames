import { useState, useEffect } from 'react'
import getGames from '../../services/getGames'

export default function useGames(url) {
    const [games, setGames] = useState(null)
    useEffect(() => {
        getGames(url).then(games => setGames(games))
    }, [])
    return {games, setGames}
}
