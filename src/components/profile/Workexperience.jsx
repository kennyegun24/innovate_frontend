import React from 'react'
import { useSelector } from 'react-redux'
import MemoizedWorkItem from '../workexp/WorkExpComp'

const Workexperience = () => {
    const { workExperience } = useSelector((state) => state.workExperience)

    return (
        <div className='flex justify_between'>
            <div className='width50 flex column gap1rem' >
                {
                    workExperience.map((work) => (

                        <MemoizedWorkItem key={work.id} work={work} />
                    ))
                }
            </div>

            <div style={{ width: '45%' }}>
                <div className='flex gap1rem column primaryColor padding1rem white borderRadius10px'>
                    <h5 className='textCenter'>Skills</h5>
                    <p className='opacity05 font12'>
                        1. Ruby on Rails
                        <br />
                        2. HTML and CSS
                        <br />
                        3. Javascript
                        <br />
                        4. Ruby
                        <br />
                        5. React.Js
                        <br />
                        6. Jest(testing tool)
                        <br />
                        7. Capybara(testing tool)
                        <br />
                        8. Firebase
                        <br />
                        9. Redux toolkit
                        <br />
                        10. React Native
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Workexperience