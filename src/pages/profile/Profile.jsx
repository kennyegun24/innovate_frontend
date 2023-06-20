import React, { useEffect } from 'react'
import BasicInfo from './BasicInfo'
import ProfilePosts from '../../components/profileosts/ProfilePosts'
import './profile.css'
import ProfileHeader from './ProfileHeader'
import ProfileNav from './ProfileNav'
import vic from '../../images/vic.jpg'
import image1 from '../../images/images.png'
import image2 from '../../images/Picture1.png'
import image3 from '../../images/noImage.png'
import image4 from '../../images/screen-0.jpg'
import image5 from '../../images/screen-3.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUserPost } from '../../redux/posts/postSlice'

const UserProfile = () => {

    const dispatch = useDispatch()
    const { allPosts } = useSelector((state) => state.allPosts)
    const { currentUser } = useSelector((state) => state.user)
    useEffect(() => {
        if (allPosts.length <= 0) {
            dispatch(getCurrentUserPost({ TOKEN: currentUser?.data?.token }))
        }
    }, [])
    return (
        <div style={{ display: 'flex', overflow: 'hidden' }}>
            <div style={{ width: '25%', background: '#151A23' }}>
                <ProfileNav />
            </div>
            <div className='profileMainDiv'>
                <ProfileHeader />

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
                        <ProfilePosts data={allPosts} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;