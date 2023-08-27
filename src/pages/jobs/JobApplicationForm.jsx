import React, { useState } from 'react'
import ApplicationSuccess from './ApplicationSuccess'

const JobApplicationForm = () => {
    const urlId = document.location.pathname.split('/')[3]
    const urlName = document.location.pathname.split('/')[2].split('%20').join(' ')
    const [date, setDate] = useState(null)
    const [submit, setSubmit] = useState(false)
    console.log(urlId)
    console.log(urlName)
    return (
        <div className='flex column gap1rem padding1rem'>
            <h2 style={{ textDecoration: 'underline' }}>
                Job Application Form
            </h2>
            <h4>Please complete the following form to apply for a job with {urlName}</h4>
            <form className='jobForm'>

                <div className='jobFormDivSm'>
                    <h4>Basic Informations</h4>
                    <div className='jobFormLilDiv'>
                        <div className='jobFormInputDiv1'>
                            <label htmlFor="" className='jobFormLabel'>Full Name</label>
                            <input className='padding05rem br04px' type="text" placeholder='First Middle Last' />
                        </div>
                        <div className='jobFormInputDiv1'>
                            <label htmlFor="" className='jobFormLabel'>Email Address</label>
                            <input className='padding05rem br04px' type="email" placeholder='Email Address' />
                        </div>
                        <div className='jobFormInputDiv1'>
                            <label htmlFor="" className='jobFormLabel'>Your Date of birth</label>
                            <input className='padding05rem br04px' type="date" onChange={(e) => setDate(e.target.value)} />
                        </div>
                        <div className='jobFormInputDiv1'>
                            <label htmlFor="" className='jobFormLabel'>Enter your phone number</label>
                            <input className='padding05rem br04px' type="number" placeholder='Phone Number' />
                        </div>
                    </div>
                </div>

                <div className='jobFormDivSm'>
                    <h4>Current Address</h4>
                    <div className='flex column'>
                        <label className='jobFormLabel'>House address</label>
                        <input className='padding05rem br04px' type="text" placeholder='Curent Address' />
                    </div>
                    <div className='jobFormLilDiv' >
                        <div className='jobFormInputDiv2'>
                            <label className='jobFormLabel'>Your current city</label>
                            <input className='padding05rem br04px' type="text" placeholder='City' />
                        </div>
                        <div className='jobFormInputDiv2'>
                            <label className='jobFormLabel'>Your current state</label>
                            <input className='padding05rem br04px' type="text" placeholder='State' />
                        </div>
                        <div className='jobFormInputDiv2'>
                            <label className='jobFormLabel'>Your country</label>
                            <input className='padding05rem br04px' type="text" placeholder='Country' />
                        </div>
                    </div>
                </div>

                <div className='flex column'>
                    <label htmlFor="">Years of experience</label>
                    {/* <input style={{ padding: '0.5rem', width: '20%' }} type="number" placeholder='Years of experience' /> */}
                    <select style={{ padding: '0.5rem', width: '20%' }} name="experience" id='experience'>
                        <option value="1-2yrs">1-2yrs</option>
                        <option value="3-5yrs">3-5yrs</option>
                        <option value="5+ Yeard">5yrs++</option>
                    </select>
                </div>
                <div className='flex column'>
                    <h4>Resume</h4>
                    <input style={{ width: 'fit-content' }} type="file" id='resume' />
                </div>
                <div className='flex column'>
                    <h4>Cover Letter</h4>
                    <input style={{ width: 'fit-content' }} type="file" id='cover_letter' />
                </div>
                <button onClick={(e) => { setSubmit(true); e.preventDefault() }} className='' style={{ width: 'fit-content', color: '#fff', background: '#5596E6', padding: '0.5rem', borderRadius: '10px', textDecoration: 'none' }}>Submit</button>
                {
                    submit && <ApplicationSuccess onSubmit={setSubmit} />
                }
            </form>
        </div>
    )
}

export default JobApplicationForm;
