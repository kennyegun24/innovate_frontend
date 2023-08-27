import React from 'react'
import { BsBinoculars } from 'react-icons/bs'
import { FaBinoculars } from 'react-icons/fa'
import { SlMagnifierAdd } from 'react-icons/sl'

const WrongLocation = () => {
    return (
        <div style={{ height: '90vh', color: '#fff' }} className='primaryColor flex align_center justify_center'>
            <div style={{}} className='mainBackground flex column gap1rem align_center padding2'>
                <p style={{ fontSize: '80px' }}>👀</p>
                <h1 style={{ fontSize: '30px', fontFamily: 'sans-serif' }}>404 Error</h1>
                <h1 style={{ fontSize: '30px', fontFamily: 'sans-serif' }}>Page not Found</h1>
                <p style={{ fontSize: '80px' }}>❌</p>
            </div>
        </div>
    )
}

export default WrongLocation
