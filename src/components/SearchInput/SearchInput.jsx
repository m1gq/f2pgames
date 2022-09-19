import { useState } from 'react'
import './styles.scss'
export default function SearchInput({ children, setUrl }) {
    function handleSubmit(e) {
        e.preventDefault()
        setUrl()
    }

    return (
        <form className="filter" onSubmit={handleSubmit}>
            {children}
            <button className="btn" type="submit">Filter Items</button>
        </form>
    )
}
