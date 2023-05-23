import React, { useEffect } from 'react'
import LeftNavbar from '../../components/homepage/LeftNavbar'
import MiddlePage from '../../components/homepage/MiddlePage'
import RightNavBar from '../../components/homepage/RightNavBar'
import NewJob from '../../components/newJob'
import { useDispatch } from 'react-redux'
import { getPosts } from '../../redux/posts/postSlice'

const Homepage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts())
    })
    return (
        <div style={{ display: 'flex', padding: '1.5rem 1rem 0 1rem', background: '#2F3B50', justifyContent: 'space-between', height: '100%', }}>
            <div style={{ width: '22%' }} >
                <LeftNavbar />
            </div>
            <div style={{ width: '50%' }}>
                <MiddlePage />
            </div>
            <div style={{ width: '22%', display: 'flex', flexDirection: 'column', gap: '2rem' }} >
                <RightNavBar />
                <NewJob />
            </div>
        </div>
    )
}

export default Homepage