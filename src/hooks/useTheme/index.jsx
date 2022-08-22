import { useEffect, useState } from 'react'
export default function useTheme() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')

    useEffect(() => {
        if (theme === 'dark') {
            if (document.body.classList.contains('light')) {
                document.body.classList.remove('light')
            }
            localStorage.setItem('theme', 'dark')
            document.body.classList.add('dark')
        }
        else {
            if (document.body.classList.contains('dark')) {
                document.body.classList.remove('dark')
            }
            localStorage.setItem('theme', 'light')
            localStorage.theme === false && document.body.classList.add('light')
        }
    }, [theme])
    return { theme, setTheme }
}
