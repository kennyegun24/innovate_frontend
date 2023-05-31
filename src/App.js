import React, { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import TopNav from './components/topNav/TopNav';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Homepage from './pages/homepage/Homepage';
import UserProfile from './pages/profile/Profile';
import About from './pages/profile/About';
import PostsDetails from './components/PostsDetails';
import Friends from './pages/friends/Friends';
import EditProfile from './pages/editProfile/EditProfile';
import { useSelector, useDispatch } from 'react-redux';
import EditWorkExperience from './components/addWork/AddWorkExperience';
import { getCurrentUserDetails } from './redux/user/userSlice';

function App() {
  const { currentUser } = useSelector((state) => state.user)

  const dispatch = useDispatch()

  useEffect(() => {
    currentUser && dispatch(getCurrentUserDetails(currentUser?.data));
  }, [currentUser]);

  return (
    <div>
      <BrowserRouter>
        <TopNav />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={!currentUser ? <Login /> : <Navigate to='/' />} />
          <Route path='/userprofile' element={!currentUser ? <Navigate to='/login' /> : <UserProfile />} />
          <Route path='/about' element={!currentUser ? <Navigate to='/login' /> : <About />} />
          <Route path='/friends' element={!currentUser ? <Navigate to='/login' /> : <Friends />} />
          <Route path='/edit_profile' element={!currentUser ? <Navigate to='/login' /> : <EditProfile />} />
          <Route path='/add_experience' element={!currentUser ? <Navigate to='/login' /> : <EditWorkExperience />} />
          <Route path='/post_details/:id' element={<PostsDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
