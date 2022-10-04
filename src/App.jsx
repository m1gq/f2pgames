import { Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Games from './components/Games'
import ErrorPage from './pages/ErrorPage'
import GamesPage from './pages/GamesPage'
import BrowserGames from './pages/BrowserGames'
import Login from './pages/Login'
import Register from './pages/Register'
import AboutPage from './pages/AboutPage'
import GameDetails from './pages/GameDetails'
import { GamesStore } from './context/GamesStore.jsx'
import { tags, browser_tags, sorters } from './services/getGameTags'
import { nanoid } from 'nanoid'
import './styles/index.scss'

function App() {

    // PC
   //  tags.map(tag =>
   //     <Route key={nanoid()} path={tag.toLowerCase().split(',').join('-')} element={ <Outlet /> }>
   //         <Route index element={ <Games searchUrl={`?category=${tag.toLowerCase().split(' ').join('-')}`} /> } />
   //         {
   //             sorters.map(sort =>
   //                 <Route key={nanoid()} path={sort.toLowerCase().split(' ').join('-')} element={ <Outlet /> } >
   //                     <Route index element={ <Games searchUrl={`?sort-by=${sort.toLowerCase().split(' ').join('-')}`} /> }/>
   //                     <Route path=":gameId" element={ <GameDetails /> } />
   //                 </Route>
   //         )}
   //         <Route path={':gameId'} element={ <GameDetails /> } />
   //     </Route>)
   // }
   // {
   //     sorters.map(sort =>
   //         <Route key={nanoid()} path={`${sort.toLowerCase().split(' ').join('-')}`} element={ <Outlet /> } >
   //             <Route index element={ <Games searchUrl={`?sort-by=${sort.toLowerCase().split(' ').join('-')}`} /> }/>
   //             <Route path=":gameId" element={ <GameDetails /> } />
   //             {
   //                 tags.map(tag =>
   //                     <Route key={nanoid()} path={tag.toLowerCase().split(',').join('-')} element={ <Outlet /> }>
   //                         <Route index element={ <Games searchUrl={`?category=${tag.toLowerCase().split(' ').join('-')}`} /> } />
   //                         <Route path={':gameId'} element={ <GameDetails /> } />
   //                     </Route>
   //             )}
   //         </Route>
   // )}

    // Browser
    // { tags.map(tag =>
    //     <Route key={nanoid()} path={tag.toLowerCase().split(',').join('-')} element={ <Outlet /> } >
    //         <Route index element={ <Games searchUrl={`?category=${tag.toLowerCase().split(' ').join('-')}`} /> } />
    //         <Route path={':gameId'} element={ <GameDetails /> } />
    //     </Route>)
    // }
    // { sorters.map(sort =>
    //     <Route key={nanoid()} path={sort.toLowerCase().split(' ').join('-')} element={ <Outlet /> } >
    //         <Route index element={ <Games index searchUrl={`?platform=browser&category=${sort.toLowerCase().split(' ').join('-')}`} /> } />
    //         <Route path={sort.toLowerCase().split(' ').join('-')} element={ <Games searchUrl={`?platform=browser&sort-by${sort.toLowerCase().split(' ').join('-')}`} /> }/>
    //         <Route path={':gameId'} element={ <GameDetails /> } />
    //         {
    //             sorters.map(sort =>
    //                 <Route key={nanoid()} path={sort.toLowerCase().split(' ').join('-')} element={ <Outlet /> } >
    //                     <Route index path={sort.toLowerCase().split(' ').join('-')} element={ <Games index searchUrl={`?platform=browser&sort-by${sort.toLowerCase().split(' ').join('-')}`} /> }/>
    //                     <Route path=":gameId" element={ <GameDetails /> } />
    //                 </Route>
    //         )}
    //     </Route>
    // )}

  return (
      <>
          <Navbar />
          <GamesStore>
              <Routes>
                <Route path="*" element={ <ErrorPage /> } />
                    <Route path="/" element={ <Outlet /> } >
                    <Route index element={ <Home /> } />
                    <Route path="/games" element={ <GamesPage /> } >
                        <Route path=":gameId" element={ <GameDetails /> } />
                        <Route index element={<Games />} />
                    </Route>
                </Route>
                <Route path="/login" element={ <Login />} />
                <Route path="/about" element={ <AboutPage /> } />
                <Route path="/browser" element={<BrowserGames />} >
                    <Route path=":gameId" element={ <GameDetails /> } />
                    <Route index element={<Games searchUrl={`platform=browser`} />} />
                </Route>
              </Routes>
          </GamesStore>
      </>
  )
}

export default App
