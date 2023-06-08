import React from 'react'
import PostUpdate from '../homeComps/PostUpdate'
import PostCard from '../homeComps/PostCard'
import './middle.css'

const MiddlePage = () => {
    return (
        <div className='middlePageDiv' >
            <PostUpdate />
            <PostCard />
        </div>
    )
}

export default MiddlePage