import { useState } from 'react';

export default function AboutSection({ title, description }) {
    const [isTextExtended, setIsTextExtended] = useState(false)
    const text = isTextExtended ? description : description.substring(0, description.length / 3) + '...';
    function handleClick() {
        setIsTextExtended(!isTextExtended)
    }
    return (
        <>
            <h2 className="text-blue">About {title}</h2>
            <p>
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
