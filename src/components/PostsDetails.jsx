import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
// import { getOnePostForAuthUser, getPost } from '../redux/posts/postSlice'
import { getOnePostForAuthUser } from '../redux/auth_redux/post/post'
import { getOnePostForUnAuthUser } from '../redux/unauth_edux/posts/postSlice'
import { FaEllipsisV, FaShare } from 'react-icons/fa'
import Comments from './interractions/Comments'
import Likes from './interractions/Likes'
import moment from 'moment'
import PostComments from './comments/Comments'
import PostDetailsLoader from './loadingAnimation/PostDetailsLoader'
import ImagePreview from './postimageshow/ImagePreview'

const PostsDetails = () => {
  const [more, setMore] = useState(false)
  const [preview, setPreview] = useState(false)
  const [modal, setModal] = useState({})
  const [post, setPost] = useState({})
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  const { onePostForUnAuthUser, pending } = useSelector((state) => state.unAuthPost)
  const { onePostForAuthUser } = useSelector((state) => state.authPost)
  const { currentUser } = useSelector((state) => state.user)

  const split = pathname.split('/')
  const getId = split[split.length - 1]

  useEffect(() => {
    !currentUser && dispatch(getOnePostForUnAuthUser(getId))
    currentUser && dispatch(getOnePostForAuthUser({
      TOKEN: currentUser?.data?.token,
      id: getId
    }))
  }, [getId])

  useEffect(() => {
    if (preview) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [preview]);

  useEffect(() => {
    currentUser ? setPost(onePostForAuthUser) : setPost(onePostForUnAuthUser)
  }, [currentUser, onePostForAuthUser, onePostForUnAuthUser])

  const formatDate = post?.created_at
  const formattedDate = moment(formatDate).fromNow()
  console.log(post?.likes_count)
  return (
    <div style={{ background: '#2F3B50', minHeight: '90vh', gap: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0.1rem 1rem 1.5rem 1rem', }}>

      {preview && <ImagePreview img={modal.image} creator={modal.author} text={modal.text} setPreview={setPreview} />}
      {
        pending ?
          (
            <PostDetailsLoader />
          )
          :
          (
            <>

              <div style={{ width: '45%', borderBottomLeftRadius: '0', borderBottomRightRadius: '0' }} className='postCardDiv'>
                {post?.image && <div className='postImageDiv'>
                  <img className='postImage pointer' onClick={() => { setPreview(true); setModal({ text: post?.text, image: post?.image, author: post?.creator_name }) }} src={post?.image} alt="" />
                </div>}
                <div className='flxCnterBtwn'>
                  <div className='postUserInfo'>
                    <img src={post?.creator_image} className='postUpdateFormImage' alt="" />
                    <div>
                      <p className='font14 weight700'  >{post?.creator_name}</p>
                      <p className='font12 opacity05' >{formattedDate}</p>
                    </div>
                  </div>
                  <FaEllipsisV />
                </div>
                < >
                  {
                    post?.text?.length >= 150 && !more ?
                      (
                        <>
                          <p className='font14' >{post?.text.slice(0, 100)}</p>
                          <p onClick={() => setMore(true)} className='font12 pointer opacity05'>Read more...</p>
                        </>
                      )
                      :
                      (
                        <p className='font14'>{post?.text}</p>
                      )
                  }
                </>
                <div className='interractionDiv'>
                  <div className='interractionsDivSm'>
                    <Likes count={post?.likes_count} liked={post?.liked} postId={post?.id} />
                    <FaShare />
                    <Comments />
                  </div>
                  <p>{post?.likes_count}</p>
                  <div className='interractionsDivSm'>
                    <p className='interractionsText'>{post?.comments_count} comments.</p>
                  </div>
                </div>
              </div>

              <div style={{ width: '45%', background: '#fff', display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '0.5rem', borderRadius: '6px' }}>
                <textarea rows={5} style={{ width: '100%', padding: '1rem', border: 'none', borderBottom: '1px solid #111' }} placeholder='Post a comment' />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                  <div className='postUpdateBottomNav' >
                    {/* <TfiGallery /> */}
                    <button className='font12' style={{ border: 'none', background: 'none', color: '#fff' }} >Post Comment</button>
                  </div>

                </div>
              </div>

              <div style={{ width: '45%' }}>
                <PostComments />
              </div>
            </>
          )
      }
    </div >
  )
}

export default PostsDetails
