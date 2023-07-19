import React from 'react'
import { Link } from 'react-router-dom'

const AllJobs = () => {
    const allJobs = [
        {
            company_name: 'GaoTek',
            company_image: 'https://static.vecteezy.com/system/resources/previews/000/388/900/original/modern-company-logo-design-vector.jpg',
            job_title: 'Front-end Developer',
            created_date: '1 day ago',
            location: 'Canada, Qubec (Remote)',
            id: 1
        },
        {
            company_name: 'Microsoft',
            company_image: 'https://static.vecteezy.com/system/resources/previews/000/388/900/original/modern-company-logo-design-vector.jpg',
            job_title: 'Web3 Developer',
            created_date: '3 days ago',
            location: 'USA, NYC (hybrid)',
            id: 2
        },
        {
            company_name: 'DeCellar',
            company_image: 'https://static.vecteezy.com/system/resources/previews/000/388/900/original/modern-company-logo-design-vector.jpg',
            job_title: 'Back-end Developer',
            created_date: '2hrs ago',
            location: 'Italy, Venice (Remote)',
            id: 3
        },
        {
            company_name: 'Tiktok',
            company_image: 'https://static.vecteezy.com/system/resources/previews/000/388/900/original/modern-company-logo-design-vector.jpg',
            job_title: 'Digital Marketer',
            created_date: '2hrs ago',
            location: 'Italy, Bologna (On-site)',
            id: 4
        },
        {
            company_name: 'GoldMahn Sachs',
            company_image: 'https://static.vecteezy.com/system/resources/previews/000/388/900/original/modern-company-logo-design-vector.jpg',
            job_title: 'Data Scientist',
            created_date: '2hrs ago',
            location: 'World wide Remote',
            id: 5
        },
        {
            company_name: 'Innovate',
            company_image: 'https://static.vecteezy.com/system/resources/previews/000/388/900/original/modern-company-logo-design-vector.jpg',
            job_title: 'DevOps',
            created_date: '2hrs ago',
            location: 'Nigeria, Lagos (On-site)',
            id: 6
        },
        {
            company_name: 'DeCellar',
            company_image: 'https://static.vecteezy.com/system/resources/previews/000/388/900/original/modern-company-logo-design-vector.jpg',
            job_title: 'Web3 Developer',
            created_date: '2hrs ago',
            location: 'Italy, Venice (Remote)',
            id: 7
        },
        {
            company_name: 'Innovate',
            company_image: 'https://static.vecteezy.com/system/resources/previews/000/388/900/original/modern-company-logo-design-vector.jpg',
            job_title: 'Full-Stack Developer',
            created_date: '2hrs ago',
            location: 'World wide (Remote)',
            id: 8
        },
        {
            company_name: 'Flutterwave',
            company_image: 'https://static.vecteezy.com/system/resources/previews/000/388/900/original/modern-company-logo-design-vector.jpg',
            job_title: 'UI/UX Designer',
            created_date: '2hrs ago',
            location: 'Italy, Venice (Remote)',
            id: 9
        },
    ]
    return (
        <div>
            {
                allJobs.map((job) => (
                    <Link to={`/jobs/${job.company_name}/${job.id}`} style={{ color: '#d1cdcd', textDecoration: 'none' }}>
                        <div key={job.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.5rem' }}>
                            <div>
                                <img style={{ width: '50px', objectFit: 'contain' }} src={job.company_image} />
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
    )
}

export default AllJobs
