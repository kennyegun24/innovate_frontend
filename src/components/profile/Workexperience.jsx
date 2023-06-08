import React from 'react'
import img from '../../images/noImage.png'

const Workexperience = () => {
    return (
        <div className='flex justify_between'>
            <div className='width50 flex column gap1rem' >
                <div className='flex gap05rem primaryColor padding05rem white borderRadius10px'>
                    <img className='overViewImage' src={img} alt="" />
                    <div>
                        <h5 >Frontend Developer</h5>
                        <h6>DeCellar</h6>
                        <p className='font12 opacity05'>Italy</p>
                        <p className='font12 opacity05'>May - Present</p>
                    </div>
                </div>

                <div className='flex gap05rem primaryColor padding05rem white borderRadius10px'>
                    <img className='overViewImage' src={img} alt="" />
                    <div>
                        <h5 >Frontend Developer</h5>
                        <h6>GaoTek</h6>
                        <p className='font12 opacity05'>United States</p>
                        <p className='font12 opacity05'>April - Present</p>
                    </div>
                </div>

                <div className='flex gap05rem primaryColor padding05rem white borderRadius10px'>
                    <img className='overViewImage' src={img} alt="" />
                    <div>
                        <h5 >Frontend Developer</h5>
                        <h6>Side Hustle</h6>
                        <p className='font12 opacity05'>Nigeria</p>
                        <p className='font12 opacity05'>February - April</p>
                    </div>
                </div>
            </div>

            <div style={{ width: '45%' }}>
                <div className='flex gap1rem column primaryColor padding1rem white borderRadius10px'>
                    <h5 className='textCenter'>Skills</h5>
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