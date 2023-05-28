import React from 'react'
import img from '../../images/noImage.png'
import './style.css'

const Overview = () => {
    return (
        <div className='flex justify_between'>
            <div className='width50 flex column gap1rem' >
                <div className='flex gap05rem primaryColor padding05rem white borderRadius10px'>
                    <img className='overViewImage' src={img} alt="" />
                    <div>
                        <h5>Works at Decellar.io</h5>
                        <p className='font12 opacity05'>Jun 2020 to present</p>
                    </div>
                </div>

                <div className='flex gap05rem primaryColor padding05rem white borderRadius10px'>
                    <img className='overViewImage' src={img} alt="" />

                    <div>
                        <h5>Studied at YCT</h5>
                        <p className='font12 opacity05' >Building Technology</p>
                    </div>
                </div>

                <div className='flex gap05rem primaryColor padding05rem white borderRadius10px'>
                    <img className='overViewImage' src={img} alt="" />

                    <div>
                        <h5>Lives in Lagos Nigeria</h5>
                    </div>
                </div>
            </div>

            <div className='flex column gap1rem' style={{ width: '45%', }}>
                <div className='borderRadius10px white padding1rem primaryColor height_fit'>
                    <h5 className='textCenter'>Bio</h5>
                    <p className='opacity05 font12'>I am a Full-Stack developer and also a mobile application developer.</p>
                </div>

                <div className='borderRadius10px white padding1rem primaryColor height_fit'>
                    <h5 className='textCenter'>About</h5>
                    <p className='opacity05 font12'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quam accusamus, eligendi obcaecati, vel dicta suscipit optio dolorum hic aspernatur cumque consequuntur pariatur asperiores illum distinctio numquam ut veniam cum Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ratione labore veritatis pariatur aspernatur rem fuga ad quam esse doloremque aliquid commodi sapiente magnam recusandae ut, molestiae fugit illo consequatur.</p>
                </div>
            </div>
        </div>
    )
}

export default Overview