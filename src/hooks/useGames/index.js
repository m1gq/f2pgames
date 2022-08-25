import { useState, useEffect } from 'react'
import getGames from '../../services/getGames'
import getRandomGame from '../../services/getRandomGame'

export default function useGames(URL) {
    const [url, setUrl] = useState(URL)
    const [games, setGames] = useState(null)
    const [randomGames, setRandomGames] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        getGames(url).then(games => {
            setGames(games)
            setRandomGames(getRandomGame(games))
            setLoading(false)
        })
    }, [url])

    return {games, randomGames, setGames, loading, setUrl}
}
