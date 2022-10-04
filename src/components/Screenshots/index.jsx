import './styles.scss'
import ReactDom from 'react-dom'
import { useState } from 'react'
import Modal from './Modal.jsx'

export default function Screenshots({ screenshots, title }) {
    const [isOpen, setIsOpen] = useState(false)
    const [id, setId] = useState(null)
    function handleClick(incomingId) {
        setId(incomingId)
        setIsOpen(!isOpen)
    }

    return (
            <>
                {   screenshots.length > 0 &&
                    <div>
                        <h3 className="screenshot-title">Screenshots</h3>
                        <div className="screenshots">
                            {screenshots.map(screenshot => (
                                <div key={screenshot.id} onClick={() => handleClick(screenshot.id)}><img src={screenshot.image} alt={title} />

                                </div>)
                            )}
                            { isOpen &&
                                <Modal screenshots={screenshots} id={id} handleClick={handleClick} isOpen={isOpen}/>
                            }
                        </div>

                    </div>
                }
            </>
    )
}
