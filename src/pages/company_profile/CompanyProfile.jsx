import React, { useEffect } from 'react'
import ProfileNav from '../profile/ProfileNav'
import ProfileHeader from './ProfileHeader'
import BasicInfo from './BasicInfo'
import ProfilePosts from '../../components/profileosts/ProfilePosts'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUserPost } from '../../redux/auth_redux/post/post'
import otherUser, { getOtherUserDetails, getOtherUserPosts } from '../../redux/auth_redux/otherUser/otherUser'
import './styles.css'
const CompanyProfile = () => {
    const dispatch = useDispatch()
    const { otherUserPosts, otherUserDetails } = useSelector((state) => state.otherUserPosts_auth)
    const { currentUser } = useSelector((state) => state.user)
    const link = document.location.pathname
    const userId = link.split('/')[3]
    useEffect(() => {
        dispatch(getOtherUserPosts({ TOKEN: currentUser?.data?.token, id: userId }))
        if (currentUser) {
            dispatch(getOtherUserDetails({ TOKEN: currentUser?.data?.token, id: userId }))
        }
    }, [currentUser, userId])

    return (
        <div style={{ display: 'flex', overflow: 'hidden' }}>
            <div className='profileMainDiv'>
                <ProfileHeader data={otherUserDetails} />

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
                        <ProfilePosts data={otherUserPosts} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyProfile
