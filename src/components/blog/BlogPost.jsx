import React, { useState, useEffect } from 'react'
import { readTime, wordCount } from './blogPostHelper'
import image from '../../images/musk.jpg'
import { FaComment, FaRegCommentDots } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const BlogPost = () => {

    const data = {
        image: image,
        text: 'Okayyyyyyyyy...\nFirst things first, I wanna say this is gonna be a very long project that will cost me alot of time....\nThis is gonna be my first creative project.... yeah my very first.\nI call this an innovative stuff... Not really, just like a fussion of existing projects. I call this project.... it is still an unamed project tho....\n\nWhat is this project about???.......\n\nThings to do… for the social part\n1.	Work on the UI first (2 week)\n2.	Make it responsive\n3.	Setup the database tables (2days)\n4.	Establish the relationships in the model (2days)\n5.	Setup the authentication in application controller (1day)\n6.	Setup the controllers (1week)\n7.	Connect frontend with backend (1day)\n8.	Implement the functionalities in the frontend (1month)\n\nRequirements... Social part first\n- A user should be able to create an account with email, password, name and username\n- A user should be able to make a post\n- A user should be able to like a post, comment on a post\n- A user should be able to follow another user and also unfollow the user\n- A user should be able to update their profile\n- A user should be able to add work experiences\n- A user should be able to write a blog\n- A user should be able to like a blog post\n- A user should be able to comment on a blog post',
        author_name: 'Kenny Elias',
        comments_count: '',
        title: 'Innovate, My First Real Project',
        date: '01 Aug, 2023',
        comments_count: 2032,
        author_id: 1
    }

    const comments = [
        {
            name: 'Jon Doe',
            created_at: '12 Dec, 2023',
            comment: 'This project seems to be a very huge one! Would love to see how the final outcome. \n\n When will you be though with this? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum provident sunt iste suscipit quibusdam adipisci iusto unde, recusandae iure accusamus ad quia ex dolorum necessitatibus quod natus perferendis odio veritatis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora nisi eum odit culpa atque ipsam error doloribus delectus asperiores! Error dolor incidunt blanditiis sit optio dolore placeat quaerat ut atque!',
            user_id: 2
        },
        {
            name: 'Kenny Egun',
            created_at: '29 Jan, 2001',
            comment: `I would love to work on this project with you, if you'd allow tho ;)`,
            user_id: 1
        },
    ]

    // const { currentUser } = useSelector((state) => state.user)
    const currentUser = {
        data: {
            id: 1
        }
    }

    return (
        <div className='flex column gap2rem'>
            <div className='flex column gap2rem relative'>
                <div style={{ position: 'sticky', top: 0, background: '#202836', paddingBottom: '0.5rem' }}>
                    <h2 style={{ color: '#5596E6' }}>{data.title}</h2>
                    <Link to={currentUser?.data?.id === data.author_id ? '/profile' : `/user/${data.author_name}/${data.author_id}/profile`} className='font14 opacity05' style={{ color: '#fff' }}>By: {data.author_name}</Link>
                    <p className='font14 opacity05'>Created at: {data.date}</p>
                    <p className='font14 opacity05'>Estimated reading time: {readTime(data.text)}</p>
                    <p className='font14 opacity05'>Words count: {wordCount(data?.text)} words</p>
                </div>
                <div>
                    <img style={{ width: '100%', height: '400px', objectFit: 'contain' }} src={data.image} alt="" />
                </div>
                <div>
                    <p style={{ whiteSpace: 'pre', fontSize: '15px', lineHeight: '25px', fontWeight: 600 }}>{data.text}</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.2rem', position: 'sticky', bottom: 0, backdropFilter: 'blur(5px)', width: 'fit-content', margin: 'auto' }}>
                    <FaRegCommentDots />
                    <p className='opacity05 font12'>{data.comments_count}</p>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
                <h3>Comments</h3>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
                    <textarea style={{ alignSelf: 'flex-start', width: '50%', resize: 'none', background: '#2F3B50', color: '#fff', padding: '0.25rem', fontSize: '14px', fontFamily: 'sans-serif' }} name="" id="" rows="10"></textarea>
                    <button style={{ background: '#5596E6', padding: '0.5rem', borderRadius: '6px', color: '#fff', cursor: 'pointer' }}>Comment</button>
                </div>
                {
                    comments.map((comment) => (
                        <div style={{ display: 'flex', alignItems: 'flex-start', background: '#2F3B50', padding: '0.6rem', width: '60%', borderRadius: '0 12px 12px 12px' }}>
                            <div style={{ width: '20%', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <Link to={currentUser?.data?.id === comment.user_id ? '/profile' : `/user/${data.author_name}/${data.author_id}/profile`} className='opacity05' style={{ color: '#fff' }}><h4>{comment.name}</h4></Link>
                                <p className='opacity05 font12'>{comment.created_at}</p>
                            </div>
                            <p style={{ whiteSpace: 'pre-line', maxWidth: '75%' }} className='font14'>{comment.comment}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BlogPost
