import { useState, useEffect } from 'react'
import getGames from '../../services/getGames'
import getRandomGame from '../../services/getRandomGame'
import { useNavigate } from "react-router-dom";
export default function useGames(URL) {
    const redirectTo = useNavigate()
    const [games, setGames] = useState(null)
    const [randomGames, setRandomGames] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        getGames(URL).then(games => {
            setGames(games)
            setRandomGames(getRandomGame(games))
            setLoading(false)
        })
        .catch(err => redirectTo('/ErrorPage'))
    }, [URL])

    return {games, randomGames, setGames, loading}
}
