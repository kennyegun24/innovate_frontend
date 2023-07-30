import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../../images/noImage.png'
import Image2 from '../../images/vic.jpg'
import Image3 from '../../images/Picture1.png'
import Image4 from '../../images/trump.png'
import Image5 from '../../images/images.png'
import Image6 from '../../images/gates.jpg'
import Image7 from '../../images/gates.jpg'
import Image8 from '../../images/screen-0.jpg'
import Image9 from '../../images/kim.jpg'
import { FaBriefcase } from 'react-icons/fa'

const CompanyOpenJobs = () => {
    const allJobs = [
        {
            company_name: 'GaoTek',
            job_title: 'Front-end Developer',
            created_date: '1 day ago',
            location: 'Canada, Qubec (Remote)',
            id: 1,
            image: Image
        },
        {
            company_name: 'Microsoft',
            job_title: 'Web3 Developer',
            created_date: '3 days ago',
            location: 'USA, NYC (hybrid)',
            id: 2,
            image: Image2
        },
        {
            company_name: 'DeCellar',
            job_title: 'Back-end Developer',
            created_date: '2hrs ago',
            location: 'Italy, Venice (Remote)',
            id: 3,
            image: Image3
        },
        {
            company_name: 'Tiktok',
            job_title: 'Digital Marketer',
            created_date: '2hrs ago',
            location: 'Italy, Bologna (On-site)',
            id: 4,
            image: Image4
        },
        {
            company_name: 'GoldMahn Sachs',
            job_title: 'Data Scientist',
            created_date: '2hrs ago',
            location: 'World wide Remote',
            id: 5,
            image: Image5
        },
        {
            company_name: 'Innovate',
            job_title: 'DevOps',
            created_date: '2hrs ago',
            location: 'Nigeria, Lagos (On-site)',
            id: 6,
            image: Image6
        },
        {
            company_name: 'DeCellar',
            job_title: 'Web3 Developer',
            created_date: '2hrs ago',
            location: 'Italy, Venice (Remote)',
            id: 7,
            image: Image7
        },
        {
            company_name: 'Innovate',
            job_title: 'Full-Stack Developer',
            created_date: '2hrs ago',
            location: 'World wide (Remote)',
            id: 8,
            image: Image8
        },
        {
            company_name: 'Flutterwave',
            job_title: 'UI/UX Designer',
            created_date: '2hrs ago',
            location: 'Italy, Venice (Remote)',
            id: 9,
            image: Image9
        },
    ]
    return (
        <>

            <div className='profilePostsHeaderDiv'>
                <h4 className='font16 weight500'>Open Jobs</h4>

                <div className='flex gap1rem'>
                    <button className='profilePostsButton'>Recent</button>
                    <button className='profilePostsButton'>All</button>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'end', height: '100%' }}>

                <div style={{ flexWrap: 'wrap', overflowY: 'auto', height: '100%', width: '80%', }} className='flex scrollBar'>
                    {
                        allJobs.map((job) => (
                            <Link to={`/jobs/${job.company_name}/${job.id}`} style={{ color: '#d1cdcd', textDecoration: 'none', flexBasis: '50%', flexGrow: 1 }}>
                                <div key={job.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                                    <div>
                                        <FaBriefcase fontSize={50} color='fff' />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                                        <h2 style={{ fontSize: '14px' }}>{job.job_title}</h2>
                                        <p style={{ fontSize: '12px' }}>{job.company_name}</p>
                                        <p style={{ fontSize: '12px' }}>{job.created_date}</p>
                                        <p style={{ fontSize: '12px' }}>{job.location}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </ >
    )
}

export default CompanyOpenJobs
