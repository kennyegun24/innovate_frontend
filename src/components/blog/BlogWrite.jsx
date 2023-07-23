import React, { useEffect, useRef, useState } from 'react'
import { FaBell, FaCamera, FaCheck, FaCheckCircle, FaPen } from 'react-icons/fa'
import './blogWrite.css'

const BlogWrite = () => {
    const [postActive, setPostActive] = useState(false)
    const textareaRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (textareaRef.current && !textareaRef.current.contains(event.target)) {
                setPostActive(false);
            }
        };
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className='postUpdateDiv' >
            <div className='blogWriteDivSm' >
                <div className='postUpdateTabDiv' >
                    <div className='postUpdateTab' >
                        <FaPen />
                        <p className='tabText' >Post</p>
                    </div>
                    <div className='postUpdateTab2' >
                    </div>
                </div>
                <div className='blogCreateFormDiv' >
                    <form className='width100' >
                        <textarea ref={textareaRef} onClick={() => setPostActive(true)} className='blogTextarea scrollBar' placeholder='Post something for the world to read...' />
                    </form>
                </div>
                <div className='postUpdateBottomNavDiv padding1rem' >
                    <input style={{ display: 'none' }} type="file" id='image' accept='image/*' />
                    <label className='postUpdateBottomNav pointer' htmlFor="image">
                        <FaCamera />
                        <p className='font12' >media</p>
                    </label>
                </div>
                {
                    postActive &&
                    <>
                        <div className='flex align_center gap1rem padding1rem postActivityDiv'>
                            <FaCheckCircle className='postActivityIcon' />
                            <FaBell className='postActivityIcon' />
                            <p className='white'>Create Blog</p>
                        </div>
                        <div className='postUpdateButtonNavDiv' >
                            <button className='pointer postUpdateButton text_center' >Post</button>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default BlogWrite
