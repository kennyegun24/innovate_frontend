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
        <div className='topNavMainDiv mainBackground justify_between align_center flex'>
            <div className='flex align_center gap15rem' >
                <AiOutlineHeart className='icons' />
                <BsBell className='icons' />
                <AiOutlineMail className='icons' />
                <BiMessage className='icons' />
            </div>
            <div className='flex align_center gap15rem topNavSearchDiv' >
                <input className='width100 padding05rem topNavSearchInput' type="text" placeholder='Search.....' />
                <Link to='/userprofile'>
                    <div style={{ position: 'relative' }} >
                        <img src={vic} className='postUpdateFormImage' alt="" />
                        <div className='topNavImageOnlineStatus' />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default TopNav;