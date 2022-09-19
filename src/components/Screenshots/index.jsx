import './styles.scss'
export default function Screenshots({ screenshots, title }) {
    return (
            <div>
                <h3 className="screenshot-title">Screenshots</h3>
                <div className="screenshots">
                    {screenshots.map(screenshot => <div key={screenshot.id}><img src={screenshot.image} alt={title} /></div>)}
                </div>
            </div>
    )
}
