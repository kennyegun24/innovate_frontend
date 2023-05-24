import React from 'react'
import { FaBlog, FaEllipsisV, FaGraduationCap, FaLocationArrow, FaUsers } from 'react-icons/fa'
import './basicInfo.css'

const BasicInfo = () => {
    return (
        <div className='basicProfileInfo' style={{}}>
            <div className='basicProfileTitleDiv' style={{}}>
                <h4 className='font16 weight500' style={{}}>Basic Informations</h4>
                <FaEllipsisV className='opacity05' style={{}} />
            </div>

            <div className='basicProfileInfoDiv' style={{}}>
                <div className='basicProfileInfoDivSm' style={{}}>
                    <div>
                        <h5>Studied at</h5>
                        <p className='opacity05 font12' style={{}}>Microverse school of software development</p>
                    </div>
                    <FaGraduationCap />
                </div>
                <hr />
                <div className='basicProfileInfoDivSm' style={{}}>
                    <div>
                        <h5>Lives in</h5>
                        <p className='opacity05 font12' style={{}}>Newyork City</p>
                    </div>
                    <FaLocationArrow />
                </div>
                <hr />
                <div className='basicProfileInfoDivSm' style={{}}>
                    <div>
                        <h5>Followers</h5>
                        <p className='opacity05 font12' style={{}}>288378 followers</p>
                    </div>
                    <FaUsers />
                </div>
                <hr />
                <div className='basicProfileInfoDivSm' style={{}}>
                    <div>
                        <h5>Amount of Posts</h5>
                        <p className='opacity05 font12' style={{}}>12 posts</p>
                    </div>
                    <FaBlog />
                </div>
            </div>
        </div>
    )
}

export default BasicInfo