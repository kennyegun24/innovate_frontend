import React from 'react'
import image from '../../images/noImage.png'
import image1 from '../../images/musk.jpg'
import './blogContent.css'
import { Link } from 'react-router-dom'

const BlogContent = () => {
    const data = [
        {
            image: image,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsa repudiandae quasi. Excepturi voluptatibus sint quidem, necessitatibus fuga rem asperiores eos neque, libero voluptates inventore debitis natus, odio temporibus ad.',
            title: 'A new html page I created while starting web development',
            id: 1,
            userImage: image1,
            userName: 'Kenny',
            created_at: '1/1/2022',
            comments: 213
        },
        {
            image: image,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsa repudiandae quasi. Excepturi voluptatibus sint quidem, necessitatibus fuga rem asperiores eos neque, libero voluptates inventore debitis natus, odio temporibus ad.',
            title: 'My new html Page',
            userImage: image1,
            id: 2,
            userName: 'Elias',
            created_at: '1/1/2022',
            comments: 2132
        },
        {
            image: image,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsa repudiandae quasi. Excepturi voluptatibus sint quidem, necessitatibus fuga rem asperiores eos neque, libero voluptates inventore debitis natus, odio temporibus ad.',
            title: 'My new html Page',
            userImage: image1,
            id: 3,
            userName: 'Sam',
            created_at: '1/1/2022',
            comments: 3232
        },
        {
            image: image,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsa repudiandae quasi. Excepturi voluptatibus sint quidem, necessitatibus fuga rem asperiores eos neque, libero voluptates inventore debitis natus, odio temporibus ad.',
            title: 'My new html Page',
            userImage: image1,
            id: 4,
            userName: 'Sam',
            created_at: '1/1/2022',
            comments: 564
        },
        {
            image: image,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsa repudiandae quasi. Excepturi voluptatibus sint quidem, necessitatibus fuga rem asperiores eos neque, libero voluptates inventore debitis natus, odio temporibus ad.',
            title: 'My new html Page',
            userImage: image1,
            id: 5,
            userName: 'Sam',
            created_at: '1/1/2022',
            comments: 576
        },
        {
            image: image,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsa repudiandae quasi. Excepturi voluptatibus sint quidem, necessitatibus fuga rem asperiores eos neque, libero voluptates inventore debitis natus, odio temporibus ad.',
            title: 'My new html Page',
            userImage: image1,
            id: 6,
            userName: 'Sam',
            created_at: '1/1/2022',
            comments: 6876
        },
        {
            image: image,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsa repudiandae quasi. Excepturi voluptatibus sint quidem, necessitatibus fuga rem asperiores eos neque, libero voluptates inventore debitis natus, odio temporibus ad.',
            title: 'My new html Page',
            userImage: image1,
            id: 7,
            userName: 'Sam',
            created_at: '1/1/2022',
            comments: 577
        },
    ]
    return (
        <div className='blogContentMainDiv'>
            {data.map((each) => (
                <div key={each.id} style={{ display: 'flex', flexDirection: 'column', marginBottom: '2.5rem', gap: '1rem' }}>
                    <div className='blogUserPostImageDiv'>
                        <img className='blogUserPostImage' src={each.image} />
                    </div>
                    <Link to={`/blogs/${each.id}`} style={{ textAlign: 'center', color: '#5596E6', textDecoration: 'none', fontSize: '18px', fontWeight: 600 }}>{each.title.slice(0, 35)}...</Link>
                    <div className='blogTextPreviewDiv'>
                        <p className='blogTextPreview'>{each.desc.slice(0, 150)}...</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div className='blogNameTimePreview'>
                                <p>{each.userName}</p>
                                <p className='font14 opacity05'>{each.created_at}</p>
                            </div>
                            <div className='blogNameTimePreview'>
                                <p className='font14 opacity05'>{each.comments}. comments</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BlogContent
