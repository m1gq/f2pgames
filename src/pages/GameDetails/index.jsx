import './styles.scss'
import useGame from '../../hooks/useGame'
import { useParams } from 'react-router-dom'
import Loading from '../../components/Loading'
import Game from '../../components/Game'
import GameCard from '../../components/GameCard'
import SystemRequirements from '../../components/SystemRequirements'
import Screenshots from '../../components/Screenshots'
import AboutSection from '../../components/AboutSection'
import {ReactComponent as HeartIcon} from '../../assets/heart-solid.svg'
import { Helmet } from 'react-helmet'

export default function GameDetails() {
    const { gameId } = useParams()
    const { game, loading } = useGame(`${gameId}`)
    if (loading) {
        return <Loading />
    }
    const { title,
            thumbnail,
            description,
            short_description,
            developer,
            genre,
            platform,
            publisher,
            release_date,
            screenshots,
            minimum_system_requirements
          } = game
    return (
        <main>
            <Helmet>
                <title>{title} | F2PGames</title>
                <meta name="description" content={short_description} />
                <meta name="description" content={title} />
            </Helmet>
            <div className="bg-img" style={{backgroundImage: `url(${screenshots[0]?.image ?? thumbnail})`}}>
                <div className="bg-gradient" />
            </div>
            <section className="game-details">
                <div className="details-container">
                    <div className="about-info">
                        <AboutSection
                            title={title}
                            description={description}
                        />
                        <SystemRequirements minimum_system_requirements={minimum_system_requirements} />
                        <hr className="line" />
                    </div>
                    <GameCard
                        title={title}
                        thumbnail={thumbnail}
                        platform={platform}
                        release_date={release_date}
                        publisher={publisher}
                        developer={developer}
                        genre={genre}
                    />
                </div>
                <Screenshots
                    screenshots={screenshots}
                    title={title}
                />


            </section>

        </main>
    )
}
