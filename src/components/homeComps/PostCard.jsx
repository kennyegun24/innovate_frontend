import React, { useState } from 'react'
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

const PostCard = () => {

    const { allPosts, pending } = useSelector((state) => state.allPosts)
    const [toggle, setToggle] = useState(
        () => {
            if (allPosts && allPosts.length > 0) {
                return Array(allPosts.length).fill(false);
            }
            return [];
        }
    )
    console.log(toggle)

    const navigate = useNavigate()

    const postDetails = (params) => {
        console.log(params)
        navigate(`/post_details/${params.id}`)
    }

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

    const ReadMore = ({ index }) => {
        return (
            <p className='font12 opacity05 pointer' onClick={() => toggleMore(index)}>Read more... </p>
        )
    }

    return (
        <>
            {
                pending ?
                    (
                        <div style={{ width: '100%' }}>
                            <PostsLoader />
                        </div>
                    )
                    :
                    (<>
                        {allPosts.map((each, index) => {
                            const {
                                creator_name,
                                creator_image,
                                likes_count,
                                comments_count,
                                text,
                                image,
                                created_at
                            } = each
                            const formatDate = created_at
                            const formattedDate = moment(formatDate).fromNow()
                            return (
                                <div className='postCardDiv'>
                                    <div className='flxCnterBtwn'>
                                        <div className='postUserInfo'>
                                            <img src={creator_image} className='postUpdateFormImage' alt="" />
                                            <div>
                                                <p className='font14 weight700'  >{creator_name}</p>
                                                <p className='font12 opacity05' >{formattedDate}</p>
                                            </div>
                                        </div>
                                        <FaEllipsisV />
                                    </div>
                                    <div className='font14' >
                                        {text && !toggle[index] && text.length >= 150 ? (
                                            <>
                                                <p className='font14 pointer hover' onClick={() => postDetails(each)}>{text.slice(0, 100)}...</p>
                                                <ReadMore index={index} />
                                            </>
                                        ) : (
                                            <p className='font14 pointer hover' onClick={() => postDetails(each)}>{text}</p>
                                        )}
                                    </div>
                                    {image && <div className='postImageDiv'>
                                        <LazyImage image={image} />
                                    </div>}
                                    <div className='interractionDiv'>
                                        <div className='interractionsDivSm'>
                                            <Likes />
                                            <FaShare />
                                            <Comments />
                                        </div>
                                        <div className='interractionsDivSm'>
                                            <p className='interractionsText'>{comments_count} comments.</p>
                                            <p className='interractionsText'>{likes_count} likes.</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                    )}
        </>
    )
}

export default PostCard