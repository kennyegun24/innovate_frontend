import React from 'react'
import vic from '../../images/noImage.png'
import './auth.css'

const Register = () => {
    return (
        <div className='authDiv' >
            <div className='authDivSm'>
                <div className='authHeaderDiv'>
                    <h1 className='authHeader'>
                        Join the All-in-One
                        <br />
                        social media
                    </h1>
                </div>
                <div className='centerCircleDiv'>
                    <div className='centerCircle' />
                </div>
                <form className='formDiv'>
                    <div>
                        <img className='img' src={vic} alt="" />
                    </div>
                    <div className="formInputDiv">
                        <input className='formInputs' type="text" placeholder='Enter your name' />
                        <input className='formInputs' type="text" placeholder='Enter your username' />
                        <input className='formInputs' type="text" placeholder='Enter your email address' />
                        <input className='formInputs' type="text" placeholder='Choose your password' />
                        <button className='formInputBtn'>Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register