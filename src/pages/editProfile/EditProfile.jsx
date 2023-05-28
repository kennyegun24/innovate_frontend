import React from 'react'
import './editProfile.css'
import EditProfileNav from '../../components/editProfile/EditProfileNav';
const EditProfile = () => {
    return (
        <div className='flex justify_end darkBlue height90vh' >
            <div className='padding1rem flex justify_start width100' >
                < EditProfileNav />
            </div>
        </div >
    )
}

export default EditProfile;