import './styles.scss'
import '../../components/game/styles.scss'
import useGame from '../../hooks/useGame'
import { useParams } from 'react-router-dom'
import Loading from '../../components/Loading'
import Game from '../../components/Game'
import GameCard from '../../components/GameCard'
import SystemRequirements from '../../components/SystemRequirements'
import Screenshots from '../../components/Screenshots'
import AboutSection from '../../components/AboutSection'
import {ReactComponent as HeartIcon} from '../../assets/heart-solid.svg'


export default function GameDetails() {
    const { gameId } = useParams()
    const { game, loading } = useGame(`${gameId}`)
    if (loading) {
        return <Loading />
    }
    const { title,
            thumbnail,
            description,
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
            <div className="game-details" style={{backgroundImage: `url(${screenshots[0].image ?? thumbnail})`}}>
                <div className="bg-gradient" />
            </div>
            <section>
                <div className="flex">
                    <div className="le">
                        <AboutSection
                            title={title}
                            description={description}
                        />
                        <Screenshots
                            screenshots={screenshots}
                            title={title}
                        />
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
                <SystemRequirements minimum_system_requirements={minimum_system_requirements} />
            </section>

        </main>
    )
}
