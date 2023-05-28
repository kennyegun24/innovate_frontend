import React from 'react'
import { FaEllipsisV, FaGift, FaSuitcase } from 'react-icons/fa'
import vic from '../images/vic.jpg'
import './styles.css'

const Birthday = () => {
    return (
        <div className='birthdayMainDiv birthdayNewJobMainDiv white padding05rem width80'>
            <div className='flex justify_between padding1rem birthdayJobIconsDiv'>
                <FaGift />
                <FaEllipsisV />
            </div>

            <div className='flex column align_center textCenter justify_center gap1rem birthdayJobDivSm' >
                <img className='postUpdateFormImage' src={vic} alt="" />
                <h3>Today is Kenny's Birthday!</h3>
                <p className='font12'>Make his day special by wishing him a happy birthday</p>
                <button className='birthdayJobWishButton' style={{}}>Wish him!!</button>
            </div>
        </div>
    )
}

export default Birthday