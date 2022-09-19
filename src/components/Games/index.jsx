import Game from '../Game'
import Loading from '../Loading'
import Showcase from '../Showcase'
import Filter from '../Filter'
import DropdownMenu from '../DropdownMenu'
import ActiveLink from '../ActiveLink'
import Icons from '../Icons'
import {ReactComponent as HeartIcon} from '../../assets/heart-solid.svg'

import './styles.scss'
import useGames from '../../hooks/useGames'
import { nanoid } from 'nanoid'
import { tags, sorters } from '../../services/getGameTags'
import { useNavigate, useLocation, useSearchParams, useResolvedPath, Link } from "react-router-dom";

export default function Games({ searchUrl = '', platform, redirect }) {
    const {games, randomGames, setGames, loading, setUrl} = useGames(searchUrl)
    return (
        <>
            {loading ? <Loading /> :
                <>
                    <Showcase title={'Best Games of 2022'}>
                        <p className="showcase-text"><span>{games.length}</span> Results for {platform === 'browser' && 'Web Browser' || 'PC'} Games</p>
                        <div className="showcase-games">{
                            randomGames.map(game => (
                                <Link to={`${game.id}`} key={game.id} >
                                    <Game thumbnail={game.thumbnail} title={game.title} modifier={'showcase-card'}>
                                        <div className="content-category">
                                            <button className="btn _favorites"><HeartIcon /></button>
                                            <div className="tags" >
                                                <span className="platform" data-platform={game.platform}><Icons platform={game.platform} /></span>
                                                <span className="genre">{game.genre}</span>
                                            </div>
                                        </div>
                                    </Game>
                                </Link>
                            ))
                        }</div>
                    </Showcase>

                    <div className="card-wrapper">
                        <Filter setUrl={setUrl} platform={platform}>
                            <DropdownMenu title={'Sort By'}>
                                {sorters.map(sort => <Link key={nanoid()} to={`${sort.toLowerCase().split(' ').join('-')}`}
                                                             className="btn"
                                                             type="button">{sort}
                                                    </Link>)}
                            </DropdownMenu>
                            <DropdownMenu title={'Category'}>
                                {tags.map(tag => <Link
                                                    key={nanoid()} to={`${tag.toLowerCase().split(' ').join('-')}`}
                                                    className="btn"
                                                    data-searchparams='category'
                                                    type="button">{tag}
                                                </Link>)}
                            </DropdownMenu>
                        </Filter>
                        <hr className="line" />
                        <div className="card-container">
                            {games.map(game => {
                                return (
                                    <Link to={`${game.id}`} key={game.id}>
                                        <Game thumbnail={game.thumbnail} title={game.title}>
                                            <h3>{game.title}</h3>
                                            <p>{game.short_description}</p>
                                            <div className="content-category">
                                                <button className="btn _favorites"><HeartIcon /></button>
                                                <div className="tags" >
                                                    <span className="platform" data-platform={game.platform}><Icons platform={game.platform} /></span>
                                                    <span className="genre">{game.genre}</span>
                                                </div>
                                            </div>
                                        </Game>
                                    </Link>
                            )})}
                        </div>
                    </div>
                </>
            }
        </>
    )
}
