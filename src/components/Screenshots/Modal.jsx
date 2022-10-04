import ReactDom from 'react-dom'
import { X, List } from 'phosphor-react'
import { useState } from 'react'
export default function Modal({ screenshots, id, handleClick, isOpen }){
    const cacheScreenshot = screenshots.find(screenshot => screenshot.id === id)
    return ReactDom.createPortal(
        <div className={`modal ${isOpen ? 'modal-visible' : ''}`}>
            {isOpen ? <X size={32} color="#ffffff" weight="light" className="close-modal" onClick={handleClick}/> : <List size={32} color="#ffffff" weight="light" className="close-modal" onClick={handleClick} />}
            <img src={cacheScreenshot.image} onClick={() => handleClick()}/>
        </div>
        , document.getElementById('modal')
    )
}
