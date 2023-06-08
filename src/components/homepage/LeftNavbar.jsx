import React from 'react'
import RecommendedPages from '../leftComps/LeftComps'

const LeftNavbar = () => {
    return (
        <div className='suggestedPages'>
            <p className='padding1rem white suggestedPageMainDiv'>Recommended Pages</p>
            <RecommendedPages />
            <RecommendedPages />
            <RecommendedPages />
            <RecommendedPages />
            <RecommendedPages />
        </div>
    )
}

export default LeftNavbar