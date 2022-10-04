import Filter from '../../components/Filter'
import DropdownMenu from '../../components/DropdownMenu'
import { tags, sorters } from '../../services/getGameTags'
import { nanoid } from 'nanoid'
import {Outlet, useParams, Link} from 'react-router-dom'
import { Helmet } from 'react-helmet'
export default function GamesPage() {
    return (
        <main>
            <Helmet>
                <title>Games | F2PGames</title>
                <meta name="description" content="A collection of Free Games" />
            </Helmet>
            <Outlet />
        </main>
    )
}
