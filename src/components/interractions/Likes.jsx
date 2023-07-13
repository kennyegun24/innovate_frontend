import React, { useState, useEffect } from 'react'
import { FaHeart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { likeUnlikePost } from '../../redux/apiCalls'
import { getLikedStatus } from '../../redux/auth_redux/post/post'

const Likes = ({ count, liked, postId }) => {
  const { currentUser } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  console.log(count)
  console.log(liked)
  const [isLike, setIsLike] = useState({})
  useEffect(() => {
    setIsLike({
      liked: liked,
      count: count
    })
  }, [count, liked])
  const [trigger, setTrigger] = useState(null)

  const like = () => {
    setIsLike({
      liked: !isLike.liked,
      count: isLike.liked ? isLike.count - 1 : isLike.count + 1
    })
    setTrigger(true)
    likeUnlikePost(postId, currentUser?.data?.token)
  }
  console.log(isLike)

  useEffect(() => {
    if (trigger) {
      dispatch(getLikedStatus({ liked: isLike.liked, count: isLike.count, postId: postId }))
    }
  }, [trigger])

  return (
    <div className='flex align_center gap05rem'>
      <FaHeart style={{ color: isLike.liked ? 'red' : '#fff' }} className='pointer' onClick={currentUser && like} />
      <p className='interractionsText'>{isLike.count} likes.</p>

    </div>
  )
}

export default Likes
