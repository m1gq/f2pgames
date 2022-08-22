import { useState } from 'react'
import './styles.scss'
export default function SearchInput() {
    const [inputValue, setInputValue] = useState('')
    function handleChange(e) {
        e.preventDefault()
        const text = e.target.value;
        setInputValue(text)
    }

    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} placeholder='Search...' />
        </form>
    )
}
