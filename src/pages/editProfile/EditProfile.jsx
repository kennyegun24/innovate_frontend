import React from 'react'
import './editProfile.css'
import EditProfileNav from '../../components/editProfile/EditProfileNav';
import ProfileNav from '../profile/ProfileNav';
const EditProfile = () => {
    return (
        <div className='flex justify_end darkBlue height90vh' >
            <ProfileNav />
            <div className='padding1rem flex justify_start width100' >
                <EditProfileNav />
            </div>
        </div >
    )
}

export default EditProfile;