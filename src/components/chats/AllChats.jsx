import React, { useState } from 'react'
import image from '../../images/noImage.png'
import image1 from '../../images/musk.jpg'
import image2 from '../../images/vic.jpg'
import image3 from '../../images/gates.jpg'
import image4 from '../../images/images.png'
import image5 from '../../images/kenny.png'
import image6 from '../../images/kim.jpg'
import image7 from '../../images/trump.png'
import image8 from '../../images/screen-0.jpg'
import image9 from '../../images/screen-3.jpg'
import { Link } from 'react-router-dom'
import './allChat.css'
import Search from 'antd/es/transfer/search'

const AllChats = () => {
    const chats = [
        {
            name: 'Martha Stokes',
            lastMessage: 'dtwn ovhmkrb bec qsuzmrp',
            time: '03:15:23',
            image: image,
            id: 1
        },
        {
            name: 'Michael Carroll',
            lastMessage: 'hbyy cudsfgy max zosgopm',
            time: '06:41:52',
            image: image1,
            id: 2
        },
        {
            name: 'Mina Simmons',
            lastMessage: 'xnfd enyktot vbs majxtdx',
            time: '09:03:17',
            image: image2,
            id: 3
        },
        {
            name: 'Hilda Goodwin',
            lastMessage: 'ukqr lorzqxh zni qlefjfr',
            time: '16:39:11',
            image: image3,
            id: 4
        },
        {
            name: 'Bryan Higgins',
            lastMessage: 'qtjx lfsdreh hsk atnyftd',
            time: '06:56:22',
            image: image4,
            id: 5
        },
        {
            name: 'Paul Hamilton',
            lastMessage: 'wibu qjxpnty bmo aemiyqs',
            time: '23:21:53',
            image: image5,
            id: 6
        },
        {
            name: 'Bernard Ballard',
            lastMessage: 'jfgv pdnwlmx bpr icecfvl',
            time: '04:32:40',
            image: image6,
            id: 7
        },
        {
            name: 'Rose Kelley',
            lastMessage: 'pyjs ystigjs esc ogtiopb',
            time: '09:53:43',
            image: image7,
            id: 8
        },
        {
            name: 'Raymond Rivera',
            lastMessage: 'ycwg bwsjnrm ejt belmqdm',
            time: '11:02:18',
            image: image8,
            id: 9
        },
        {
            name: 'Bettie Watson',
            lastMessage: 'npuc wbvsass gcg mjzmxax',
            time: '11:05:31',
            image: image9,
            id: 10
        },
        {
            name: 'Bettie Watson',
            lastMessage: 'npuc wbvsass gcg mjzmxax',
            time: '11:05:31',
            image: image5,
            id: 11
        },
        {
            name: 'Bettie Watson',
            lastMessage: 'npuc wbvsass gcg mjzmxax',
            time: '11:05:31',
            image: image4,
            id: 12
        },
        {
            name: 'Bettie Watson',
            lastMessage: 'npuc wbvsass gcg mjzmxax',
            time: '11:05:31',
            image: image2,
            id: 13
        },
        {
            name: 'Bettie Watson',
            lastMessage: 'npuc wbvsass gcg mjzmxax',
            time: '11:05:31',
            image: image8,
            id: 14
        },
    ]
    const [inp, setInp] = useState(null)
    console.log(inp)
    return (
        <div className='flex column gap2rem padding1rem'>
            <div style={{ position: 'sticky', top: 0, zIndex: 2 }}>
                <Search onChange={(e) => setInp(e.target.value)} />
            </div>
            {
                chats.map((chat) => (

                    <Link key={chat.id} to={`/messages/${chat.name}/${chat.id}`} className='flex justify_between pointer decoration_none' style={{ color: '#fff' }}>
                        <div className='flex gap05rem'>
                            <img style={{ width: '40px', borderRadius: '50%', height: '40px', objectFit: 'cover' }} src={chat.image} alt="" />
                            <div className='flex column gap05rem'>
                                <p className='font14 opacity08'>{chat.name.length > 20 ? chat.name.slice(0, 20) + '...' : chat.name}</p>
                                <p className='font12 opacity05'>{chat.lastMessage.slice(0, 25)}</p>
                            </div>
                        </div>
                        <p className='font12 opacity05'>{chat.time}</p>
                    </Link>
                ))
            }
        </div>
    )
}

export default AllChats
