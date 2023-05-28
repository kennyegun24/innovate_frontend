import React from 'react'
import { FaBlog, FaEllipsisV, FaGraduationCap, FaLocationArrow, FaUsers } from 'react-icons/fa'
import './basicInfo.css'

const BasicInfo = () => {
    return (
        <div className='basicProfileInfo'>
            <div className='basicProfileTitleDiv'>
                <h4 className='font16 weight500'>Basic Informations</h4>
                <FaEllipsisV className='opacity05' />
            </div>

            <div className='basicProfileInfoDiv'>
                <div className='basicProfileInfoDivSm'>
                    <div>
                        <h5>Studied at</h5>
                        <p className='opacity05 font12'>Microverse school of software development</p>
                    </div>
                    <FaGraduationCap />
                </div>
                <hr />
                <div className='basicProfileInfoDivSm'>
                    <div>
                        <h5>Lives in</h5>
                        <p className='opacity05 font12'>Newyork City</p>
                    </div>
                    <FaLocationArrow />
                </div>
                <hr />
                <div className='basicProfileInfoDivSm'>
                    <div>
                        <h5>Followers</h5>
                        <p className='opacity05 font12'>288378 followers</p>
                    </div>
                    <FaUsers />
                </div>
                <hr />
                <div className='basicProfileInfoDivSm'>
                    <div>
                        <h5>Amount of Posts</h5>
                        <p className='opacity05 font12'>12 posts</p>
                    </div>
                    <FaBlog />
                </div>
            </div>
        </div>
    )
}

export default BasicInfo