import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'
import GamesStore from '../../context/GamesStore.jsx'
import Icons from '../Icons'
import { Star } from 'phosphor-react'

export default function Game({ game }) {
    const { thumbnail, title, short_description, platform, genre } = game
    const [isFavorite, setIsFavorite] = useState(false)

    function handleClick() {
        setIsFavorite(!isFavorite)
    }
    return (
            <div className={`card`}>
                    <Link to={`${game.id}`}>
                        <div className="img-wrapper">
                            <img src={thumbnail} alt={title} title={title} loading='lazy'/>
                        </div>
                        <div className="content">
                            <h3>{title}</h3>
                            <p>{short_description}</p>
                        </div>
                    </Link>
                <div className="content-category">
                    <button className="btn _favorites" onClick={handleClick}>{isFavorite ? <Star size={13} color="#fedd76" weight="fill" /> : <Star size={13} color="#ffffff" weight="light" />}</button>
                    <div className="tags" >
                    <span className="platform" data-platform={platform}><Icons platform={platform} /></span>
                        <span className="genre">{genre}</span>
                    </div>
                </div>
            </div>
    )
}
