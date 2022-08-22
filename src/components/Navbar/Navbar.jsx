import SearchInput from '../SearchInput/SearchInput'
import ThemeToggler from '../ThemeToggler/ThemeToggler'
import './styles.scss'
export default function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <h3>F2PGames</h3>
                <SearchInput />
                <ThemeToggler />
            </nav>
        </header>
    )
}
