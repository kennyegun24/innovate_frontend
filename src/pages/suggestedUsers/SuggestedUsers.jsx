import React from 'react'
import SuggestedList from '../../components/suggestedUsers/SuggestedList'

const SuggestedUsers = () => {
    return (
        <div className='flex justify_center align_center' style={{ background: '#2F3B50', height: '90vh' }}>
            <SuggestedList />
        </div>
    )
}

export default SuggestedUsers
