import React from 'react'
import vic from '../../images/vic.jpg'
import kenny from '../../images/kenny.png'
import images from '../../images/images.png'
import noImage from '../../images/noImage.png'
import musk from '../../images/musk.jpg'
import kim from '../../images/kim.jpg'
import trump from '../../images/trump.png'
import gates from '../../images/gates.jpg'
import { Row, Col } from 'antd'
import { BsPatchCheckFill } from 'react-icons/bs'

const FriendList = () => {
    const data = [
        {
            image: vic,
            name: 'Vittoria Ogundele',
            followers: '293283',
            verified: true
        },
        {
            image: kenny,
            name: 'Kenny Egun',
            followers: '238278334',
            verified: true
        },
        {
            image: noImage,
            name: 'Random',
            followers: '2312',
            verified: false
        },
        {
            image: images,
            name: 'Gt official',
            followers: '223',
            verified: false
        },
        {
            image: musk,
            name: 'Elon Musk',
            followers: '4353',
            verified: true
        },
        {
            image: kim,
            name: 'Kim Jong un',
            followers: '544425',
            verified: true
        },
        {
            image: trump,
            name: 'Donald Trump',
            followers: '4332',
            verified: true
        },
        {
            image: gates,
            name: 'Bill Gates',
            followers: '9427386',
            verified: true
        },
    ]
    return (
        <div style={{ width: '90%', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
            <h4 style={{ color: '#fff', background: '#151A23', padding: '0.5rem' }}>All Followers</h4>
            <Row gutters={[32, 32]}>
                {data && data.map((images, index) => (
                    <Col xs={24} sm={12} lg={6} xl={6} key={index}>
                        <div style={{ color: '#fff', gap: '0.5rem', background: '#151A23', padding: '1rem', margin: '0.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div>
                                <img src={images.image} style={{ width: '3rem', height: '3rem', borderRadius: '50%' }} alt="" />
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                <p>{images.name}</p>
                                {images.verified && <BsPatchCheckFill style={{ color: '#5596E6' }} />}
                            </div>
                            <p className='opacity05 font12' >{images.followers} followers</p>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default FriendList