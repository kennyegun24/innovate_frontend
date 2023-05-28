import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    <div>
      <BrowserRouter>
        <TopNav />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/userprofile' element={<UserProfile />} />
          <Route path='/about' element={<About />} />
          <Route path='/friends' element={<Friends />} />
          <Route path='/edit_profile' element={<EditProfile />} />
          <Route path='/post_details/:id' element={<PostsDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
