import React from 'react'
import { Link } from 'react-router-dom';

const Error401 = ({ setErr }) => {
    return (
        <div style={{
            position: 'fixed', zIndex: 3, width: '100%', height: '90vh', background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(5px)', display: 'flex', justifyContent: 'center', alignItems: 'center', top: '10vh', left: 0
        }}>
            <div
                style=
                {{
                    minHeight: '40vh',
                    width: '40%',
                    background: '#fff',
                    borderRadius: '6px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <h4 style={{ fontSize: '20px' }}>Your Session has Expired!</h4>
                <p style={{ fontSize: '16px' }}>Proceed to Login or go back to Homepage!!!!</p>
                <div className='flex gap1rem align_center marginTop15'>

                    <Link onClick={() => setErr(false)} style={{ background: 'red', textDecoration: 'none', padding: '0.5rem', color: '#fff', fontWeight: 700, borderRadius: '4px' }} to='/login'>Login</Link>
                    <Link onClick={() => setErr(false)} style={{ background: 'red', textDecoration: 'none', padding: '0.5rem', color: '#fff', fontWeight: 700, borderRadius: '4px' }} to='/'>Homepage</Link>
                </div>
            </div>
        </div>
    )
}

export default Error401;