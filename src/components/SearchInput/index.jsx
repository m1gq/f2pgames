import { useState, useContext, useTransition } from 'react'
import Loading from '../Loading'
import './styles.scss'
import debounce from 'just-debounce-it'
import GamesStore from '../../context/GamesStore.jsx'
import { MagnifyingGlass, X } from 'phosphor-react'
export default function SearchInput() {
    const {games, setGames} = useContext(GamesStore)
    const [isPending, startTransition] = useTransition()
    const [cacheGames, setCacheGames] = useState(games)

    const handleChange = debounce((ev) => {
        let inputValue = ev.target.value
        const filterGamesByName = cacheGames.filter(game => game.title.toLowerCase().includes(inputValue.toLowerCase()))
        startTransition(() => setGames(filterGamesByName))
    }, 700)


     return (
        <div className="search-input">
            <label htmlFor="input">
                <MagnifyingGlass size={20} weight="fill" className="search-icon"/>
            </label>
            <input onChange={handleChange} type="text" id="input" placeholder='Search Game...' className="input" autoComplete='off'/>
            {isPending && <div>Updating List...</div>}
        </div>
    )
}
