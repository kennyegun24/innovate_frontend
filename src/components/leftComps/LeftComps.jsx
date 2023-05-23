import React from 'react'
import vic from '../../images/vic.jpg'
import { FaBookmark, FaTag } from 'react-icons/fa'

const RecommendedPages = () => {
    return (
        <>
            <div style={{ color: '#fff', borderBottom: '1px solid #d8d6d6', padding: '1rem 0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <img src={vic} className='postUpdateFormImage' alt="" />
                    <div>
                        <p className='font14 weight700'>Fast Food</p>
                        <p className='font12' style={{ opacity: '0.5' }}>All sorts of meals</p>
                    </div>
                </div>
                <FaBookmark />
            </div>
        </>
    )
}

export default RecommendedPages