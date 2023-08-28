import React, { useEffect, useState } from "react";
import { Navigate, Route, Outlet, Routes, useLocation } from "react-router-dom";
import "./App.css";
import TopNav from "./components/topNav/TopNav";
import Login from "./pages/auth/Login";
// import Register from './pages/auth/Register';
import Homepage from "./pages/homepage/Homepage";
import UserProfile from "./pages/profile/Profile";
import About from "./pages/profile/About";
import PostsDetails from "./components/PostsDetails";
import Friends from "./pages/friends/Friends";
import EditProfile from "./pages/editProfile/EditProfile";
import { useSelector, useDispatch } from "react-redux";
import EditWorkExperience from "./components/addWork/AddWorkExperience";
import {
  getCurrentUserDetails,
  resetUserDetails,
} from "./redux/auth_redux/user/userSlice";
import Error401 from "./components/401/Error401";
import { resetState } from "./redux/auth_redux/post/post";
import { resetWorkExerience } from "./redux/workexperieence/workexperience";
import OtherUserProfile from "./pages/otherUser/OtherUserProfile";
import JobDetails from "./pages/jobs/JobsPage";
import AllJobs from "./pages/jobs/AllJobs";
import JobApplicationForm from "./pages/jobs/JobApplicationForm";
import Store from "./pages/store/Store";
import Blog from "./pages/blog/Blog";
import BlogNav from "./components/blog/BlogNav";
import BlogPost from "./components/blog/BlogPost";
import BlogWrite from "./components/blog/BlogWrite";
import AllChats from "./components/chats/AllChats";
import ChatContent from "./components/chats/ChatContent";
import Notification from "./pages/notification/Notification";
import SuggestedUsers from "./pages/suggestedUsers/SuggestedUsers";
// import CompanyProfile from './pages/company_profile/CompanyProfile';
import CompanyOpenJobs from "./pages/company_profile/CompanyOpenJobs";
import ProfileHeader from "./pages/company_profile/ProfileHeader";
import BasicInfo from "./pages/company_profile/BasicInfo";
import {
  getOtherUserDetails,
  getOtherUserPosts,
} from "./redux/auth_redux/otherUser/otherUser";
import ProfilePosts from "./pages/company_profile/ProfilePosts";
import AboutCompany from "./pages/company_profile/AboutCompany";
import AddNewJob from "./pages/company_profile/AddNewJob";
import WrongLocation from "./pages/404/WrongLocation";
import ProfileNav from "./pages/profile/ProfileNav";

function App() {
  const { currentUser, detailsError } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.authPost);
  const { workSliceError } = useSelector((state) => state.workExperience);
  const [err, setErr] = useState(null);

  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    currentUser && dispatch(getCurrentUserDetails(currentUser?.data?.token));
  }, [currentUser, dispatch]);

  useEffect(() => {
    if (
      (error &&
        error.code === "ERR_BAD_REQUEST" &&
        error.message === "Request failed with status code 401") ||
      (workSliceError &&
        workSliceError.code === "ERR_BAD_REQUEST" &&
        workSliceError.message === "Request failed with status code 401") ||
      (detailsError &&
        detailsError.code === "ERR_BAD_REQUEST" &&
        detailsError.message === "Request failed with status code 401")
    ) {
      dispatch(resetState());
      dispatch(resetUserDetails());
      dispatch(resetWorkExerience());
      setErr(true);
    }
  }, [error, workSliceError, detailsError, dispatch]);

  const isLoginPage = location.pathname === "/login";

  const { otherUserPosts, otherUserDetails } = useSelector(
    (state) => state.otherUserPosts_auth
  );
  const link = document.location.pathname;
  const userId = link.split("/")[3];
  useEffect(() => {
    dispatch(
      getOtherUserPosts({ TOKEN: currentUser?.data?.token, id: userId })
    );
    if (currentUser) {
      dispatch(
        getOtherUserDetails({ TOKEN: currentUser?.data?.token, id: userId })
      );
    }
  }, [currentUser, userId, dispatch]);

  const current_User = {
    data: {
      type: "company",
      // type: 'individual',
    },
  };

  return (
    <div className="mainAppDiv">
      <div className="mainAppSmDiv">
        {!isLoginPage && <TopNav />}
        {err && <Error401 setErr={setErr} />}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/login"
            element={!currentUser ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/user/:name/:id/profile"
            element={<OtherUserProfile />}
          />
          <Route path="/post_details/:id" element={<PostsDetails />} />
          <Route path="/store" element={<Store />} />
          <Route path="/suggested_users" element={<SuggestedUsers />} />
          <Route path="/*" element={<WrongLocation />} />
          <Route
            path="/profile"
            element={
              !currentUser ? (
                <div style={{ display: "flex", overflow: "hidden" }}>
                  <div style={{ width: "25%", background: "#151A23" }}>
                    <ProfileNav />
                  </div>
                  <div
                    className="profileMainDiv"
                    style={{ width: "100%", overflow: "hidden" }}
                  >
                    <Outlet />
                  </div>
                </div>
              ) : (
                <Navigate to="/login" />
              )
            }
          >
            <Route path="/profile" element={<UserProfile />} />
            <Route
              path="/profile/add_experience"
              element={<EditWorkExperience />}
            />
            {current_User.data.type === "company" && (
              <Route path="/profile/add_job" element={<AddNewJob />} />
            )}
            <Route path="/profile/edit_profile" element={<EditProfile />} />
            <Route path="/profile/about" element={<About />} />
            <Route path="/profile/friends" element={<Friends />} />
          </Route>

          <Route
            path="/company/:id"
            element={
              <div className="profileMainDiv">
                <ProfileHeader data={otherUserDetails} />

                <div className="profileBasicPostsInfos">
                  <div className="profileBasicInfoMainDiv">
                    <BasicInfo />
                  </div>
                  <div
                    className="ProfileAllPostsMainDiv"
                    style={{ maxHeight: "70vh" }}
                  >
                    <Outlet />
                  </div>
                </div>
              </div>
            }
          >
            <Route path="/company/:id/jobs" element={<CompanyOpenJobs />} />
            <Route
              path="/company/:id/posts"
              element={<ProfilePosts data={otherUserPosts} />}
            />
            <Route path="/company/:id/about" element={<AboutCompany />} />
          </Route>
          <Route path="/notifications" element={<Notification />} />
          <Route
            path="/blog"
            element={
              <div className="blog-container">
                <div className="blogNav-component">
                  <BlogNav />
                </div>
                <div className="blogs-Component scrollBar">
                  <Outlet />
                </div>
              </div>
            }
          >
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/blog/create_blog_post" element={<BlogWrite />} />
          </Route>
          <Route
            path="/jobs"
            element={
              <div className="jobs-container">
                <div className="job-component scrollBar">
                  <AllJobs />
                </div>
                <div className="job-posts-details scrollBar">
                  <Outlet />
                </div>
              </div>
            }
          >
            <Route path="/jobs/:company_name/:id" element={<JobDetails />} />
            <Route
              path="/jobs/:company_name/:id/apply"
              element={<JobApplicationForm />}
            />
          </Route>
          <Route
            path="/messages"
            element={
              <div className="chat-container">
                <div className="allChat-component scrollBar">
                  <AllChats />
                </div>
                <div className="chatContent-Component">
                  <Outlet />
                </div>
              </div>
            }
          >
            <Route path="/messages/:name/:id" element={<ChatContent />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
