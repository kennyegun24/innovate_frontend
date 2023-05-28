import React from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileNav from './ProfileNav'
import AboutOptions from './AboutOptions'

const About = () => {
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