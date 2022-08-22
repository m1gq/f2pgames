import './styles.scss'
import useTheme from '../../hooks/useTheme/index'

export default function ThemeToggler() {
    const { theme, setTheme } = useTheme()

    function handleToggleTheme() {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    return (
        <div className="theme-toggler" onClick={handleToggleTheme}>
            <h4 className={`${theme === 'light' && 'active'}`}>Light</h4>
            <h4 className={`${theme === 'dark' && 'active'}`}>Dark</h4>
        </div>
    )
}
