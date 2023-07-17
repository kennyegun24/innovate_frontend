import React, { useState } from 'react'
import vic from '../../images/noImage.png'
import { useDispatch } from 'react-redux'
import { loginFailure } from '../../redux/auth_redux/user/userSlice'
import { login } from '../../redux/apiCalls'

const Login = () => {

    const dispatch = useDispatch()
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const loginUser = async (e) => {
        e.preventDefault()
        try {
            await login(dispatch, {
                email,
                password
            })
        } catch (error) {
            dispatch(loginFailure)
        }
    }
    return (
        <div className='authDiv' >
            <div className='authDivSm'>
                <form className='formDiv'>
                    <div>
                        <img className='img' src={vic} alt="" />
                    </div>
                    <div className="formInputDiv">
                        <input onChange={(e) => setEmail(e.target.value)} className='formInputs' type="text" placeholder='Enter your email address' />
                        <input onChange={(e) => setPassword(e.target.value)} className='formInputs' type="text" placeholder='Choose your password' />
                        <button className='formInputBtn' onClick={loginUser}>Login</button>
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
