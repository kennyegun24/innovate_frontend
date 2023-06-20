import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import AddWorkExp from './AddWorkExp'

const EditWorkNav = () => {
    const [tab, setTab] = useState(0)
    return (
        <div className='flex justify_between width90 editNavDivBg' >
            <div className='flex column gap1rem editNavBtnDiv' >
                <h5 className='flex gap1rem align_center editNavBtn' onClick={() => setTab(0)} style={{ background: tab === 1 ? '#5596E6' : 'transparent' }}>
                    <FaEdit />
                    Add Work experience
                </h5>
            </div>

            <div className='editNavBasicInfoWorkExp' >
                {tab === 0 && <AddWorkExp />}
            </div>
        </div>
    )
}

export default EditWorkNav