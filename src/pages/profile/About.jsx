import React, { useEffect } from 'react'
import ProfileHeader from './ProfileHeader'
import AboutOptions from './AboutOptions'
import { useDispatch, useSelector } from 'react-redux'
// import { getWorkExp } from '../../redux/auth_redux/workexperieence/workexperience'
import { getWorkExp } from '../../redux/auth_redux/workExperience/workExperience'

const About = () => {
    const dispatch = useDispatch()
    const { currentUser } = useSelector((state) => state.user)
    useEffect(() => {
        dispatch(getWorkExp(currentUser?.data?.token))
    }, [])
    return (
        <div className='flex width100'>
            <div className='profileMainDiv width100' >
                <ProfileHeader />

                <AboutOptions />
            </div>

        </div>
    )
}

export default About
