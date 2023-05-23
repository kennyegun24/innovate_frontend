import React from 'react'
import { FaEllipsisV, FaGift, FaSuitcase } from 'react-icons/fa'
import vic from '../images/kenny.png'

const NewJob = () => {
    return (
        <div style={{ width: '80%', height: '60vh', position: 'sticky', top: '3rem', background: '#003366', color: '#fff', borderRadius: '12px', padding: '0.5rem' }}>
            <div style={{ padding: '1rem', height: '15%', display: 'flex', justifyContent: 'space-between' }}>
                <FaSuitcase />
                <FaEllipsisV />
            </div>

            <div style={{ height: '85%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', textAlign: 'center' }}>
                <img className='postUpdateFormImage' src={vic} alt="" />
                <h3>Kelly has a new job</h3>
                <p>Send him a congratulatory message for getting a new job</p>
                <button style={{ border: ' none', background: '#111', padding: '0.5rem 1rem', color: '#fff', borderRadius: '12px' }}>Write message</button>
            </div>
        </div>
    )
}

export default NewJob;