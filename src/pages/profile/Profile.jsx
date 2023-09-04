import React, { useEffect } from "react";
import BasicInfo from "../../components/profile/BasicInfo";
import ProfilePosts from "../../components/profileosts/ProfilePosts";
import "./profile.css";
import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileNav from "./ProfileNav";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserPost } from "../../redux/auth_redux/post/post";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { currentUserPosts } = useSelector((state) => state.authPost);
  const { currentUser } = useSelector((state) => state.user);
  useEffect(() => {
    if (currentUserPosts.length <= 0) {
      dispatch(getCurrentUserPost({ TOKEN: currentUser?.data?.token }));
    }
  }, []);
  return (
    <div style={{ display: "flex", overflow: "hidden", width: "100%" }}>
      <ProfilePosts data={currentUserPosts} />
    </div>
  );
};

export default UserProfile;
