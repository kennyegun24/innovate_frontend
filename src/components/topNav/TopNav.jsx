import React from 'react'
import { FaBell, FaHeart, FaInbox, FaMailchimp } from 'react-icons/fa'
import { BiMessage } from 'react-icons/bi'
import { AiOutlineMail, AiOutlineHeart } from 'react-icons/ai'
import { BsBell } from 'react-icons/bs'
import './topnav.css'
import noImage from '../../images/noImage.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const TopNav = () => {
    const { currentUser, userDetails } = useSelector((state) => state.user)
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
                        <img src={currentUser ? userDetails?.image : noImage} className='postUpdateFormImage' alt="" />
                        <div className='topNavImageOnlineStatus' />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default TopNav;