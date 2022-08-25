import './styles.scss'
export default function Game({ children, thumbnail, title, modifier = '' }) {
    return (
        <div className={`card ${modifier}`}>
            <div className="img-wrapper">
                <img src={thumbnail} alt={title} title={title}/>
            </div>
            <div className="content">
                {children}
            </div>
        </div>
    )
}
