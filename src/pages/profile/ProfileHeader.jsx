import React from 'react'
import vic from '../../images/kenny.png'
import image from '../../images/screen-0.jpg'
import { AiOutlineEdit } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const ProfileHeader = () => {
    return (
        <>
            <img className='profileCoverImage' src={image} alt="" />

            <div className='profileUserDetails'>
                <div className='profileFirstBtnsDiv'>

                    <button className='profileTmAbBtns'>
                        Timeline
                    </button>

                    <button className='profileTmAbBtns'>
                        <Link to='/about' style={{ color: '#fff', textDecoration: 'none' }} >
                            About
                        </Link>
                    </button>
                </div>

                <div className='profileUserNameProfessionDetailsDiv'>
                    <img className='profileUserImage' src={vic} alt="" />
                    <div className='profileUserName'>
                        <h2>Kenny Egun</h2>
                        <p className='opacity05'>Software Developer</p>
                    </div>
                </div>

                <div className='profileFirstBtnsDiv'>
                    <button className='profileTmAbBtns'>
                        Friends
                    </button>

                    <button className='profileTmAbBtns'>
                        Photos
                    </button>
                </div>
            </div>

            <div className='profileFollowerEditDiv'>
                <div className='ProfileFollowersDiv'>
                    <h2>7K </h2>
                    <p className='opacity05'>Followers</p>
                </div>
                <button className='profileEditProfileButton'>
                    <AiOutlineEdit />
                    Edit Profile
                </button>
            </div>
        </>
    )
}

export default ProfileHeader