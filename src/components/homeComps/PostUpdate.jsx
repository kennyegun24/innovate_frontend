import React, { useEffect, useRef, useState } from 'react'
import vic from '../../images/vic.jpg'
import { FaBell, FaCamera, FaCheck, FaCheckCircle, FaPen } from 'react-icons/fa'
import './postUpdate.css'

const PostUpdate = () => {
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
            <div className='postUpdateDivSm' >
                <div className='postUpdateTabDiv' >
                    <div className='postUpdateTab' >
                        <FaPen />
                        <p className='tabText' >Post</p>
                    </div>
                    <div className='postUpdateTab2' >
                    </div>
                </div>
                <div className='postUpdateFormDiv' >
                    <img className='postUpdateFormImage' src={vic} alt="" />
                    <form className='width100' >
                        <textarea ref={textareaRef} onClick={() => setPostActive(true)} className='textarea' placeholder='Post something about you...' rows='7' />
                    </form>
                </div>
                <div className='postUpdateBottomNavDiv padding1rem' >
                    <div className='postUpdateBottomNav' >
                        <FaCamera />
                        <p className='font12' >media</p>
                    </div>
                </div>
                {
                    postActive &&
                    <>
                        <div className='flex align_center gap1rem padding1rem postActivityDiv'>
                            <FaCheckCircle className='postActivityIcon' />
                            <FaBell className='postActivityIcon' />
                            <p className='white'>Activity Feed</p>
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

export default PostUpdate