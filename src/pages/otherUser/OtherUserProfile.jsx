import React, { useEffect } from "react";
import ProfilePosts from "../../components/profileosts/ProfilePosts";
import { useDispatch, useSelector } from "react-redux";
import {
  getOtherUserDetails,
  getOtherUserPosts,
} from "../../redux/auth_redux/otherUser/otherUser";

const OtherUserProfile = () => {
  const dispatch = useDispatch();
  const { otherUserPosts } = useSelector((state) => state.otherUserPosts_auth);
  const { currentUser } = useSelector((state) => state.user);
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
  }, [currentUser, dispatch, userId]);

  return (
    <div style={{ display: "flex", overflow: "hidden" }}>
      <ProfilePosts data={otherUserPosts} />
    </div>
  );
};

export default OtherUserProfile;
