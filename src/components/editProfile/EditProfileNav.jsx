import React, { useState } from 'react'
import EditBasicInfo from './EditBasicInfo'
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
            </div>

            <div className='editNavBasicInfoWorkExp' >
                {tab === 0 && <EditBasicInfo />}
            </div>
        </div>
    )
}

export default EditProfileNav