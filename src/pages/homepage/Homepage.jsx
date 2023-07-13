import React, { useEffect, useState } from 'react'
import LeftNavbar from '../../components/homepage/LeftNavbar'
import MiddlePage from '../../components/homepage/MiddlePage'
import RightNavBar from '../../components/homepage/RightNavBar'
import NewJob from '../../components/newJob'
import { useDispatch } from 'react-redux'
import { getPostsForUnAuthUser } from '../../redux/unauth_edux/posts/postSlice'
import { getPostsForAuthUser } from '../../redux/auth_redux/post/post'
import './homepage.css'
import { useSelector } from 'react-redux'

const Homepage = () => {
    const { currentUser } = useSelector((state) => state.user)
    const { allPostsUnAuthUser, pending, } = useSelector((state) => state.unAuthPost)
    const { allPostsForAuthUser } = useSelector(state => state.authPost)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!currentUser) {
            allPostsUnAuthUser.length <= 0 && dispatch(getPostsForUnAuthUser());
        }
    }, [currentUser]);

    useEffect(() => {
        if (currentUser) {
            allPostsForAuthUser.length <= 0 && dispatch(getPostsForAuthUser({
                TOKEN: currentUser?.data?.token
            }))
        }
    }, [currentUser])

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
