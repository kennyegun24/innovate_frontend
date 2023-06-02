import React from 'react'
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

const UserProfile = () => {
    const data = [
        {
            Image: vic,
            name: 'Kenny Egun',
            career: 'Software Developer',
            post: 'He went to the hospital to get bread and beans, but unfortunately for him, he found out that the orange behide the mango tree was bringing forth some bananas which he needed to heal the sick catfish behind the volcanic rock.',
            postImage: vic,
            likes: '2274666 likes.',
            comment: '23298 comments.',
            id: 1,
        },
        {
            Image: image1,
            name: 'Samuel',
            career: 'Frontend Developer at GT. Bank',
            post: 'He went to the hospital to get bread and beans, but unfortunately for him, he found out that the orange behide the mango tree was bringing forth some bananas which he needed to heal the sick catfish behind the volcanic rock.',
            postImage: image1,
            likes: '78 likes.',
            comment: '24 comments.',
            id: 2,
        },
        {
            Image: image2,
            name: 'Donald Trump',
            career: 'Ex. President',
            post: 'He went to the hospital to get bread and beans, but unfortunately for him, he found out that the orange behide the mango tree was bringing forth some bananas which he needed to heal the sick catfish behind the volcanic rock.',
            postImage: image2,
            likes: '2242424 likes.',
            comment: '224 comments.',
            id: 3,
        },
        {
            Image: image3,
            name: 'Elon Musk',
            career: 'World Richest Man',
            post: 'He went to the hospital to get bread and beans, but unfortunately for him, he found out that the orange behide the mango tree was bringing forth some bananas which he needed to heal the sick catfish behind the volcanic rock.',
            postImage: image3,
            likes: '232323227 likes.',
            comment: '245353 comments.',
            id: 4,
        },
        {
            Image: image4,
            name: 'Kim Jun Yun',
            career: 'Supreme Ruler',
            post: 'He went to the hospital to get bread and beans, but unfortunately for him, he found out that the orange behide the mango tree was bringing forth some bananas which he needed to heal the sick catfish behind the volcanic rock.',
            postImage: image4,
            likes: '23 likes.',
            comment: '2 comments.',
            id: 5,
        },
        {
            Image: image5,
            name: 'School Daddy',
            career: 'School',
            post: 'He went to the hospital to get bread and beans, but unfortunately for him, he found out that the orange behide the mango tree was bringing forth some bananas which he needed to heal the sick catfish behind the volcanic rock.',
            postImage: image5,
            likes: '232 likes.',
            comment: '25 comments.',
            id: 6,
        },
    ]
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
                        <ProfilePosts data={data} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;