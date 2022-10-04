import './styles.scss'
import { useState } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import {ReactComponent as FilterIcon} from '../../assets/filter-solid.svg'
import SearchInput from '../SearchInput'
import DropdownMenu from '../DropdownMenu'
import useGames from '../../hooks/useGames'
import { nanoid } from 'nanoid'
import { tags, sorters } from '../../services/getGameTags'
import Loading from '../Loading'

export default function Filter({ searchUrl}) {
    const [search, setSearch] = useSearchParams()
    const games = useGames(searchUrl + '&' + search)
    return (
        <div className="filter-container">
                <SearchInput />
                <div className="filter-menu">
                    <DropdownMenu title={'Sort By'} className="filter-btn" type={'listMenu'}>
                        {sorters.map(sort => <button
                                                className="btn" key={nanoid()} onClick={() => {
                                                    search.set('sort-by', sort.toLowerCase().split(' ').join('-'))
                                                    setSearch(search)
                                                }}
                                                >{sort}
                                            </button>)}
                    </DropdownMenu>
                    <DropdownMenu title={'Category'} className="filter-btn" type={'listMenu'}>
                        {tags.map(tag => <button
                                            className="btn"
                                            onClick={() => {
                                                search.set('category', tag.toLowerCase().split(' ').join('-'))
                                                setSearch(search)
                                            }}
                                            key={nanoid()}
                                            >{tag}
                                        </button>)}
                    </DropdownMenu>
                </div>
        </div>
    )
}
