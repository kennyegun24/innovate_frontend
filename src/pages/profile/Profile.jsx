import React, { useEffect } from 'react'
import BasicInfo from './BasicInfo'
import ProfilePosts from '../../components/profileosts/ProfilePosts'
import './profile.css'
import ProfileHeader from './ProfileHeader'
import ProfileNav from './ProfileNav'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUserPost } from '../../redux/auth_redux/post/post'

const UserProfile = () => {

    const dispatch = useDispatch()
    const { currentUserPosts } = useSelector((state) => state.authPost)
    const { currentUser, userDetails } = useSelector((state) => state.user)
    useEffect(() => {
        if (currentUserPosts.length <= 0) {
            dispatch(getCurrentUserPost({ TOKEN: currentUser?.data?.token }))
        }
    }, [])
    return (
        <div style={{ display: 'flex', overflow: 'hidden', width: '100%' }}>
            <div className='profileMainDiv'>
                <ProfileHeader data={userDetails} />

                <div className='profileBasicPostsInfos'>
                    <div className='profileBasicInfoMainDiv'>
                        <BasicInfo />
                    </div>
                    <div className='ProfileAllPostsMainDiv'>
                        <div className='profilePostsHeaderDiv'>
                            <h4 className='font16 weight500'>Posts</h4>

                            <div className='flex gap1rem'>
                                <button className='profilePostsButton'>Recent</button>
                                <button className='profilePostsButton'>Popular</button>
                            </div>
                        </div>
                        <ProfilePosts data={currentUserPosts} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;
