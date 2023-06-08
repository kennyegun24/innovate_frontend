import React, { useState, useRef, useEffect } from 'react'

const LazyImage = ({ image }) => {
    const [view, setView] = useState(false)
    let ref = useRef()

    let callBack = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setView(true)
            }
        })
    }
    useEffect(() => {
        let observer = new IntersectionObserver(callBack)

        if (ref?.current) {
            observer.observe(ref.current)
        }

        return () => {
            observer.disconnect()
        }
    }, [])
    return view ? (
        <img className='postImage' src={image} alt="" />
    ) : (
        <img ref={ref} className='postImage' style={{ background: '#111' }} alt="" />
    )
}

export default LazyImage