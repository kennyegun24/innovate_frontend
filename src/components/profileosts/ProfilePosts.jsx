import React from 'react'
import { FaShare, FaEllipsisV } from 'react-icons/fa'
import Likes from '../interractions/Likes'
import Comments from '../interractions/Comments'

const ProfilePosts = ({ data }) => {

    return (
        <div style={{ width: '80%' }}>

            {data.map((each) => (
                <div className='postCardDiv' key={each.id}>
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