import React from "react";
import vic from "../../images/kenny.png";
import image from "../../images/screen-0.jpg";
import { AiOutlineEdit } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileHeader from "../../components/profile/ProfileHeader";

const CompalyProfileHeader = () => {
  const data = {
    name: "Company dummy",
  };
  return <ProfileHeader data={data} />;
};

export default CompalyProfileHeader;
