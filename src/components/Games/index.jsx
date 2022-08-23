import Game from '../Game'
import Loading from '../Loading'
import useGames from '../../hooks/useGames'
import './styles.scss'
export default function Games() {
    const {games, setGames, loading} = useGames('/games')

    return (
        <div className="card-container">
            {loading ?
                <Loading /> :
                games.map(game => {
                    return (
                        <Game
                            key={game.id}
                            id={game.id}
                            title={game.title}
                            thumbnail={game.thumbnail}
                            genre={game.genre}
                            platform={game.platform}
                        />
                    )
                })}
        </div>
    )
}
