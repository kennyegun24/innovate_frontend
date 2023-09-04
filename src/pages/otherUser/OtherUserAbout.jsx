import React from "react";
import AboutOptions from "../../components/profile/AboutOptions";
import { /*useDispatch, */ useSelector } from "react-redux";
// import { getWorkExp } from '../../redux/auth_redux/workexperieence/workexperience'
// import { getWorkExp } from "../../redux/auth_redux/workExperience/workExperience";

const OtherUserAbout = () => {
  // const dispatch = useDispatch();
  const { otherUserDetails } = useSelector(
    (state) => state.otherUserPosts_auth
  );
  // useEffect(() => {
  //   dispatch(getWorkExp(currentUser?.data?.token));
  // }, []);
  console.log(otherUserDetails);
  return (
    <div className="flex width100">
      <div className="profileMainDiv width100" style={{ overflow: "hidden" }}>
        <AboutOptions />
      </div>
    </div>
  );
};

export default OtherUserAbout;
