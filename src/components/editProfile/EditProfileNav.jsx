import React, { useState } from 'react'
import EditBasicInfo from './EditBasicInfo'
import EditWorkExp from './EditWorkExp'
import { FaEdit } from 'react-icons/fa'

const EditProfileNav = () => {
    const [tab, setTab] = useState(0)
    return (
        <div className='flex justify_between width90 editNavDivBg' >
            <div className='flex column gap1rem editNavBtnDiv' >
                <h5 className='flex gap1rem align_center editNavBtn' onClick={() => setTab(0)} style={{ background: tab === 0 ? '#5596E6' : 'transparent' }}>
                    <FaEdit />
                    Profile
                </h5>
                <h5 className='flex gap1rem align_center editNavBtn' onClick={() => setTab(1)} style={{ background: tab === 1 ? '#5596E6' : 'transparent' }}>
                    <FaEdit />
                    Edit Work experience
                </h5>
            </div>

            <div className='editNavBasicInfoWorkExp' >
                {tab === 0 && <EditBasicInfo />}
                {tab === 1 && <EditWorkExp />}
            </div>
        </div>
    )
}

export default EditProfileNav