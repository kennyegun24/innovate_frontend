import React from "react";
import BasicInfo from "../../components/profile/BasicInfo";
import { useSelector } from "react-redux";

const CurrentUserBasicInfo = () => {
  const { userDetails } = useSelector((state) => state.user);
  return (
    <div style={{ display: "flex", overflow: "hidden", width: "100%" }}>
      <div className="profileBasicInfoMainDiv" style={{ width: "100%" }}>
        <BasicInfo data={userDetails} />
      </div>
    </div>
  );
};

export default CurrentUserBasicInfo;
