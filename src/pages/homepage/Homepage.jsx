import React, { useEffect, useState } from 'react'
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
    const { allPosts, pending, allPostsForAuthUser } = useSelector((state) => state.allPosts)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!currentUser && allPosts.length <= 0) {
            !currentUser && dispatch(getPosts());
        }
    }, []);

    useEffect(() => {
        if (currentUser && allPostsForAuthUser.length <= 0) {
            currentUser && dispatch(getPostsForAuthUser({
                TOKEN: currentUser?.data
            }))
        }
    }, [])

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

export default React.memo(Homepage);
