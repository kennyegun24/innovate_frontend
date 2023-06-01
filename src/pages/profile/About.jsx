import React, { useEffect } from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileNav from './ProfileNav'
import AboutOptions from './AboutOptions'
import { useDispatch, useSelector } from 'react-redux'
import { getWorkExp } from '../../redux/workexperieence/workexperience'

const About = () => {
    const dispatch = useDispatch()
    const { currentUser } = useSelector((state) => state.user)
    useEffect(() => {
        dispatch(getWorkExp(currentUser?.data?.token))
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