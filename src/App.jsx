import { Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Games from './components/Games'
import ErrorPage from './pages/ErrorPage'
import GamesPage from './pages/GamesPage'
import BrowserGames from './pages/BrowserGames'
import GameDetails from './pages/GameDetails'
import { tags, browser_tags, sorters } from './services/getGameTags'
import { nanoid } from 'nanoid'
import './styles/index.scss'

function App() {

  return (
      <>
          <Navbar />
          <Routes>
            <Route path="*" element={ <ErrorPage /> } />
            <Route path="/" element={ <Home /> } />
            <Route path="/games" element={ <GamesPage /> } >
                <Route index element={<Games />} />
                { tags.map(tag =>
                    <Route
                        key={nanoid()}
                        path={tag.toLowerCase().split(',').join('-')}
                        element={<Games searchUrl={`?category=${tag.toLowerCase().split(' ').join('-')}`} />}
                    />)
                }
                { sorters.map(sort =>
                    <Route
                        key={nanoid()}
                        path={sort.toLowerCase().split(' ').join('-')}
                        element={<Games searchUrl={`?sort-by=${sort.toLowerCase().split(' ').join('-')}`} />}
                    />)
                }
            </Route>
            <Route path="/browser" element={<BrowserGames searchUrl={`?platform=browser`} />} >
                <Route index element={<Games searchUrl={`?platform=browser`} />} />
                {
                    browser_tags.map(tag =>
                        <Route
                            key={nanoid()}
                            path={tag.toLowerCase().split(' ').join('-')}
                            element={<Games searchUrl={`?platform=browser&category=${tag.toLowerCase().split(' ').join('-')}`} />}
                         />)
                }
                { sorters.map(sort =>
                    <Route
                        key={nanoid()}
                        path={sort.toLowerCase().split(' ').join('-')}
                        element={<Games searchUrl={`?platform=browser&sort-by=${sort.toLowerCase().split(' ').join('-')}`}/>}
                        />)
                }
            </Route>

            <Route path="/browser/:gameId" element={ <GameDetails /> } />
            // Loop through the Array and create a Route with each tag
            {browser_tags.map(tag => <Route path={`/browser/${tag.toLowerCase().split(' ').join('-')}/:gameId`} element={ <GameDetails /> } />)}
            <Route path="/games/:gameId" element={ <GameDetails /> } />
            {tags.map(tag => <Route path={`/games/${tag.toLowerCase().split(' ').join('-')}/:gameId`} element={ <GameDetails /> } />)}
            { sorters.map(sort =>
                <Route
                    key={nanoid()}
                    path={`/games/${sort.toLowerCase().split(' ').join('-')}/:gameId`}
                    element={<GameDetails />}
                    />)
            }
            { sorters.map(sort =>
                <Route
                    key={nanoid()}
                    path={`/browser/${sort.toLowerCase().split(' ').join('-')}/:gameId`}
                    element={<GameDetails />}
                    />)
            }
          </Routes>
      </>
  )
}

export default App
