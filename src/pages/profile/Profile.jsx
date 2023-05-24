import React from 'react'
import BasicInfo from './BasicInfo'
import ProfilePosts from './ProfilePosts'
import './profile.css'
import ProfileHeader from './ProfileHeader'
import ProfileNav from './ProfileNav'

const UserProfile = () => {
    return (
        <div style={{ display: 'flex', overflow: 'hidden' }}>
            <div style={{ width: '25%', background: '#151A23' }}>
                <ProfileNav />
            </div>
            <div className='profileMainDiv'>
                <ProfileHeader />

                <div className='profileBasicPostsInfos'>
                    <div className='profileBasicInfoMainDiv'>
                        <BasicInfo />
                    </div>
                    <div className='ProfileAllPostsMainDiv'>
                        <div className='profilePostsHeaderDiv'>
                            <h4 className='font16 weight500'>Posts</h4>

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <button className='profilePostsButton'>Recent</button>
                                <button className='profilePostsButton'>Popular</button>
                            </div>
                        </div>
                        <ProfilePosts />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile