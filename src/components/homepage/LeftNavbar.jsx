import React from 'react'
import RecommendedPages from '../leftComps/LeftComps'

const LeftNavbar = () => {
    return (
        <div style={{ borderRadius: '12px', background: '#202836', height: 'fit-content' }}>
            <p style={{ color: '#fff', padding: '1rem', borderBottom: '1px solid #111', opacity: '0.5' }}>Recommended Pages</p>
            <RecommendedPages />
            <RecommendedPages />
            <RecommendedPages />
            <RecommendedPages />
            <RecommendedPages />
        </div>
    )
}

export default LeftNavbar