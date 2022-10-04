import { useContext, useState, useRef } from 'react'
import Game from '../Game'
import Loading from '../Loading'
import Filter from '../Filter'
import './styles.scss'
import useGames from '../../hooks/useGames'
import useObserver from '../../hooks/useObserver'

import { useNavigate, useLocation, Link } from "react-router-dom";

export default function Games({ searchUrl = '' }) {
    const { games, loading } = useGames(searchUrl)
    const visor = useRef()
    const { page } = useObserver({ visor: loading ? null : visor, loading })

    return (
        <>
         {  loading ? <Loading /> :
            <>
                <Filter searchUrl={searchUrl}/>
                <div className="card-wrapper">
                        { games.length !== 0 ?
                            <div className="card-container">
                                { games.slice(0, (16 * page)).map(game => {
                                     return (
                                             <Game key={game.id} game={game}/>
                                     )})
                                }
                            </div> : <h3 className="font notFound">No Games Found</h3>
                        }
                    <div className="visor" ref={visor}/>
                </div>
            </>
        }
        </>
    )
}
