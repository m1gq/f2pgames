import ThemeToggler from '../ThemeToggler/ThemeToggler'
import ActiveLink from '../ActiveLink'
import DropdownMenu from '../DropdownMenu'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { tags, browser_tags } from '../../services/getGameTags'
import { nanoid } from 'nanoid'
import './styles.scss'
export default function Navbar() {

    return (
        <header>
                <nav>
                    <Link to="/" className="nav-title font">F2PGames</Link>
                    <div className="nav-links">
                        <DropdownMenu title={'All Platform Games'}>
                            { tags.map(tag => <ActiveLink key={nanoid()} to={`games/${tag.toLowerCase().split(' ').join('-')}`}>{tag}</ActiveLink>)}
                            <div className="separator"/>
                            <ActiveLink to="/games" className="category-all">All Games</ActiveLink>
                        </DropdownMenu>
                        <DropdownMenu title={'Web Browser Games'}>
                            { browser_tags.map(tag => <ActiveLink key={nanoid()} to={`browser/${tag.toLowerCase().split(' ').join('-')}`}>Browser {tag}</ActiveLink>)}
                            <div className="separator"/>
                            <ActiveLink to="/browser" className="category-all">All Browser Games</ActiveLink>
                        </DropdownMenu>
                        <ActiveLink to="/about" className="category-all">About Us</ActiveLink>
                        <ActiveLink to="/contact" className="category-all">Contact</ActiveLink>
                    </div>
                    <ThemeToggler />
                </nav>
        </header>
    )
}
