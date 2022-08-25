import './styles.scss'
import { Link } from 'react-router-dom'
export default function Button({ children, modifiers, to }) {
    return <Link to={to} className={`btn ${modifiers ? modifiers : ''}`}>{children}</Link>
}
