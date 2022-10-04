import { useState, useEffect, useRef } from 'react'
import throttle from 'just-throttle'
export default function useObserver({ visor, loading }) {
    const fromRef = useRef()
    const [page, setPage] = useState(1)
    const handlePage = throttle(() => setPage(page => page + 1), 1000)
    useEffect(() => {
        if (loading) setPage(1)
        const element = visor && visor.current
        const onChange = (entries) => {
            const el = entries[0]
                if (el.isIntersecting) handlePage()

       }
        const observer = new IntersectionObserver(onChange, {
            rootMargin: '100px'
        })

        if (element) observer.observe(element)

        return () => {
            observer && observer.disconnect()
        }
    }, [visor])

    return { page }
}
