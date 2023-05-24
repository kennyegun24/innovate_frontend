import React from 'react'
import vic from '../../images/vic.jpg'
import image1 from '../../images/images.png'
import image2 from '../../images/Picture1.png'
import image3 from '../../images/noImage.png'
import image4 from '../../images/screen-0.jpg'
import image5 from '../../images/screen-3.jpg'
import { FaShare, FaEllipsisV } from 'react-icons/fa'
import Comments from '../../components/comments/Comments'
import Likes from '../../components/likes/Likes'

const ProfilePosts = () => {
    const data = [
        {
            Image: vic,
            name: 'Kenny Egun',
            career: 'Software Developer',
            post: 'He went to the hospital to get bread and beans, but unfortunately for him, he found out that the orange behide the mango tree was bringing forth some bananas which he needed to heal the sick catfish behind the volcanic rock.',
            postImage: vic,
            likes: '2274666 likes.',
            comment: '23298 comments.'
        },
        {
            Image: image1,
            name: 'Samuel',
            career: 'Frontend Developer at GT. Bank',
            post: 'He went to the hospital to get bread and beans, but unfortunately for him, he found out that the orange behide the mango tree was bringing forth some bananas which he needed to heal the sick catfish behind the volcanic rock.',
            postImage: image1,
            likes: '78 likes.',
            comment: '24 comments.'
        },
        {
            Image: image2,
            name: 'Donald Trump',
            career: 'Ex. President',
            post: 'He went to the hospital to get bread and beans, but unfortunately for him, he found out that the orange behide the mango tree was bringing forth some bananas which he needed to heal the sick catfish behind the volcanic rock.',
            postImage: image2,
            likes: '2242424 likes.',
            comment: '224 comments.'
        },
        {
            Image: image3,
            name: 'Elon Musk',
            career: 'World Richest Man',
            post: 'He went to the hospital to get bread and beans, but unfortunately for him, he found out that the orange behide the mango tree was bringing forth some bananas which he needed to heal the sick catfish behind the volcanic rock.',
            postImage: image3,
            likes: '232323227 likes.',
            comment: '245353 comments.'
        },
        {
            Image: image4,
            name: 'Kim Jun Yun',
            career: 'Supreme Ruler',
            post: 'He went to the hospital to get bread and beans, but unfortunately for him, he found out that the orange behide the mango tree was bringing forth some bananas which he needed to heal the sick catfish behind the volcanic rock.',
            postImage: image4,
            likes: '23 likes.',
            comment: '2 comments.'
        },
        {
            Image: image5,
            name: 'School Daddy',
            career: 'School',
            post: 'He went to the hospital to get bread and beans, but unfortunately for him, he found out that the orange behide the mango tree was bringing forth some bananas which he needed to heal the sick catfish behind the volcanic rock.',
            postImage: image5,
            likes: '232 likes.',
            comment: '25 comments.'
        },
    ]
    return (
        <div style={{ width: '80%' }}>

            {data.map((each) => (
                <div className='postCardDiv'>
                    <div className='flxCnterBtwn'>
                        <div className='postUserInfo'>
                            <img src={each.Image} className='postUpdateFormImage' alt="" />
                            <div>
                                <p className='font14 weight700'  >{each.name}</p>
                                <p className='font12' >{each.career}</p>
                            </div>
                        </div>
                        <FaEllipsisV />
                    </div>
                    <p className='font14'>
                        {each.post}
                    </p>
                    <div className='postImageDiv'>
                        <img className='postImage' src={each.postImage} alt="" />
                    </div>
                    <div className='interractionDiv'>
                        <div className='interractionsDivSm'>
                            <Likes />
                            <FaShare />
                            <Comments />
                        </div>
                        <div className='interractionsDivSm'>
                            <p className='interractionsText'>{each.comment}</p>
                            <p className='interractionsText'>{each.likes}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProfilePosts