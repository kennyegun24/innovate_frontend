import React from "react";
import ProfileHeader from "../profile/ProfileHeader";
import FriendList from "../../components/friends/FriendList";

const Friends = () => {
  return (
    <div className="flex">
      <div className="profileMainDiv">
        <ProfileHeader />

        <FriendList />
      </div>
    </div>
  );
};

export default Friends;
