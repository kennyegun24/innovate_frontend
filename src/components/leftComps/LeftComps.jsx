import React from 'react'
import vic from '../../images/vic.jpg'
import { FaBookmark, FaTag } from 'react-icons/fa'

const RecommendedPages = () => {
    return (
        <>
            <div className='white flex justify_between align_center suggestedFriendsPagesMainDiv'>
                <div className='flex align_center gap05rem'>
                    <img src={vic} className='postUpdateFormImage' alt="" />
                    <div>
                        <p className='font14 weight700'>Fast Food</p>
                        <p className='font12 opacity05' >All sorts of meals</p>
                    </div>
                </div>
                <FaBookmark />
            </div>
        </>
    )
}

export default RecommendedPages