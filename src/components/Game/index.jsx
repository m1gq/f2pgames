import './styles.scss'
export default function Game({ id, title, thumbnail, genre, platform }) {

    return (
        <div className="card">
            <div className="img-wrapper">
                <img src={thumbnail} alt={title}/>
            </div>
            <div className="content">
                <h3>{title}</h3>
                <div className="content-category">
                    <span className="platform">{platform}</span>
                    <span className="genre">{genre}</span>
                </div>
            </div>
        </div>
    )
}
