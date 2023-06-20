import React, { useEffect, useRef, useState } from 'react'
import { FaEllipsisV } from 'react-icons/fa'

const Pop = () => {
    return (
        <div className='font12 flex column padding05rem gap05rem' style={{ position: 'absolute', right: 0, top: '100%', width: 'max-content', background: '#111' }}>
            <p>Follow</p>
            <span>Report user</span>
        </div>
    )
}

const PostOptions = ({ id }) => {
    const hidePopRef = useRef(null)
    const [show, setShow] = useState(false)

    useEffect(() => {

        const handleClickOutside = (event) => {
            if (hidePopRef.current && !hidePopRef.current.contains(event.target)) {
                setShow(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };

    }, [])

    return (
        <div style={{ position: 'relative' }} ref={hidePopRef}>
            <FaEllipsisV className='pointer' onClick={() => setShow(!show)} />
            {show && <Pop />}
        </div>
    )
}

export default PostOptions;