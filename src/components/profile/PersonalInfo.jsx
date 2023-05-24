import React from 'react'
import img from '../../images/noImage.png'

const PersonalInfo = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '50%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', background: '#202836', padding: '0.5rem', color: '#fff', borderRadius: '10px' }}>
                    <img src={img} style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%' }} alt="" />
                    <div>
                        <h5>Email address</h5>
                        <a className='font12 opacity05' style={{ color: '#fff', textDecoration: 'none' }} href='mailto:kennyegun240@gmail.com'>@kennyegun240</a>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', background: '#202836', padding: '0.5rem', color: '#fff', borderRadius: '10px' }}>
                    <img src={img} style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%' }} alt="" />
                    <div>
                        <h5>Phone Number</h5>
                        <a className='font12 opacity05' style={{ color: '#fff', textDecoration: 'none' }} href='tel:+2348025464789'>(+234) 802-546-4789</a>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', background: '#202836', padding: '0.5rem', color: '#fff', borderRadius: '10px' }}>
                    <img src={img} style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%' }} alt="" />
                    <div>
                        <h5>Works at Decellar.io</h5>
                        <p className='font12 opacity05'>Jun 2020 to present</p>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', background: '#202836', padding: '0.5rem', color: '#fff', borderRadius: '10px' }}>
                    <img src={img} style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%' }} alt="" />
                    <div>
                        <h5>Website 1</h5>
                        <a href='https://kennyegun-portfolio.netlify.app' className='font12 opacity05' style={{ color: '#fff', textDecoration: 'none' }}>Twitter</a>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', background: '#202836', padding: '0.5rem', color: '#fff', borderRadius: '10px' }}>
                    <img src={img} style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%' }} alt="" />
                    <div>
                        <h5>Website 2</h5>
                        <a href='https://kennyegun-portfolio.netlify.app' className='font12 opacity05' style={{ color: '#fff', textDecoration: 'none' }}>Linkedin</a>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', background: '#202836', padding: '0.5rem', color: '#fff', borderRadius: '10px' }}>
                    <img src={img} style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%' }} alt="" />
                    <div>
                        <h5>Website 3</h5>
                        <a href='https://kennyegun-portfolio.netlify.app' className='font12 opacity05' style={{ color: '#fff', textDecoration: 'none' }}>Portfolio</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PersonalInfo