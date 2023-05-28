import React from 'react'
import { FaEllipsisV, FaGift, FaSuitcase } from 'react-icons/fa'
import vic from '../images/kenny.png'

const NewJob = () => {
    return (
        <div className='newJobMainDiv birthdayNewJobMainDiv white padding05rem width80'>
            <div className='flex justify_between padding1rem birthdayJobIconsDiv'>

                <FaSuitcase />
                <FaEllipsisV />
            </div>

            <div className='flex column align_center textCenter justify_center gap1rem birthdayJobDivSm' >
                <img className='postUpdateFormImage' src={vic} alt="" />
                <h3>Kelly has a new job</h3>
                <p className='font12'>Send him a congratulatory message for getting a new job</p>
                <button className='birthdayJobWishButton'>Write message</button>
            </div>
        </div>
    )
}

export default NewJob;