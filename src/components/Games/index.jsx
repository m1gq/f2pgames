import Game from '../Game'
import Loading from '../Loading'
import Showcase from '../Showcase'
import Filter from '../Filter'
import DropdownMenu from '../DropdownMenu'
import ActiveLink from '../ActiveLink'
import {ReactComponent as WindowsIcon} from '../../assets/windows-brands.svg'
import {ReactComponent as BrowserIcon} from '../../assets/globe-solid.svg'
import {ReactComponent as StarIcon} from '../../assets/star-solid.svg'
import useGames from '../../hooks/useGames'
import './styles.scss'
import { useNavigate } from "react-router-dom";

export default function Games({ searchUrl = '', platform }) {
    const {games, randomGames, setGames, loading, setUrl} = useGames(searchUrl)
    const redirect = useNavigate()
    const redirectToNextPage = (e) => {
        const params = e.target.textContent.toLowerCase().split(' ').join('-')
        if (platform !== 'browser') {
            // setUrl(`?&sort-by=${params}`)
            redirect(`?sort-by=${params}`)
        } else {
            // setUrl(`?platform=${platform}&sort-by=${params}`)
            redirect(`/browser?sort-by=${params}`)
        }
    }


    const icon = {
        'PC (Windows)': <WindowsIcon />,
        'Web Browser': <BrowserIcon />,
        'PC (Windows), Web Browser': <><WindowsIcon /> <BrowserIcon /> </>
    }

    return (
        <>
            {loading ? <Loading /> :
                <>
                    <Showcase title={'Best Games of 2022'}>
                        <p className="showcase-text"><span>{games.length}</span> Results for {platform === 'browser' && 'Web Browser' || 'PC'} Games</p>
                        <div className="showcase-games">{
                            randomGames.map(game => (
                                <Game key={game.id} thumbnail={game.thumbnail} title={game.title} modifier={'showcase-card'}>
                                    <div className="content-category">
                                        <div className="tags" >
                                            <span className="platform" data-platform={game.platform}>{icon[game.platform]}</span>
                                            <span className="genre">{game.genre}</span>
                                        </div>
                                    </div>
                                </Game>
                            ))
                        }</div>
                    </Showcase>
                    <Filter>
                        <div className="sort-by">
                            <button className="btn" onClick={redirectToNextPage} data-searchParams='sort-by'>Release Date</button>
                            <button className="btn" onClick={redirectToNextPage} data-searchParams='sort-by'>Popularity</button>
                            <button className="btn" onClick={redirectToNextPage} data-searchParams='sort-by'>Alphabetical</button>
                            <button className="btn" onClick={redirectToNextPage} data-searchParams='sort-by'>Relevance</button>
                            <DropdownMenu title={'Category'}>
                                <p onClick={redirectToNextPage} data-searchParams='&category'>Sci-Fi</p>
                                <p onClick={redirectToNextPage} data-searchParams='&category'>Card Games</p>
                                <p onClick={redirectToNextPage} data-searchParams='&category'>Racing</p>
                            </DropdownMenu>
                        </div>
                    </Filter>
                    <div className="card-wrapper">
                        <div className="card-container">
                            {games.map(game => {
                                return (
                                    <Game key={game.id} thumbnail={game.thumbnail} title={game.title}>
                                        <h3>{game.title}</h3>
                                        <p>{game.short_description}</p>
                                        <div className="content-category">
                                            <button className="btn _favorites"><StarIcon /></button>
                                            <div className="tags" >
                                                <span className="platform" data-platform={game.platform}>{icon[game.platform]}</span>
                                                <span className="genre">{game.genre}</span>
                                            </div>
                                        </div>
                                    </Game>
                            )})}
                        </div>
                    </div>
                </>
            }
        </>
    )
}
