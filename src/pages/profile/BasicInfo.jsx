import React from 'react'
import { FaBlog, FaEllipsisV, FaGraduationCap, FaLocationArrow, FaUsers } from 'react-icons/fa'
import './basicInfo.css'
import { useSelector } from 'react-redux'

const BasicInfo = () => {
    const { userDetails } = useSelector((state) => state.user)
    return (
        <div className='basicProfileInfo'>
            <div className='basicProfileTitleDiv'>
                <h4 className='font16 weight500'>Basic Informations</h4>
                <FaEllipsisV className='opacity05' />
            </div>

            <div className='basicProfileInfoDiv'>
                {
                    userDetails?.school
                    &&
                    <div className='basicProfileInfoDivSm'>
                        <div>
                            <h5>Studied at</h5>
                            <p className='opacity05 font12'>{userDetails?.school}</p>
                        </div>
                        <FaGraduationCap />
                    </div>
                }
                {
                    userDetails?.location &&
                    <>
                        <hr />
                        <div className='basicProfileInfoDivSm'>
                            <div>
                                <h5>Lives in</h5>
                                <p className='opacity05 font12'>{userDetails?.location}</p>
                            </div>
                            <FaLocationArrow />
                        </div>
                    </>
                }
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
                        <p className='opacity05 font12'>{userDetails?.posts_count}</p>
                    </div>
                    <FaBlog />
                </div>
            </div>
        </div>
    )
}

export default BasicInfo