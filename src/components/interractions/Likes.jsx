import React, { useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { likeUnlikePost } from '../../redux/apiCalls'

const Likes = ({ count, liked, postId }) => {
    const { userDetails } = useSelector((state) => state.user)

    const [isLike, setIsLike] = useState({ liked: liked, count: count })

    // console.log(userDetails)

    const like = () => {
        // console.log(liked)
        // setIsLike(!isLike)
        setIsLike({
            liked: !isLike.liked,
            count: liked ? isLike.count - 1 : isLike.count + 1
        })
        likeUnlikePost(postId)
    }

    return (
        <div className='flex align_center gap05rem'>
            <FaHeart style={{ color: isLike.liked ? 'red' : '#fff' }} className='pointer' onClick={like} />
            <p className='interractionsText'>{isLike.count} likes.</p>

        </div>
    )
}

export default Likes