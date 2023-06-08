import React from 'react'
import ken from '../../images/kenny.png'
import { FaPlusCircle } from 'react-icons/fa';

const EditBasicInfo = () => {
    return (
        <div className='padding1rem marginBtm1rem flex justify_start width100' >

            <form className='gap1rem flex column width70' >

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
                        <input className='editLabelInputs padding2' type="text" name="" id="name" />
                    </div>
                    <div className='flex column' >
                        <label className='editProfileLabel' htmlFor="username">Enter new username</label>
                        <input className='editLabelInputs padding2' type="text" name="" id="username" />
                    </div>
                </div>

                <div className='column flex' >
                    <label className='editProfileLabel' htmlFor="header">Enter new header</label>
                    <input className='editLabelInputs padding2' type="text" name="" id="header" />
                </div>

                <div>
                    <label className='editProfileLabel' htmlFor="bio">Enter your bio</label>
                    <textarea className='editLabelInputs' style={{ height: '25vh', width: '100%' }} name="" id="bio" ></textarea>
                </div>

                <div>
                    <label className='editProfileLabel' htmlFor="about">About yourself</label>
                    <textarea className='editLabelInputs' style={{ height: '25vh', width: '100%' }} name="" id="about" ></textarea>
                </div>

                <div className='column flex' >
                    <label className='editProfileLabel' htmlFor="location">Enter Location</label>
                    <input className='editLabelInputs padding2' type="text" name="" id="location" />
                </div>

                <div className='column flex' >
                    <label className='editProfileLabel' htmlFor="profession">Enter new profession</label>
                    <input className='editLabelInputs padding2' type="text" name="" id="profession" />
                </div>

                <div className='column flex' >
                    <label className='editProfileLabel' htmlFor="website1">Enter website1</label>
                    <input className='editLabelInputs padding2' type="text" name="" id="website1" />
                </div>
                <div className='column flex' >
                    <label className='editProfileLabel' htmlFor="website2">Enter website2</label>
                    <input className='editLabelInputs padding2' type="text" name="" id="website2" />
                </div>
                <div className='column flex' >
                    <label className='editProfileLabel' htmlFor="website3">Enter website3</label>
                    <input className='editLabelInputs padding2' type="text" name="" id="website3" />
                </div>

                <button className='profileEditSaveBtn' >Save</button>
            </form>
        </div>
    )
}

export default EditBasicInfo;