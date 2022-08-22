import { useState, useEffect } from 'react'
import getGames from '../../services/getGames'

export default function useGames(url) {
    const [games, setGames] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        getGames(url).then(games => {
            setGames(games)
            setLoading(false)
        })
    }, [])
    return {games, setGames, loading}
}
