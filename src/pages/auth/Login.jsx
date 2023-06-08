import React from 'react'
import vic from '../../images/noImage.png'

const Login = () => {
    return (
        <div className='authDiv' >
            <div className='authDivSm'>
                <form className='formDiv'>
                    <div>
                        <img className='img' src={vic} alt="" />
                    </div>
                    <div className="formInputDiv">
                        <input className='formInputs' type="text" placeholder='Enter your email address' />
                        <input className='formInputs' type="text" placeholder='Choose your password' />
                        <button className='formInputBtn'>Login</button>
                        <p style={{ color: '#fff' }}>Forot your password?</p>
                    </div>
                </form>
                <div className='centerCircleDiv'>
                    <div className='centerCircle' />
                </div>
                <div className='authHeaderDiv'>
                    <h1 className='authHeader'>
                        Resume from
                        <br />
                        where you stopped
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Login