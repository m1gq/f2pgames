import './styles.scss'
export default function GameCard({ title, thumbnail, platform, release_date, publisher, developer, genre}) {
    return (
        <div className='game'>
            <h2 className="game-title">{title}</h2>
            <div className="game-card">
                <img src={thumbnail} alt={title} />
                <ul className="game-info">
                    <li className="flex"><h3 className="tests">Platform:</h3> {platform}</li>
                    <li className="flex"><h3>Release Date:</h3> {release_date}</li>
                    <li className="flex"><h3>Publisher:</h3> {publisher}</li>
                    <li className="flex"><h3>Developer:</h3> {developer}</li>
                    <hr className="line" />
                    <ul className="genre-container">{genre.split(' ').map(element => <li className="genre" key={element}>{element}</li>)}</ul>
                </ul>
            </div>
        </div>
    )
}
