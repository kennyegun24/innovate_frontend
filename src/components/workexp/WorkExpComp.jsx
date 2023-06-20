import React from 'react'
import img from '../../images/noImage.png'

const MemoizedWorkItem = React.memo(({ work }) => (
    <div className='flex gap05rem primaryColor padding05rem white borderRadius10px'>
        <img className='overViewImage' src={img} alt='' />
        <div>
            <h5>{work.title}</h5>
            <h6>{work.company_name}</h6>
            <p className='font12 opacity05'>Italy</p>
            <p className='font12 opacity05'>{work.start_date}</p>
            {work.description && (
                <p className='font12 opacity05' style={{ whiteSpace: 'pre-line' }}>
                    {work.description}
                </p>
            )}
        </div>
    </div>
));

export default MemoizedWorkItem;