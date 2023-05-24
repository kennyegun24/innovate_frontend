import React from 'react'
import Vic from '../../images/vic.jpg'
import { FaCamera, FaEdit, FaUsers } from 'react-icons/fa'
import { TfiGallery } from 'react-icons/tfi'

const ProfileNav = () => {
    return (
        <div style={{ background: '#151A23', height: '100%', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ color: '#fff', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <img style={{ height: '4rem', width: '4rem', borderRadius: '50%' }} src={Vic} alt="" />
                <div>
                    <h4 className='font18 weight500' >Vittoria</h4>
                    <p className='font12 opacity05'>Web devveloper</p>
                </div>
            </div>

            <div style={{ color: '#fff', lineHeight: '35px' }}>
                <p className='font14 opacity05' style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <FaUsers />
                    Friends
                </p>
                <p className='font14 opacity05' style={{ display: 'flex', gap: '1rem', alignItems: 'center', }}>
                    <TfiGallery />
                    Photos
                </p>

                <p className='font14 opacity05' style={{ display: 'flex', gap: '1rem', alignItems: 'center', }}>
                    <FaEdit />
                    Edit Profile
                </p>
            </div>

            <div style={{ color: '#fff' }}>
                <p className='font14 opacity05'>Logout</p>
            </div>
        </div>
    )
}

export default ProfileNav