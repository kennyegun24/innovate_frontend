import React, { useState } from 'react'
import { FaPlusCircle, FaEdit } from 'react-icons/fa'
import { newWorkExperience } from '../../redux/apiCalls'
import { useDispatch, useSelector } from 'react-redux'

const AddNewJob = () => {

    const [experience, setExperience] = useState({})
    const { currentUser } = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const handleForm = (e) => {
        setExperience({ ...experience, [e.target.name]: e.target.value })
    }

    const addExp = (e) => {
        e.preventDefault()
        newWorkExperience(experience, currentUser?.data?.token, dispatch)
    }
    return (
        <div className='flex justify_between width90 editNavDivBg' >
            <div className='flex column gap1rem editNavBtnDiv' >
                <h5 className='flex gap1rem align_center editNavBtn' style={{ background: '#5596E6' }}>
                    <FaEdit />
                    Add New Job
                </h5>
            </div>
            <div className='editNavBasicInfoWorkExp padding1rem marginBtm1rem flex justify_start width100' >

                <form onChange={(e) => handleForm(e)} className='gap1rem flex column width70' >
                    <div className='justify_between flex wrap gap05rem' >
                        <div className='flex column' >
                            <label className='editProfileLabel' htmlFor="start_date">Expiry Date</label>
                            <input className='editLabelInputs padding2' type="text" name="start_date" id="start_date" />
                        </div>

                        <div className='flex column' >
                            <label className='editProfileLabel' htmlFor="start_date">Location</label>
                            <input className='editLabelInputs padding2' type="text" name="start_date" id="start_date" />
                        </div>
                        <div className='flex column' >
                            <label className='editProfileLabel' htmlFor="end_date">Experience Level</label>
                            <input className='editLabelInputs padding2' type="text" name="end_date" id="end_date" />
                        </div>
                    </div>
                    <div className='flex column' >
                        <label className='editProfileLabel' htmlFor="end_date">Job Title</label>
                        <input className='editLabelInputs padding2' type="text" name="end_date" id="end_date" />
                    </div>
                    <div>
                        <label className='editProfileLabel' htmlFor="description">Job Description</label>
                        <textarea className='editLabelInputs' style={{ height: '30vh', width: '100%' }} name="description" id="description" ></textarea>
                    </div>

                    <button onClick={addExp} type='submit' className='profileEditSaveBtn'>Save</button>
                </form>
            </div>
        </div>
    )
}

export default AddNewJob
