import React from 'react'
import SuggestedFriends from '../rightComps/SuggestedFriends'
import NewJob from '../newJob'
import Birthday from '../Birthday'

const RightNavBar = () => {
    return (
        <>
            <Birthday />
            <div >
                <div className='suggestedFriendsMainDiv' >
                    <p className='white padding1rem suggestedPageHeaderText'>Suggested Users</p>
                    <SuggestedFriends />
                </div>
            </div>
        </>
    )
}

export default RightNavBar