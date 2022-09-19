import './styles.scss'
import { useState } from 'react'
import {ReactComponent as FilterIcon} from '../../assets/filter-solid.svg'

export default function Filter({ children}) {

    const [isOpen, setIsOpen] = useState(false)
    function handleClick() {
        setIsOpen(!isOpen)
    }
    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <div className="filter-container">
            <h3>Filter By</h3>
            <form onSubmit={handleSubmit} className="filter">
                {children}
            </form>
        </div>
    )
}
