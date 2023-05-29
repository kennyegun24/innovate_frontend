import React from 'react'
import EditWorkNav from './EditWorkNav';
import ProfileNav from '../../pages/profile/ProfileNav';

const AddWorkExperience = () => {
    return (
        <div className='flex justify_end darkBlue height90vh' >
            <ProfileNav />
            <div className='padding1rem flex justify_start width100' >
                <EditWorkNav />
            </div>
        </div >
    )
}

export default AddWorkExperience;