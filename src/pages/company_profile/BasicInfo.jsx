import React from 'react'
import { FaBlog, FaEllipsisV, FaGraduationCap, FaLocationArrow, FaSuitcase, FaUsers } from 'react-icons/fa'
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
                <div className='basicProfileInfoDivSm'>
                    <div>
                        <h5>Industry</h5>
                        <p className='opacity05 font12'>Entertainment</p>
                    </div>
                    <FaGraduationCap />
                </div>
                <>
                    <hr />
                    <div className='basicProfileInfoDivSm'>
                        <div>
                            <h5>Company Location</h5>
                            <p className='opacity05 font12'>Tokyo</p>
                        </div>
                        <FaLocationArrow />
                    </div>
                </>
                <>
                    <hr />
                    <div className='basicProfileInfoDivSm'>
                        <div>
                            <h5>Number of employees</h5>
                            <p className='opacity05 font12'>200+</p>
                        </div>
                        <FaUsers />
                    </div>
                </>
                <hr />
                <div className='basicProfileInfoDivSm'>
                    <div>
                        <h5>Number of open jobs</h5>
                        <p className='opacity05 font12'>10</p>
                    </div>
                    <FaSuitcase />
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
                        <h5>Number of Posts</h5>
                        <p className='opacity05 font12'>{userDetails?.posts_count}</p>
                    </div>
                    <FaBlog />
                </div>
            </div>
        </div>
    )
}

export default BasicInfo
