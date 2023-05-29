import React, { useState } from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import { newWorkExperience } from '../../redux/apiCalls'

const AddWorkExp = () => {

    const [experience, setExperience] = useState({})

    const handleForm = (e) => {
        setExperience({ ...experience, [e.target.name]: e.target.value })
    }

    const addExp = (e) => {
        e.preventDefault()
        newWorkExperience(experience)
    }
    return (
        <div className='padding1rem marginBtm1rem flex justify_start width100' >

            <form onChange={(e) => handleForm(e)} className='gap1rem flex column width70' >

                <div className='column flex' >
                    <label className='editProfileLabel' htmlFor="company">Company name</label>
                    <input className='editLabelInputs padding2' type="text" name="company_name" id="company" />
                </div>

                <div className='column flex' >
                    <label className='editProfileLabel' htmlFor="title">Job Title</label>
                    <input className='editLabelInputs padding2' type="text" name="title" id="title" />
                </div>

                <div>
                    <label className='editProfileLabel' htmlFor="description">Job responsibility</label>
                    <textarea className='editLabelInputs' style={{ height: '25vh', width: '100%' }} name="description" id="description" ></textarea>
                </div>

                <div className='justify_between flex' >
                    <div className='flex column' >
                        <label className='editProfileLabel' htmlFor="start_date">Start Date</label>
                        <input className='editLabelInputs padding2' type="text" name="start_date" id="start_date" />
                    </div>
                    <div className='flex column' >
                        <label className='editProfileLabel' htmlFor="end_date">End Date</label>
                        <input className='editLabelInputs padding2' type="text" name="end_date" id="end_date" />
                    </div>
                </div>
                <button onClick={addExp} type='submit' className='profileEditSaveBtn'>Save</button>
            </form>
        </div>
    )
}

export default AddWorkExp