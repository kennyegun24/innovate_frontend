import React from 'react'
import { FaBell, FaHeart, FaInbox, FaMailchimp } from 'react-icons/fa'
import { BiHomeHeart, BiMessage, BiShoppingBag } from 'react-icons/bi'
import { AiOutlineMail, AiOutlineHeart } from 'react-icons/ai'
import { BsBell, BsTwitter } from 'react-icons/bs'
import './topnav.css'
import noImage from '../../images/noImage.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { SlBriefcase } from 'react-icons/sl'

const TopNav = () => {
    const { currentUser, userDetails } = useSelector((state) => state.user)
    return (
        <div className='topNavMainDiv mainBackground justify_between align_center flex'>
            <div className='flex align_center gap15rem' >
                <Link to='/'><BiHomeHeart className='icons' /></Link>
                <AiOutlineHeart className='icons' />
                <BsBell className='icons' />
                <AiOutlineMail className='icons' />
                <BiMessage className='icons' />
                <Link to='/store'><BiShoppingBag className='icons' /></Link>
                <Link to='/jobs'><SlBriefcase className='icons' /></Link>
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
