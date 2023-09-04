import React from "react";
import ProfileHeader from "../../components/profile/ProfileHeader";
import { useSelector } from "react-redux";

const OtherUserHeader = () => {
  const { otherUserDetails } = useSelector(
    (state) => state.otherUserPosts_auth
  );
  return <ProfileHeader data={otherUserDetails} />;
};

export default OtherUserHeader;
