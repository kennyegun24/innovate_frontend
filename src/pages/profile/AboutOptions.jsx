import React, { useState } from 'react'
import { BsCheckCircle } from 'react-icons/bs'
import { SlGraduation } from 'react-icons/sl'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { FaBriefcase } from 'react-icons/fa'
import Overview from '../../components/profile/Overview'
import PersonalInfo from '../../components/profile/PersonalInfo'
import Workexperience from '../../components/profile/Workexperience'

const AboutOptions = () => {
    const [tab, setTab] = useState(0)
    return (
        <div style={{ padding: '2rem 0', width: '90%', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '30%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h5 onClick={() => setTab(0)} style={{ display: 'flex', borderRadius: '6px', gap: '1rem', alignItems: 'center', background: tab === 0 ? '#5596E6' : 'transparent', padding: '0.5rem', color: '#fff' }}>
                    <BsCheckCircle />
                    Overview
                </h5>
                <h5 onClick={() => setTab(1)} style={{ display: 'flex', borderRadius: '6px', gap: '1rem', alignItems: 'center', padding: '0.5rem', color: '#fff', background: tab === 1 ? '#5596E6' : 'transparent' }}>
                    <AiOutlineInfoCircle />
                    Personal Info
                </h5>
                <h5 onClick={() => setTab(2)} style={{ display: 'flex', borderRadius: '6px', gap: '1rem', alignItems: 'center', padding: '0.5rem', color: '#fff', background: tab === 2 ? '#5596E6' : 'transparent' }}>
                    <SlGraduation />
                    Education
                </h5>
                <h5 onClick={() => setTab(3)} style={{ display: 'flex', borderRadius: '6px', gap: '1rem', alignItems: 'center', padding: '0.5rem', color: '#fff', background: tab === 3 ? '#5596E6' : 'transparent' }}>
                    <FaBriefcase />
                    Work Experience
                </h5>
            </div>

            <div style={{ width: '65%' }}>
                {tab === 0 && <Overview />}
                {tab === 1 && <PersonalInfo />}
                {tab === 3 && <Workexperience />}
            </div>
        </div>
    )
}

export default AboutOptions