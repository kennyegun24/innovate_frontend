import React, { useEffect, useRef, useState } from 'react'
import { FaBell, FaCamera, FaCheck, FaCheckCircle, FaPen } from 'react-icons/fa'
import './postUpdate.css'
import { makePost } from '../../redux/posts/postSlice'
import { useDispatch, useSelector } from 'react-redux'
import Resizer from 'react-image-file-resizer'
import axios from 'axios'

const PostUpdate = () => {
  const [postActive, setPostActive] = useState(false)
  const { currentUser, userDetails } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const [text, setText] = useState('')
  const [selectedImage, setSelectedImage] = useState(null);
  const textareaRef = useRef(null);
  const [progress, setProgress] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (textareaRef.current && !textareaRef.current.contains(event.target)) {
        setPostActive(false);
      }
    };
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const submit = async (e) => {
    setProgress(true)
    e.preventDefault()

    if (selectedImage) {

      const file = selectedImage;
      // const uploadPreset = process.env.CLOUDINARY_UPLOAD_PRESET
      const uploadPreset = 'ml_default'
      // const cloud_name = process.env.CLOUDINARY_CLOUD_NAME
      const cloud_name = 'drfqge33t'

      const maxWidth = 800;
      const maxHeight = 800;
      const quality = 75;
      const fileType = 'image/jpeg';

      Resizer.imageFileResizer(
        file,
        maxWidth,
        maxHeight,
        fileType,
        quality,
        0,
        async (resizedImage) => {
          const formData = new FormData();
          formData.append('file', resizedImage);
          formData.append('upload_preset', uploadPreset)

          try {
            const postCloudinary = await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData)
            const imageUrl = postCloudinary.data.secure_url;
            await makePost({ text, imageUrl, TOKEN: currentUser?.data?.token }, dispatch)
            setProgress(false)
          } catch (error) {
            console.error('Error uploading image to Cloudinary:', error);
          }
        },
        'base64'
      );
    } else {
      makePost({ text, TOKEN: currentUser?.data?.token }, dispatch)
    }
  }

  return (
    <div className='postUpdateDiv' >
      <div className='postUpdateDivSm' >
        <div className='postUpdateTabDiv' >
          <div className='postUpdateTab' >
            <FaPen />
            <p className='tabText' >Post</p>
          </div>
          <div className='postUpdateTab2' >
          </div>
        </div>
        <div className='postUpdateFormDiv' >
          <img className='postUpdateFormImage' src={userDetails?.image} alt="" />
          <form className='width100' >
            <textarea onChange={(e) => setText(e.target.value)} ref={textareaRef} onClick={() => setPostActive(true)} className='textarea' placeholder='Post something about you...' rows='7' />
          </form>
        </div>
        <div className='postUpdateBottomNavDiv padding1rem' >
          <input style={{ display: 'none' }} type="file" id='image' accept='image/*' onChange={(e) => setSelectedImage(e.target.files[0])} />
          <label className='postUpdateBottomNav pointer' htmlFor="image">
            <FaCamera />
            <p className='font12' >media</p>
          </label>
        </div>
        {
          postActive &&
          <>
            <div className='flex align_center gap1rem padding1rem postActivityDiv'>
              <FaCheckCircle className='postActivityIcon' />
              <FaBell className='postActivityIcon' />
              <p className='white'>Activity Feed</p>
            </div>
            <div className='postUpdateButtonNavDiv' >
              <button onClick={submit} className='pointer postUpdateButton text_center' >Post</button>
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default PostUpdate