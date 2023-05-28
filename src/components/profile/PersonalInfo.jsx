import React from 'react'
import img from '../../images/noImage.png'

const PersonalInfo = () => {
    return (
        <div className='flex justify_between'>
            <div className='width50 flex column gap1rem' >
                <div className='flex gap05rem primaryColor padding05rem white borderRadius10px'>
                    <img className='overViewImage' src={img} alt="" />
                    <div>
                        <h5>Email address</h5>
                        <a className='font12 opacity05 white' style={{ textDecoration: 'none' }} href='mailto:kennyegun240@gmail.com'>@kennyegun240</a>
                    </div>
                </div>

                <div className='flex gap05rem primaryColor padding05rem white borderRadius10px'>
                    <img className='overViewImage' src={img} alt="" />
                    <div>
                        <h5>Phone Number</h5>
                        <a className='font12 opacity05 white' style={{ textDecoration: 'none' }} href='tel:+2348025464789'>(+234) 802-546-4789</a>
                    </div>
                </div>

                <div className='flex gap05rem primaryColor padding05rem white borderRadius10px'>
                    <img className='overViewImage' src={img} alt="" />
                    <div>
                        <h5>Works at Decellar.io</h5>
                        <p className='font12 opacity05 white'>Jun 2020 to present</p>
                    </div>
                </div>

                <div className='flex gap05rem primaryColor padding05rem white borderRadius10px'>
                    <img className='overViewImage' src={img} alt="" />
                    <div>
                        <h5>Website 1</h5>
                        <a href='https://kennyegun-portfolio.netlify.app' className='font12 opacity05 white' style={{ textDecoration: 'none' }}>Twitter</a>
                    </div>
                </div>

                <div className='flex gap05rem primaryColor padding05rem white borderRadius10px'>
                    <img className='overViewImage' src={img} alt="" />
                    <div>
                        <h5>Website 2</h5>
                        <a href='https://kennyegun-portfolio.netlify.app' className='font12 opacity05 white' style={{ textDecoration: 'none' }}>Linkedin</a>
                    </div>
                </div>

                <div className='flex gap05rem primaryColor padding05rem white borderRadius10px'>
                    <img className='overViewImage' src={img} alt="" />
                    <div>
                        <h5>Website 3</h5>
                        <a href='https://kennyegun-portfolio.netlify.app' className='font12 opacity05 white' style={{ textDecoration: 'none' }}>Portfolio</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PersonalInfo