import { useState } from 'react'
import './styles.scss'

export default function DropdownMenu({ title, children }) {
    const [isOpen, setIsOpen] = useState(false)
    function handleClick() {
        console.log(isOpen);
        setIsOpen(!isOpen)
    }
    return (
        <div onClick={handleClick} role='button' tabIndex='1' className="dropdown-menu-wrapper">
            <h3
                className="menu"
                style={{color: isOpen ? 'hsl(0, 0%, 100%)' : ''}}>
                {title}
            </h3>
            {isOpen &&
                <ul className="sub-menu">
                    <>{children}</>
                </ul>
            }
        </div>
    )
}
