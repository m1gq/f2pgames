import { useContext } from 'react'
import { Link } from "react-router-dom";
import Games from '../../components/Games'
import { Outlet } from 'react-router-dom'
import Showcase from '../../components/Showcase'
import Filter from '../../components/Filter'
import DropdownMenu from '../../components/DropdownMenu'
import { tags, sorters } from '../../services/getGameTags'
import { nanoid } from 'nanoid'
import { Helmet } from 'react-helmet'

export default function BrowserGames() {
    return (
        <main>
            <Helmet>
                <title>Web Browser Games | F2PGames</title>
                <meta name="description" content="A collection of Free Web Browser Games " />
            </Helmet>
            <Outlet />
        </main>)
}
