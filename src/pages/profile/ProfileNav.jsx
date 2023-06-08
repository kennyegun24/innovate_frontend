import React from 'react'
import kenny from '../../images/kenny.png'
import { FaCamera, FaEdit, FaUsers } from 'react-icons/fa'
import { TfiGallery } from 'react-icons/tfi'
import { NavLink } from 'react-router-dom'

const ProfileNav = () => {
    return (
        <div style={{ background: '#151A23', height: '100%', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ color: '#fff', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <img style={{ height: '4rem', width: '4rem', borderRadius: '50%' }} src={kenny} alt="" />
                <div>
                    <h4 className='font18 weight500' >Kenny Egun</h4>
                    <p className='font12 opacity05'>Software Engineer</p>
                </div>
            </div>

            <div style={{ color: '#fff', lineHeight: '35px' }}>
                <NavLink className='font14 opacity05' to='/friends' style={{ padding: '0.2rem', display: 'flex', gap: '1rem', alignItems: 'center', color: '#fff', textDecoration: 'none' }} >
                    <FaUsers />
                    Friends
                </NavLink>
                <p className='font14 opacity05' style={{ padding: '0.2rem', display: 'flex', gap: '1rem', alignItems: 'center', }}>
                    <TfiGallery />
                    Photos
                </p>

                <p className='font14 opacity05' style={{ padding: '0.2rem', display: 'flex', gap: '1rem', alignItems: 'center', }}>
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