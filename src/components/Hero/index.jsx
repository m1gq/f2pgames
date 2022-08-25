import './styles.scss'
import Button from '../Button'
export default function Hero() {
    return (
        <section className="hero">
            <h1 className="hero-title">Your Place to Find Free Games for All Platforms</h1>
            <div className="buttons">
                <Button to={'/games'}>All Games</Button>
                <Button to={'/browser'}modifiers={'no-bg'}>Browser Games</Button>
            </div>
        </section>
    )
}
