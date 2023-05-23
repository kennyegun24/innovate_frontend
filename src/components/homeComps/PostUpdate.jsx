import React from 'react'
import vic from '../../images/vic.jpg'
import { FaCamera, FaPen } from 'react-icons/fa'
import './postUpdate.css'

const PostUpdate = () => {
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
                        <textarea className='textarea' placeholder='Post anything...' rows='7' />
                    </form>
                </div>
                <div className='postUpdateBottomNavDiv' >
                    <div className='postUpdateBottomNav' >
                        <FaCamera />
                        <p className='font12' >media</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostUpdate