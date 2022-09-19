import { useState, useEffect } from 'react'
import getGame from '../../services/getGame'
import { useNavigate } from "react-router-dom";
export default function useGames(URL) {
    const redirect = useNavigate()
    const [game, setGame] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        getGame(URL).then(game => {
            setGame(game)
            setLoading(false)
        })
        .catch(err => redirect('/ErrorPage'))
    }, [URL])

    return {game, setGame, loading}
}
