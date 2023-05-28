import React from 'react'
import vic from '../../images/vic.jpg'
import image1 from '../../images/kenny.png'
import image2 from '../../images/noImage.png'
import image3 from '../../images/screen-0.jpg'
import image4 from '../../images/screen-3.jpg'
import { FaBookmark, FaTag, FaUserPlus } from 'react-icons/fa'
import './style.css'

const SuggestedFriends = () => {
    const data = [
        {
            image: vic,
            name: 'Jon Doe',
            profession: 'MERN Developer'
        },
        {
            image: image1,
            name: 'Peter Pete',
            profession: 'Backend Developer'
        },
        {
            image: image2,
            name: 'Jon Snow',
            profession: 'FullStack Developer'
        },
        {
            image: image3,
            name: 'Sapa Bien',
            profession: 'Java Developer'
        },
        {
            image: image4,
            name: 'Sam Lateef',
            profession: 'Ruby on Rails Developer'
        },
    ]
    return (
        <>
            {
                data.map((each) => (
                    <div className='white flex align_center justify_between suggestedFriendsPagesMainDiv' style={{}}>
                        <div className='flex align_center gap05rem'>
                            <img src={each.image} className='postUpdateFormImage' alt="" />
                            <div>
                                <p className='font14 weight700'>{each.name}</p>
                                <p className='font12 opacity05'>{each.profession}</p>
                            </div>
                        </div>
                        <FaUserPlus />
                    </div>
                ))
            }
        </>
    )
};

export default SuggestedFriends;