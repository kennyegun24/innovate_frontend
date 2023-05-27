import React from 'react'
import kenny from '../../images/kenny.png'
import vic from '../../images/vic.jpg'
import kim from '../../images/kim.jpg'
import trump from '../../images/trump.png'
import musk from '../../images/musk.jpg'

const PostComments = () => {
    const comments = [
        {
            commentor_name: 'Kenny',
            commentor_image: kenny,
            commentor_text: 'Mhen, I got this sometime lastweek from someone in my school',
        },
        {
            commentor_name: 'Victoria',
            commentor_image: vic,
            commentor_text: 'This thing looks okay sha, I got it also and it was okay and very useful to me',
        },
        {
            commentor_name: 'Kim Jun Yun',
            commentor_image: kim,
            commentor_text: 'We must all destroy everything the west creates!!! Do not make a mistake of sending this to north korea!! We will come for you guys if you do!!!',
        },
        {
            commentor_name: 'Donald Trump',
            commentor_image: trump,
            commentor_text: 'We have to deny the mexicans the priviledge of using this product, we must build the fence instead',
        },
        {
            commentor_name: 'Elon Musk',
            commentor_image: musk,
            commentor_text: 'I believe in the future and I see man living in both Mars and on Earth. Mars is gonna be a free world without any government! ',
        },
    ]
    return (
        <div>
            <h4 style={{ color: '#fff' }}>Comments</h4>

            {
                comments.map((comment) => (
                    <div style={{ borderBottom: '1px solid #111', padding: '0.5rem 0.5rem 1.5rem 0.5rem', display: 'flex', gap: '1rem' }}>
                        <img className='postUpdateFormImage' src={comment.commentor_image} alt="" />
                        <div style={{ display: 'flex', gap: '0.5rem', flexDirection: 'column', color: '#fff' }}>
                            <h6 className='font14 weight600'>{comment.commentor_name}</h6>
                            <p className='font12'>{comment.commentor_text}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default PostComments