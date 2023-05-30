import React, { useEffect } from 'react'
import LeftNavbar from '../../components/homepage/LeftNavbar'
import MiddlePage from '../../components/homepage/MiddlePage'
import RightNavBar from '../../components/homepage/RightNavBar'
import NewJob from '../../components/newJob'
import { useDispatch } from 'react-redux'
import { getPosts, getPostsForAuthUser } from '../../redux/posts/postSlice'
import './homepage.css'
import { useSelector } from 'react-redux'

const Homepage = () => {
    const { currentUser } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        !currentUser && dispatch(getPosts());
        currentUser && dispatch(getPostsForAuthUser())
    }, []);

    return (
        <div className='homepageMainDiv flex darkBlue justify_between height100'>
            <div style={{ width: '22%' }} >
                <LeftNavbar />
            </div>
            <div className='width50' >
                <MiddlePage />
            </div>
            <div className='flex column gap2rem' style={{ width: '22%' }} >
                <RightNavBar />
                <NewJob />
            </div>
        </div>
    )
}

export default Homepage