import './styles.scss'

export default function Card({ children, element, title, className = '', path, text, styles }) {
    return (
        <div style={styles}>
            <div className="text-content">
                <h2 className="font">{title}</h2>
                {children}
            </div>
        </div>
    )
}
