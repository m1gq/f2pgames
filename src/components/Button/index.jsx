import './styles.scss'
import { Link } from 'react-router-dom'
export default function Button({ children, className, to }) {
    return <Link to={to} className={`btn ${className}`}>{children}</Link>
}
