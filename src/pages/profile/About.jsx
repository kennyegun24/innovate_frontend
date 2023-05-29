import React, { useEffect } from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileNav from './ProfileNav'
import AboutOptions from './AboutOptions'
import { useDispatch } from 'react-redux'
import { getWorkExp } from '../../redux/workexperieence/workexperience'

const About = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getWorkExp())
    }, [])
    return (
        <div className='flex'>
            <div style={{ width: '25%' }}>
                <ProfileNav />
            </div>
            <div className='profileMainDiv' >
                <ProfileHeader />

                <AboutOptions />
            </div>

        </div>
    )
}

export default About