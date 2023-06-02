import React from 'react'
import PostUpdate from '../homeComps/PostUpdate'
import PostCard from '../homeComps/PostCard'
import './middle.css'
import { useSelector } from 'react-redux'

const MiddlePage = () => {
    const { currentUser } = useSelector((state) => state.user)
    return (
        <div className='middlePageDiv' >
            {currentUser && <PostUpdate />}
            <PostCard />
        </div>
    )
}

export default MiddlePage