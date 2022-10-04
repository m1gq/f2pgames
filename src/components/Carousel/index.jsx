import { useEffect, useRef, useState } from 'react'
export default function Carousel({ children }) {
    const carousel = useRef()
    const [counter, setCounter] = useState(0)
    //
    useEffect(() => {
        if (carousel) {
            carousel.current.children[0].classList.add('visible')
            carousel.current.children[0].classList.remove('nextCarouselItem')
            setCounter(counter => counter + 1)
        }
    }, [])

    useEffect(() => {
        if (carousel) {
            const childrenArray = [...carousel.current.children]

            const timer = setTimeout(() => {
                setCounter(counter => {
                    if (counter >= childrenArray.length - 1) {
                        return 0
                    }
                    return counter + 1
                })
                childrenArray.forEach((child, index) => {
                    child.classList.add('nextCarouselItem')
                    child.classList.remove('visible')

                    if (index === counter) {
                        child.classList.remove('nextCarouselItem')
                        child.classList.add('visible')
                    }

                })

            }, 8000)
            return () => {
                clearTimeout(timer)
            }
        }
    }, [counter])

    return (
        <div className="hero-container" ref={carousel}>
            {children}
        </div>
    )
}
