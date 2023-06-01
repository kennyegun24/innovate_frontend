import React, { useEffect, useRef, useState } from 'react'
import vic from '../../images/vic.jpg'
import { FaBell, FaCamera, FaCheck, FaCheckCircle, FaPen } from 'react-icons/fa'
import './postUpdate.css'
import { makePost } from '../../redux/posts/postSlice'
import { useSelector } from 'react-redux'

const PostUpdate = () => {
    const [postActive, setPostActive] = useState(false)
    const { currentUser } = useSelector((state) => state.user)

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

    const [text, setText] = useState('')

    const submit = (e) => {
        e.preventDefault()
        makePost({ text, TOKEN: currentUser?.data?.token })
    }

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
                        <textarea onChange={(e) => setText(e.target.value)} ref={textareaRef} onClick={() => setPostActive(true)} className='textarea' placeholder='Post something about you...' rows='7' />
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
                            <button onClick={submit} className='pointer postUpdateButton text_center' >Post</button>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default PostUpdate