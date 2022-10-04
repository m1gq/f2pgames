import { createContext, useState } from 'react'

const Context = createContext({})

export function GamesStore({children}) {
    const [games, setGames] = useState([])

    return <Context.Provider value={{games, setGames}}>
                {children}
            </Context.Provider>
}
export default Context
