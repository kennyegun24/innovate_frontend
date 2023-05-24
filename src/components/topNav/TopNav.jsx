import React from 'react'
import { FaBell, FaHeart, FaInbox, FaMailchimp } from 'react-icons/fa'
import { BiMessage } from 'react-icons/bi'
import { AiOutlineMail, AiOutlineHeart } from 'react-icons/ai'
import { BsBell } from 'react-icons/bs'
import './topnav.css'
import vic from '../../images/vic.jpg'
import { Link } from 'react-router-dom'

const TopNav = () => {
    return (
        <div style={{ height: '10vh', zIndex: 1, position: 'sticky', top: '0', background: '#151A23', padding: '0.5rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', }}>
                <AiOutlineHeart className='icons' />
                <BsBell className='icons' />
                <AiOutlineMail className='icons' />
                <BiMessage className='icons' />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', width: '40%' }}>
                <input type="text" placeholder='Search.....' style={{ borderRadius: '16px', background: '#283143', border: '1px solid #111', padding: '0.5rem', width: '100%' }} />
                <Link to='/userprofile'>
                    <div style={{ position: 'relative' }} >
                        <img src={vic} className='postUpdateFormImage' alt="" />
                        <div style={{ position: 'absolute', right: '0', top: '0', height: '10px', width: '10px', background: '#00ff00', borderRadius: '50%' }} />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default TopNav;