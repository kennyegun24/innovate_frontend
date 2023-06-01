import React, { useState, useEffect } from 'react'
import { FaHeart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { likeUnlikePost } from '../../redux/apiCalls'
import { getLikedStatus } from '../../redux/posts/postSlice'

const Likes = ({ count, liked, postId }) => {
  const { currentUser } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const [isLike, setIsLike] = useState({ liked: liked, count: count })
  const [trigger, setTrigger] = useState(null)

  const like = () => {
    setIsLike({
      liked: !isLike.liked,
      count: isLike.liked ? isLike.count - 1 : isLike.count + 1
    })
    setTrigger(true)
    likeUnlikePost(postId, currentUser?.data?.token)
  }

  useEffect(() => {
    if (trigger) {
      dispatch(getLikedStatus({ liked: isLike.liked, count: isLike.count, postId: postId }))
    }
  }, [trigger])

  return (
    <div className='flex align_center gap05rem'>
      <FaHeart style={{ color: isLike.liked ? 'red' : '#fff' }} className='pointer' onClick={like} />
      <p className='interractionsText'>{isLike.count} likes.</p>

    </div>
  )
}

export default Likes
