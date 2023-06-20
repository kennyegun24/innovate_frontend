import React from 'react'
import kenny from '../../images/kenny.png'
import { FaCamera, FaEdit, FaUser, FaUsers } from 'react-icons/fa'
import { TfiGallery } from 'react-icons/tfi'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProfileNav = () => {
  const { userDetails } = useSelector((state) => state.user)
  return (
    <div style={{ width: '100%', background: '#151A23', height: '100%', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <img style={{ height: '4rem', width: '4rem', borderRadius: '50%' }} src={userDetails?.image} alt="" />
        <div>
          <h4 className='font18 weight500' >{userDetails?.name}</h4>
          <p className='font12 opacity05'>{userDetails?.header}</p>
        </div>
      </div>

      <div style={{ color: '#fff', lineHeight: '35px' }}>
        <NavLink className='font14 opacity05' to='/userprofile' style={{ padding: '0.2rem', display: 'flex', gap: '1rem', alignItems: 'center', color: '#fff', textDecoration: 'none' }} >
          <FaUser />
          User profile
        </NavLink>
        <NavLink className='font14 opacity05' to='/friends' style={{ padding: '0.2rem', display: 'flex', gap: '1rem', alignItems: 'center', color: '#fff', textDecoration: 'none' }} >
          <FaUsers />
          Friends
        </NavLink>
        <p className='font14 opacity05' style={{ padding: '0.2rem', display: 'flex', gap: '1rem', alignItems: 'center', }}>
          <TfiGallery />
          Photos
        </p>

        <NavLink className='font14 opacity05' to='/edit_profile' style={{ padding: '0.2rem', display: 'flex', gap: '1rem', alignItems: 'center', color: '#fff', textDecoration: 'none' }} >
          <FaEdit />
          Edit profile
        </NavLink>

        <NavLink className='font14 opacity05' to='/add_experience' style={{ padding: '0.2rem', display: 'flex', gap: '1rem', alignItems: 'center', color: '#fff', textDecoration: 'none' }} >
          <FaEdit />
          Add work experience
        </NavLink>
      </div>

      <div style={{ color: '#fff' }}>
        <p className='font14 opacity05'>Logout</p>
      </div>
    </div>
  )
}

export default ProfileNav