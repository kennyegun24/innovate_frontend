import React, { useState } from "react";
import { FaBlogger, FaUsers } from "react-icons/fa";
import { BiHomeHeart, BiMessage, BiShoppingBag } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import "./topnav.css";
import noImage from "../../images/noImage.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { SlBriefcase } from "react-icons/sl";
import SearchBox from "../search/SearchBox";

const TopNav = () => {
  const { currentUser, userDetails } = useSelector((state) => state.user);
  const [show, setShow] = useState(false);
  return (
    <div className="topNavMainDiv mainBackground justify_between align_center flex">
      <div className="flex align_center gap15rem">
        <NavLink to="/">
          <BiHomeHeart className="icons" />
        </NavLink>

        <NavLink to="/suggested_users">
          <FaUsers className="icons" />
        </NavLink>

        <NavLink to="/messages">
          <BiMessage className="icons" />
        </NavLink>

        <NavLink to="/notifications">
          <BsBell className="icons" />
        </NavLink>

        <NavLink to="/store">
          <BiShoppingBag className="icons" />
        </NavLink>

        <NavLink to="/jobs">
          <SlBriefcase className="icons" />
        </NavLink>

        <NavLink to="/blog">
          <FaBlogger className="icons" />
        </NavLink>
      </div>
      <div className="flex align_center gap15rem topNavSearchDiv ">
        <input
          onClick={() => setShow(!show)}
          className="width100 padding05rem topNavSearchInput"
          type="text"
          placeholder="Search....."
        />
        {show && <SearchBox />}
        <NavLink to="/profile">
          <div style={{ position: "relative" }}>
            <img
              src={currentUser ? userDetails?.image : noImage}
              className="postUpdateFormImage"
              alt=""
            />
            <div className="topNavImageOnlineStatus" />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default TopNav;
