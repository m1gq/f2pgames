import Games from '../../components/Games'
import SearchInput from '../../components/SearchInput/SearchInput'
import {Outlet, useParams} from 'react-router-dom'
export default function GamesPage() {

    return (
        <main>
            <Outlet />
        </main>
    )
}
