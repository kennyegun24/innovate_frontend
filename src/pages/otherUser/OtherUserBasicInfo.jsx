import React from "react";
import BasicInfo from "../../components/profile/BasicInfo";
import { useSelector } from "react-redux";

const OtherUserBasicInfo = () => {
  const { otherUserDetails } = useSelector(
    (state) => state.otherUserPosts_auth
  );

  return (
    <div style={{ display: "flex", overflow: "hidden", width: "100%" }}>
      <div className="profileBasicInfoMainDiv" style={{ width: "100%" }}>
        <BasicInfo data={otherUserDetails} />
      </div>
    </div>
  );
};

export default OtherUserBasicInfo;
