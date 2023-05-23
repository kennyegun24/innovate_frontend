import React from 'react'
import { FaEllipsisV, FaGift, FaSuitcase } from 'react-icons/fa'
import vic from '../images/vic.jpg'

const Birthday = () => {
    return (
        <div style={{ width: '80%', height: '60vh', background: '#2eb8b8', color: '#fff', borderRadius: '12px', padding: '0.5rem' }}>
            <div style={{ padding: '1rem', height: '15%', display: 'flex', justifyContent: 'space-between' }}>
                <FaGift />
                <FaEllipsisV />
            </div>

            <div style={{ height: '85%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', textAlign: 'center' }}>
                <img className='postUpdateFormImage' src={vic} alt="" />
                <h3>Today is Kenny's Birthday!</h3>
                <p>Make his day special by wishing him a happy birthday</p>
                <button style={{ border: ' none', background: '#111', padding: '0.5rem 1rem', color: '#fff', borderRadius: '12px' }}>Wish him!!</button>
            </div>
        </div>
    )
}

export default Birthday