import React from 'react'
import ProfileNav from '../profile/ProfileNav'
import ProfileHeader from '../profile/ProfileHeader'
import FriendList from '../../components/friends/FriendList'

const Friends = () => {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: '25%' }}>
                <ProfileNav />
            </div>
            <div className='profileMainDiv' >
                <ProfileHeader />

                <FriendList />
            </div>

        </div>
    )
}

export default Friends