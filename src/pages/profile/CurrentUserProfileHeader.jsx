import React from "react";
import ProfileHeader from "../../components/profile/ProfileHeader";
import { useSelector } from "react-redux";

const CurrentUserProfileHeader = () => {
  const { userDetails } = useSelector((state) => state.user);
  return <ProfileHeader data={userDetails} />;
};

export default CurrentUserProfileHeader;
