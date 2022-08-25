import ThemeToggler from '../ThemeToggler/ThemeToggler'
import ActiveLink from '../ActiveLink'
import DropdownMenu from '../DropdownMenu'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './styles.scss'
export default function Navbar() {

    return (
        <header>
            <nav>
                <Link to="/" className="nav-title">F2PGames</Link>
                <DropdownMenu title={'All Platform Games'}>
                    <ActiveLink to={"games/mmorpg"}>MMORPG</ActiveLink>
                    <ActiveLink to={"games/shooter"}>Shooter</ActiveLink>
                    <ActiveLink to={"games/moba"}>MOBA</ActiveLink>
                    <ActiveLink to={"games/anime"}>Anime</ActiveLink>
                    <ActiveLink to={"games/battle-royale"}>Battle Royale</ActiveLink>
                    <ActiveLink to={"games/strategy"}>Strategy</ActiveLink>
                    <ActiveLink to={"games/fantasy"}>Fantasy</ActiveLink>
                    <ActiveLink to={"games/sci-fi"}>Sci-Fi</ActiveLink>
                    <ActiveLink to={"games/card-games"}>Card Games</ActiveLink>
                    <ActiveLink to={"games/racing"}>Racing</ActiveLink>
                    <ActiveLink to={"games/fighting"}>Fighting</ActiveLink>
                    <ActiveLink to={"games/social"}>Social</ActiveLink>
                    <ActiveLink to={"games/sports"}>Sports</ActiveLink>
                    <div className="separator"/>
                    <ActiveLink to="/games" className="category-all">All Games</ActiveLink>
                </DropdownMenu>
                <DropdownMenu title={'Web Browser Games'}>
                    <ActiveLink to={"browser/mmorpg"}>MMORPG</ActiveLink>
                    <ActiveLink to={"browser/shooter"}>Shooter</ActiveLink>
                    <ActiveLink to={"browser/moba"}>MOBA</ActiveLink>
                    <ActiveLink to={"browser/anime"}>Anime</ActiveLink>
                    <ActiveLink to={"browser/battle-royale"}>Battle Royale</ActiveLink>
                    <ActiveLink to={"browser/strategy"}>Strategy</ActiveLink>
                    <ActiveLink to={"browser/fantasy"}>Fantasy</ActiveLink>
                    <ActiveLink to={"browser/sci-fi"}>Sci-Fi</ActiveLink>
                    <ActiveLink to={"browser/card-games"}>Card Games</ActiveLink>
                    <ActiveLink to={"browser/racing"}>Racing</ActiveLink>
                    <ActiveLink to={"browser/fighting"}>Fighting</ActiveLink>
                    <ActiveLink to={"browser/social"}>Social</ActiveLink>
                    <ActiveLink to={"browser/sports"}>Sports</ActiveLink>
                    <div className="separator"/>
                    <ActiveLink to="/browser" className="category-all">All Browser Games</ActiveLink>
                </DropdownMenu>
                <ThemeToggler />
            </nav>
        </header>
    )
}
