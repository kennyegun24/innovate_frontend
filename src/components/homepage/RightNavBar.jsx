import React from 'react'
import SuggestedFriends from '../rightComps/SuggestedFriends'
import NewJob from '../newJob'
import Birthday from '../Birthday'

const RightNavBar = () => {
    return (
        <>
            <Birthday />
            <div >
                <div style={{ background: '#202836', height: 'fit-content', width: '80%', borderRadius: '12px', overflow: 'hidden' }}>
                    <p style={{ color: '#fff', padding: '1rem', borderBottom: '1px solid #111', opacity: '0.5' }}>Suggested Users</p>
                    <SuggestedFriends />
                </div>
            </div>
        </>
    )
}

export default RightNavBar