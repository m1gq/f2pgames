import Game from '../Game'
import Loading from '../Loading'
import useGames from '../../hooks/useGames'
export default function Games() {
    const {games, setGames, loading} = useGames('/games')
    return (
        <>
            {loading ?
                <Loading /> :
                games.map(game => (<Game />)
            )}
        </>
    )
}
