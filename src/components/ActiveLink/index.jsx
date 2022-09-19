import { NavLink } from 'react-router-dom'
import './styles.scss'
export default function ActiveLink({ to, children }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? "active-link" : ""}>
            {children}
          </NavLink>
    )
}
