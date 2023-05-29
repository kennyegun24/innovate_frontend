import React, { useEffect } from 'react'
import LeftNavbar from '../../components/homepage/LeftNavbar'
import MiddlePage from '../../components/homepage/MiddlePage'
import RightNavBar from '../../components/homepage/RightNavBar'
import NewJob from '../../components/newJob'
import { useDispatch } from 'react-redux'
import { getPosts } from '../../redux/posts/postSlice'
import './homepage.css'
import { getCurrentUserDetails } from '../../redux/user/userSlice'

const Homepage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts());
    }, []);

    useEffect(() => {
        dispatch(getCurrentUserDetails());
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