import { useState } from 'react'
import './styles.scss'

export default function DropdownMenu({ title, children, className, type }) {
    const dropDownType = {
        navMenu: 'nav-subMenu',
        listMenu: 'list-menu'
    }
    const [isOpen, setIsOpen] = useState(false)
    function handleClick() {
        setIsOpen(!isOpen)
    }
    return (
        <div onClick={handleClick} role='button' tabIndex='1' className="dropdown-menu-wrapper">
            <h3
                className={`menu ${className}`}
                style={{color: isOpen ? 'hsl(0, 0%, 100%)' : ''}}>
                {title}
            </h3>
            {isOpen &&
                <ul className={dropDownType[type]}>
                    <>{children}</>
                </ul>
            }
        </div>
    )
}
