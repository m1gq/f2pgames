import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { ArrowCircleLeft } from 'phosphor-react'
import './styles.scss'
export default function AboutSection({ title, description }) {
    const navigate = useNavigate()
    const [isTextExtended, setIsTextExtended] = useState(false)
    const text = isTextExtended ? description : description.substring(0, description.length / 3) + '...';
    function handleClick() {
        setIsTextExtended(!isTextExtended)
    }
    function redirectToLastPage() {
        navigate( -1 )
    }
    return (
        <>
            <button className="navigateLastPage" onClick={redirectToLastPage}><ArrowCircleLeft size={28} color="#ffffff" weight="light" /> Back to Last Page</button>
            <h2 className="text-blue">About {title}</h2>
            <p className="about-paragraph">
                {text}
                <button
                    className="extendText"
                    onClick={handleClick}>
                        {isTextExtended ? ' - Read Less' : '+ Read More'}
                </button>
            </p>
            <hr className="line" />
        </>
    )
}
