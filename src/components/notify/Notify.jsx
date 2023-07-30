import React from 'react'
import { FaThumbsUp } from 'react-icons/fa'
import image1 from '../../images/noImage.png'
import image2 from '../../images/musk.jpg'
import image3 from '../../images/vic.jpg'
import image4 from '../../images/Picture1.png'
import image5 from '../../images/gates.jpg'
import image6 from '../../images/kim.jpg'
import image7 from '../../images/trump.png'
import image8 from '../../images/images.png'

const Notify = () => {
    const data = [
        {
            name: 'Kenny Elias',
            time: '13hr',
            action: 'comment',
            image: image4
        },
        {
            name: 'Margaret Flores',
            time: '20hr',
            action: 'liked',
            image: image4
        },
        {
            name: 'Russell Ray',
            time: '14hr',
            action: 'liked',
            image: image1
        },
        {
            name: 'Ivan Terry',
            time: '2hr',
            action: 'liked',
            image: image2
        },
        {
            name: 'Luis Norton',
            time: '7hr',
            action: 'comment',
            image: image3
        },
        {
            name: 'Gene Young',
            time: '7hr',
            action: 'liked',
            image: image3
        },
        {
            name: 'Della Wheeler',
            time: '13hr',
            action: 'comment',
            image: image3
        },
        {
            name: 'Roxie Schwartz',
            time: '12hr',
            action: 'comment',
            image: image2
        },
        {
            name: 'Gavin Pratt',
            time: '2hr',
            action: 'liked',
            image: image8
        },
        {
            name: 'Katherine Roberts',
            time: '13hr',
            action: 'liked',
            image: image6
        },
        {
            name: 'Willie Rhodes',
            time: '13hr',
            action: 'comment',
            image: image3
        },
        {
            name: 'Dylan Ryan',
            time: '20hr',
            action: 'liked',
            image: image8
        },
        {
            name: 'Mae Watson',
            time: '12hr',
            action: 'comment',
            image: image7
        },
        {
            name: 'Verna Bryan',
            time: '14hr',
            action: 'liked',
            image: image4
        },
        {
            name: 'Kathryn Barnett',
            time: '13hr',
            action: 'comment',
            image: image3
        },
        {
            name: 'Marion Burton',
            time: '20hr',
            action: 'liked',
            image: image4
        },
        {
            name: 'Shawn Walker',
            time: '20hr',
            action: 'liked',
            image: image5
        },
        {
            name: 'Bill Moreno',
            time: '13hr',
            action: 'liked',
            image: image6
        },
        {
            name: 'Cory Moran',
            time: '14hr',
            action: 'comment',
            image: image5
        },
    ]
    return (
        <div style={{ width: '45%', color: '#fff', overflowY: 'auto', height: '90%', }} className='scrollBar padding1rem flex column gap2rem'>
            {
                data.map((notification) => (
                    <div style={{}} className='flex align_center justify_between  pointer'>
                        {/* <FaThumbsUp style={{ fontSize: '30px'}} /> */}
                        <div className='flex align_center gap1rem'>
                            <img src={notification.image} style={{ height: '50px', width: '50px', objectFit: 'cover' }} alt="" />
                            <p style={{ fontSize: '16px', fontWeight: 500 }}>{notification.name} just {notification.action} your post</p>
                        </div>
                        <p className='font12 opacity05'>{notification.time}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Notify;
