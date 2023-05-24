import React from 'react'
import img from '../../images/noImage.png'

const Workexperience = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '50%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', background: '#202836', padding: '0.5rem', color: '#fff', borderRadius: '10px' }}>
                    <img src={img} style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%' }} alt="" />
                    <div>
                        <h5 >Frontend Developer</h5>
                        <h6>DeCellar</h6>
                        <p className='font12 opacity05'>Italy</p>
                        <p className='font12 opacity05'>May - Present</p>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', background: '#202836', padding: '0.5rem', color: '#fff', borderRadius: '10px' }}>
                    <img src={img} style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%' }} alt="" />
                    <div>
                        <h5 >Frontend Developer</h5>
                        <h6>GaoTek</h6>
                        <p className='font12 opacity05'>United States</p>
                        <p className='font12 opacity05'>April - Present</p>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', background: '#202836', padding: '0.5rem', color: '#fff', borderRadius: '10px' }}>
                    <img src={img} style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%' }} alt="" />
                    <div>
                        <h5 >Frontend Developer</h5>
                        <h6>Side Hustle</h6>
                        <p className='font12 opacity05'>Nigeria</p>
                        <p className='font12 opacity05'>February - April</p>
                    </div>
                </div>
            </div>

            <div style={{ width: '45%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ height: 'fit-content', background: '#202836', padding: '1rem', color: '#fff', borderRadius: '10px', }}>
                    <h5 style={{ textAlign: 'center' }}>Skills</h5>
                    <p className='opacity05 font12'>
                        1. Ruby on Rails
                        <br />
                        2. HTML and CSS
                        <br />
                        3. Javascript
                        <br />
                        4. Ruby
                        <br />
                        5. React.Js
                        <br />
                        6. Jest(testing tool)
                        <br />
                        7. Capybara(testing tool)
                        <br />
                        8. Firebase
                        <br />
                        9. Redux toolkit
                        <br />
                        10. React Native
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Workexperience