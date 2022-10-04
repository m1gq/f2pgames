import ActiveLink from '../ActiveLink'
import DropdownMenu from '../DropdownMenu'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { tags, browser_tags } from '../../services/getGameTags'
import { nanoid } from 'nanoid'
import { X, List } from 'phosphor-react'
import './styles.scss'
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header>
                <nav>
                    <Link to="/" className="nav-title font">F2PGames</Link>
                    <div className="nav-links">
                        <Link to="/games">Games</Link>
                        <Link to="/browser">Browser Games</Link>
                        <Link to="/about">About Us</Link>
                    </div>
                    <div className="action-btn">
                        <Link to="/login">Login</Link>
                    </div>
                </nav>
        </header>
    )
}
