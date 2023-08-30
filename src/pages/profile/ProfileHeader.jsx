import React from "react";
// import vic from "../../images/kenny.png";
import image from "../../images/screen-0.jpg";
import { AiOutlineEdit } from "react-icons/ai";
import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
import { numberFormat } from "../../helpers/general";

const ProfileHeader = ({ data }) => {
  const url = document.location.pathname;
  // console.log(url);
  return (
    <>
      <img className="profileCoverImage" src={image} alt="" />

      <div className="profileUserDetails">
        <div className="profileFirstBtnsDiv">
          <button className="profileTmAbBtns">Timeline</button>

          <NavLink className="profileTmAbBtns" to="/profile/about">
            About
          </NavLink>
        </div>

        <div className="profileUserNameProfessionDetailsDiv">
          <img className="profileUserImage" src={data?.image} alt="" />
          <div className="profileUserName">
            <h2>{data?.name}</h2>
            {data?.profession && (
              <p className="opacity05">{data?.profession}</p>
            )}
          </div>
        </div>

        <div className="profileFirstBtnsDiv">
          <NavLink className="profileTmAbBtns" to="/profile/friends">
            Friends
          </NavLink>

          <button className="profileTmAbBtns">Photos</button>
        </div>
      </div>

      <div className="profileFollowerEditDiv">
        <div className="ProfileFollowersDiv">
          <h2>{numberFormat(data?.followers_count)} </h2>
          <p className="opacity05">Followers</p>
        </div>
        {url === "/userprofile" ? (
          <NavLink className="profileTmAbBtns" to="/edit_profile">
            <AiOutlineEdit />
            Edit Profile
          </NavLink>
        ) : (
          <button className="profileFollowtns" to="/edit_profile">
            Follow
          </button>
        )}
      </div>
    </>
  );
};

export default ProfileHeader;
