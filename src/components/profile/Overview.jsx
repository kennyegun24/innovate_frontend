import React from 'react'
import img from '../../images/noImage.png'
import './style.css'
import { useSelector } from 'react-redux'

const Overview = () => {
  const { userDetails } = useSelector((state) => state.user)
  return (
    <div className='flex justify_between'>
      <div className='width50 flex column gap1rem' >
        {
          userDetails?.company &&
          <div className='flex gap05rem primaryColor padding05rem white borderRadius10px'>
            <img className='overViewImage' src={img} alt="" />
            <div>
              <h5>Works at {userDetails?.company}</h5>
              <p className='font12 opacity05'>{userDetails?.start_date}</p>
            </div>
          </div>
        }

        {
          userDetails?.school &&
          <div className='flex gap05rem primaryColor padding05rem white borderRadius10px'>
            <img className='overViewImage' src={img} alt="" />

            <div>
              <h5>Studied at {userDetails?.school}</h5>
            </div>
          </div>
        }

        {
          userDetails?.location &&
          <div className='flex gap05rem primaryColor padding05rem white borderRadius10px'>
            <img className='overViewImage' src={img} alt="" />

            <div>
              <h5>Lives in {userDetails?.location}</h5>
            </div>
          </div>
        }

      </div>

      {
        (userDetails?.bio || userDetails?.about)
        &&
        <div className='flex column gap1rem' style={{ width: '45%', }}>
          {
            userDetails?.bio &&
            <div className='borderRadius10px white padding1rem primaryColor height_fit'>
              <h5 className='textCenter'>Bio</h5>
              <p className='opacity05 font12'>{userDetails?.bio}</p>
            </div>
          }

          {
            userDetails?.about &&
            <div className='borderRadius10px white padding1rem primaryColor height_fit'>
              <h5 className='textCenter'>About</h5>
              <p className='opacity05 font12' style={{ whiteSpace: 'pre-line' }}>{userDetails?.about}</p>
            </div>
          }
        </div>
      }
    </div>
  )
}

export default Overview