import { useEffect, useState, useRef } from 'react'

export default function () {
    const [show, setShow] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        Promise.resolve(
            typeof window.IntersectionObserver !== 'undefined'
                ? window.IntersectionObserver
                : import('intersection-observer')
        )
            .then(() => {
                const { current } = ref
                const observer = new window.IntersectionObserver((entries) => {
                    const { isIntersecting } = entries[0]
                    if (isIntersecting) {
                        setShow(true)
                        observer.disconnect()
                    }
                })
                observer.observe(current)
            })
    }, [ref])

    return [show, ref]
}
