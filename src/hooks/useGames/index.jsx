import { useState, useEffect, useContext } from 'react'
import getGames from '../../services/getGames'
import { useNavigate } from "react-router-dom";
import GamesStore from '../../context/GamesStore.jsx'
export default function useGames(URL) {
    const {games, setGames} = useContext(GamesStore)
    const redirectTo = useNavigate()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        getGames(URL).then(games => {
            setGames(games)
            setLoading(false)
        })
        .catch(err => redirectTo('/ErrorPage'))
    }, [URL])

    return {games, loading}
}
