import React from 'react'
import img from '../../images/noImage.png'
import { useSelector } from 'react-redux'

const PersonalInfo = () => {
  const { userDetails } = useSelector((state) => state.user)
  return (
    <div className='flex justify_between'>
      <div className='width50 flex column gap1rem' >
        <div className='flex gap05rem primaryColor padding05rem white borderRadius10px'>
          <img className='overViewImage' src={img} alt="" />
          <div>
            <h5>Email address</h5>
            <a className='font12 opacity05 white' style={{ textDecoration: 'none' }} href={`mailto:${userDetails?.email}`}>{userDetails?.email}</a>
          </div>
        </div>

        {
          userDetails?.phoneNumber &&
          <div className='flex gap05rem primaryColor padding05rem white borderRadius10px'>
            <img className='overViewImage' src={img} alt="" />
            <div>
              <h5>Phone Number</h5>
              <a className='font12 opacity05 white' style={{ textDecoration: 'none' }} href={`tel:${userDetails?.phoneNumber}`}>{userDetails?.phoneNumber}</a>
            </div>
          </div>
        }

        {
          userDetails?.company
          &&
          <div className='flex gap05rem primaryColor padding05rem white borderRadius10px'>
            <img className='overViewImage' src={img} alt="" />
            <div>
              <h5>Works at {userDetails?.company}</h5>
              <p className='font12 opacity05 white'>{userDetails.start_date}</p>
            </div>
          </div>
        }

        {
          userDetails.website1 &&
          <div className='flex gap05rem primaryColor padding05rem white borderRadius10px'>
            <img className='overViewImage' src={img} alt="" />
            <div>
              <h5>Website 1</h5>
              <a href={`${userDetails.website1}`} className='font12 opacity05 white' style={{ textDecoration: 'none' }}>Twitter</a>
            </div>
          </div>
        }

        {
          userDetails.website2 &&
          <div className='flex gap05rem primaryColor padding05rem white borderRadius10px'>
            <img className='overViewImage' src={img} alt="" />
            <div>
              <h5>Website 2</h5>
              <a href={`${userDetails.website2}`} className='font12 opacity05 white' style={{ textDecoration: 'none' }}>Linkedin</a>
            </div>
          </div>
        }

        {
          userDetails.website3 &&
          <div className='flex gap05rem primaryColor padding05rem white borderRadius10px'>
            <img className='overViewImage' src={img} alt="" />
            <div>
              <h5>Website 3</h5>
              <a href={`${userDetails.website3}`} className='font12 opacity05 white' style={{ textDecoration: 'none' }}>Portfolio</a>
            </div>
          </div>
        }

      </div>
    </div>
  )
}

export default PersonalInfo