import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getPost } from '../redux/posts/postSlice'
import { FaEllipsisV, FaShare } from 'react-icons/fa'
import Comments from './interractions/Comments'
import Likes from './interractions/Likes'
import moment from 'moment'
import PostComments from './comments/Comments'
import PostDetailsLoader from './loadingAnimation/PostDetailsLoader'

const PostsDetails = () => {
    const [more, setMore] = useState(false)
    const { pathname } = useLocation()
    const dispatch = useDispatch()
    const { onePost, pending } = useSelector((state) => state.allPosts)

    const split = pathname.split('/')
    const getId = split[split.length - 1]

    useEffect(() => {
        dispatch(getPost(getId))
    }, [])

    const formatDate = onePost.created_at
    const formattedDate = moment(formatDate).fromNow()
    return (
        <div style={{ background: '#2F3B50', minHeight: '90vh', gap: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0.1rem 1rem 1.5rem 1rem', }}>
            {
                pending ?
                    (
                        <PostDetailsLoader />
                    )
                    :
                    (
                        <>

                            <div style={{ width: '45%', borderBottomLeftRadius: '0', borderBottomRightRadius: '0' }} className='postCardDiv'>
                                {onePost.image && <div className='postImageDiv'>
                                    <img className='postImage' src={onePost.image} alt="" />
                                </div>}
                                <div className='flxCnterBtwn'>
                                    <div className='postUserInfo'>
                                        <img src={onePost.creator_image} className='postUpdateFormImage' alt="" />
                                        <div>
                                            <p className='font14 weight700'  >{onePost.creator_name}</p>
                                            <p className='font12 opacity05' >{formattedDate}</p>
                                        </div>
                                    </div>
                                    <FaEllipsisV />
                                </div>
                                < >
                                    {
                                        onePost.text.length >= 150 && !more ?
                                            (
                                                <>
                                                    <p className='font14' >{onePost.text.slice(0, 100)}</p>
                                                    <p onClick={() => setMore(true)} className='font12 pointer opacity05'>Read more...</p>
                                                </>
                                            )
                                            :
                                            (
                                                <p className='font14'>{onePost.text}</p>
                                            )
                                    }
                                </>
                                <div className='interractionDiv'>
                                    <div className='interractionsDivSm'>
                                        <Likes />
                                        <FaShare />
                                        <Comments />
                                    </div>
                                    <div className='interractionsDivSm'>
                                        <p className='interractionsText'>{onePost.comments_count} comments.</p>
                                        <p className='interractionsText'>{onePost.likes_count} likes.</p>
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