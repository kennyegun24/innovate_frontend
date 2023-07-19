import React from 'react'
import { BiCheckCircle, BiInfoCircle } from 'react-icons/bi'
import { BsInfo } from 'react-icons/bs'
import { TfiClose } from 'react-icons/tfi'

const ApplicationSuccess = ({ onSubmit }) => {
    return (
        // <div className='applicationSuccess'>
        <div style={{
            position: 'fixed', zIndex: 3, width: '100%', background: 'rgba(1, 15, 34, 0.8)', height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center', top: '10vh', left: 0
        }}>
            <div
                style={{
                    backdropFilter: 'blur(5px)',
                    minHeight: '40vh',
                    width: '40%',
                    background: '#fff',
                    borderRadius: '6px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#111',
                    position: 'relative',
                }}>
                <div style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '20px' }}>
                    <TfiClose onClick={() => onSubmit(false)} />
                </div>
                <p style={{ fontSize: '35px' }}>✔</p>
                <p style={{ fontSize: '20px' }}>You have successfully applied to this Job...🚀</p>
            </div>
        </div>
    )
}

export default ApplicationSuccess
