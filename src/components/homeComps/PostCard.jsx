import React, { useState, useEffect, useCallback } from 'react'
import image5 from '../../images/screen-3.jpg'
import { FaShare, FaEllipsisV } from 'react-icons/fa'
import Likes from '../interractions/Likes'
import Comments from '../interractions/Comments'
import { useSelector } from 'react-redux'
import './postcard.css'
import moment from 'moment'
import { useNavigate } from 'react-router-dom';
import PostsLoader from '../loadingAnimation/PostsLoader'
import LazyImage from '../lazyimage/LazyImage'
import ImagePreview from '../postimageshow/ImagePreview'
import PostOptions from '../interractions/PostOptions'

const PostCard = () => {

  const { allPosts, allPostsForAuthUser, pending } = useSelector((state) => state.allPosts)
  const { currentUser } = useSelector((state) => state.user)
  const [toggle, setToggle] = useState(
    () => {
      if (!currentUser && (allPosts && allPosts.length > 0)) {
        return Array(allPosts.length).fill(false);
      } else if (currentUser && allPostsForAuthUser && allPostsForAuthUser.length > 0) {
        return Array(allPostsForAuthUser.length).fill(false);
      }
      return [];
    }
  )

  const [preview, setPreview] = useState(false)
  const [modal, setModal] = useState({})

  const navigate = useNavigate()

  const postDetails = useCallback(
    (post) => {
      navigate(`/post_details/${post.id}`);
    },
    [navigate]
  );

  const toggleMore = (index) => {
    setToggle((previousState) => {
      const newState = [...previousState];
      if (newState[index] === undefined) {
        newState[index] = false;
      }
      newState[index] = true

      return newState
    })
  }

  const ReadMore = React.memo(({ index }) => {
    return (
      <p className='font12 opacity05 pointer' onClick={() => toggleMore(index)}>Read more... </p>
    )
  })
  useEffect(() => {
    if (preview) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [preview]);

  return (
    <>
      {
        !currentUser ?
          (
            pending === 'pending no auth user' ?
              (
                <div style={{ width: '100%' }}>
                  <PostsLoader />
                </div>
              )
              :
              (
                <>
                  {preview && <ImagePreview img={modal.image} creator={modal.author} text={modal.text} setPreview={setPreview} />}
                  {allPosts?.map((each, index) => {
                    const {
                      creator_name,
                      creator_image,
                      likes_count,
                      comments_count,
                      text,
                      image,
                      created_at,
                      id,
                      liked
                    } = each
                    const formatDate = created_at
                    const formattedDate = moment(formatDate).fromNow()
                    return (
                      <div className='postCardDiv' key={index}>
                        <div className='flxCnterBtwn'>
                          <div className='postUserInfo'>
                            <img src={creator_image} className='postUpdateFormImage' alt="" />
                            <div>
                              <p className='font14 weight700'  >{creator_name}</p>
                              <p className='font12 opacity05' >{formattedDate}</p>
                            </div>
                          </div>
                          <PostOptions />
                        </div>
                        <div className='font14' >
                          {text && !toggle[index] && text.length >= 150 ? (
                            <>
                              <p className='font14 pointer hover' onClick={() => postDetails(each)}>{text.slice(0, 100)}...</p>
                              <ReadMore index={index} />
                            </>
                          ) : (
                            <p className='font14 pointer hover line_breaks' onClick={() => postDetails(each)}>{text}</p>
                          )}
                        </div>
                        {
                          image && <div className='postImageDiv' onClick={() => setModal({ image: image, author: creator_name, text: text })}>
                            <LazyImage image={image} setPreview={setPreview} />
                          </div>
                        }
                        <div className='interractionDiv'>
                          <div className='interractionsDivSm'>
                            <Likes count={likes_count} liked={liked} postId={id} />
                            <FaShare />
                            <Comments />
                          </div>
                          <div className='interractionsDivSm'>
                            <p className='interractionsText'>{comments_count} comments.</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </>
              )
          )
          :
          (
            pending === 'pending and auth user' ?
              (
                <div style={{ width: '100%' }}>
                  <PostsLoader />
                </div>
              )
              :
              (
                <>
                  {preview && <ImagePreview img={modal.image} creator={modal.author} text={modal.text} setPreview={setPreview} />}
                  {allPostsForAuthUser?.map((each, index) => {
                    const {
                      creator_name,
                      creator_image,
                      likes_count,
                      comments_count,
                      text,
                      image,
                      created_at,
                      id,
                      liked,
                      author_id
                    } = each
                    const formatDate = created_at
                    const formattedDate = moment(formatDate).fromNow()
                    return (
                      <div className='postCardDiv' key={index}>
                        <div className='flxCnterBtwn'>
                          <div className='postUserInfo'>
                            <img src={creator_image} className='postUpdateFormImage' alt="" />
                            <div>
                              <p className='font14 weight700'  >{creator_name}</p>
                              <p className='font12 opacity05' >{formattedDate}</p>
                            </div>
                          </div>
                          <PostOptions id={author_id} />
                        </div>
                        <div className='font14' >
                          {text && !toggle[index] && text.length >= 150 ? (
                            <>
                              <p className='font14 pointer hover line_breaks' onClick={() => postDetails(each)}>{text.slice(0, 100)}...</p>
                              <ReadMore index={index} />
                            </>
                          ) : (
                            <p className='font14 pointer hover line_breaks' onClick={() => postDetails(each)}>{text}</p>
                          )}
                        </div>
                        {
                          image && <div className='postImageDiv' onClick={() => setModal({ image: image, author: creator_name, text: text })}>
                            <LazyImage image={image} setPreview={setPreview} />
                          </div>
                        }
                        <div className='interractionDiv'>
                          <div className='interractionsDivSm'>
                            <Likes count={likes_count} liked={liked} postId={id} />
                            <FaShare />
                            <Comments />
                          </div>
                          <div className='interractionsDivSm'>
                            <p className='interractionsText'>{comments_count} comments.</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </>
              )
          )
      }
    </>
  )
}

export default PostCard