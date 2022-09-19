import './styles.scss'
import Button from '../../components/Button'
export default function Card({ children, element, title, className = '', path, text, styles }) {
    return (
        <div style={styles}>
            <div className="text-content">
                <h2 className="font">{title}</h2>
                {children}
                <Button to={path} className={className}>{text}</Button>
            </div>
        </div>
    )
}
