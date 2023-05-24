import React from 'react'
import img from '../../images/noImage.png'

const Overview = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '50%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
                        <h5>Studied at YCT</h5>
                        <p className='font12 opacity05' >Building Technology</p>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', background: '#202836', padding: '0.5rem', color: '#fff', borderRadius: '10px' }}>
                    <img src={img} style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%' }} alt="" />

                    <div>
                        <h5>Lives in Lagos Nigeria</h5>
                    </div>
                </div>
            </div>

            <div style={{ width: '45%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ height: 'fit-content', background: '#202836', padding: '1rem', color: '#fff', borderRadius: '10px', }}>
                    <h5 style={{ textAlign: 'center' }}>Bio</h5>
                    <p className='opacity05 font12'>I am a Full-Stack developer and also a mobile application developer.</p>
                </div>

                <div style={{ height: 'fit-content', background: '#202836', padding: '1rem', color: '#fff', borderRadius: '10px', }}>
                    <h5 style={{ textAlign: 'center' }}>About</h5>
                    <p className='opacity05 font12'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quam accusamus, eligendi obcaecati, vel dicta suscipit optio dolorum hic aspernatur cumque consequuntur pariatur asperiores illum distinctio numquam ut veniam cum Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ratione labore veritatis pariatur aspernatur rem fuga ad quam esse doloremque aliquid commodi sapiente magnam recusandae ut, molestiae fugit illo consequatur.</p>
                </div>
            </div>
        </div>
    )
}

export default Overview