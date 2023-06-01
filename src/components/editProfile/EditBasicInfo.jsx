import React, { useState } from 'react'
import ken from '../../images/kenny.png'
import { FaPlusCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { updateUserDetails } from '../../redux/apiCalls';

const EditBasicInfo = () => {
    const { userDetails, currentUser } = useSelector((state) => state.user)

    const [formData, setFormData] = useState(userDetails)

    const [form, setForm] = useState({})

    const handleForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const updateProfile = (e) => {
        e.preventDefault()
        updateUserDetails(form, currentUser?.data?.token)
    }

    return (
        <div className='padding1rem marginBtm1rem flex justify_start width100' >

            <form onChange={(e) => handleForm(e)} className='gap1rem flex column width70' >

                <div style={{ position: 'relative', width: 'fit-content', margin: '0 auto' }} >
                    <img className='editProfileImage' src={ken} />
                    <label htmlFor="image">
                        <FaPlusCircle className='profileAddImage' />
                    </label>
                    <input type="file" id='image' className='display_none' />
                </div>
                <div className='justify_between flex' >
                    <div className='flex column' >
                        <label className='editProfileLabel' htmlFor="name">Enter new name</label>
                        <input className='editLabelInputs padding2' onChange={(e) => handleForm(e)} value={formData.name} type="text" name="name" id="name" />
                    </div>
                    <div className='flex column' >
                        <label className='editProfileLabel' htmlFor="username">Enter new username</label>
                        <input className='editLabelInputs padding2' type="text" onChange={(e) => handleForm(e)} value={formData.username} name="username" id="username" />
                    </div>
                </div>

                <div className='column flex' >
                    <label className='editProfileLabel' htmlFor="header">Enter new header</label>
                    <input className='editLabelInputs padding2' onChange={(e) => handleForm(e)} value={formData.header} type="text" name="header" id="header" />
                </div>

                <div>
                    <label className='editProfileLabel' htmlFor="bio">Enter your bio</label>
                    <textarea className='editLabelInputs' onChange={(e) => handleForm(e)} value={formData.bio} style={{ height: '25vh', width: '100%' }} name="bio" id="bio" ></textarea>
                </div>

                <div>
                    <label className='editProfileLabel' htmlFor="about">About yourself</label>
                    <textarea className='editLabelInputs' onChange={(e) => handleForm(e)} value={formData.about} style={{ height: '25vh', width: '100%' }} name="about" id="about" ></textarea>
                </div>

                <div className='column flex' >
                    <label className='editProfileLabel' htmlFor="location">Enter Location</label>
                    <input className='editLabelInputs padding2' type="text" onChange={(e) => handleForm(e)} value={formData.location} name="location" id="location" />
                </div>

                <div className='column flex' >
                    <label className='editProfileLabel' htmlFor="profession">Enter new profession</label>
                    <input className='editLabelInputs padding2' type="text" onChange={(e) => handleForm(e)} value={formData.profession} name="profession" id="profession" />
                </div>

                <div className='column flex' >
                    <label className='editProfileLabel' htmlFor="website1">Enter website1</label>
                    <input className='editLabelInputs padding2' onChange={(e) => handleForm(e)} value={formData.website1} type="text" name="website1" id="website1" />
                </div>
                <div className='column flex' >
                    <label className='editProfileLabel' htmlFor="website2">Enter website2</label>
                    <input className='editLabelInputs padding2' type="text" onChange={(e) => handleForm(e)} value={formData.website2} name="website2" id="website2" />
                </div>
                <div className='column flex' >
                    <label className='editProfileLabel' htmlFor="website3">Enter website3</label>
                    <input className='editLabelInputs padding2' type="text" onChange={(e) => handleForm(e)} value={formData.website3} name="website3" id="website3" />
                </div>

                <button onClick={updateProfile} type='submit' className='profileEditSaveBtn'>Save</button>
            </form>
        </div>
    )
}

export default EditBasicInfo;