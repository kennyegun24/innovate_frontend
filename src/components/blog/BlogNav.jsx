import React from "react";
import image from "../../images/noImage.png";
import "./blognav.css";
import { FaHome, FaUser } from "react-icons/fa";
import { BiPen } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const BlogNav = () => {
  const currentUser = {
    name: "Kenny",
  };
  return (
    <div className="blogMainNavDiv">
      <div className="blogNavImageDiv">
        <img className="blogNavImage" src={image} alt="" />
        <h4>Innvate Blog</h4>
      </div>

      <nav className="blogNavigationContainer">
        <NavLink
          className="font14 opacity05"
          to="/blog"
          end
          style={{
            padding: "0.2rem",
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            color: "#fff",
            textDecoration: "none",
          }}
        >
          <FaHome />
          <p>Blog Home</p>
        </NavLink>
        <NavLink
          className="font14 opacity05"
          to="/blog/create_blog_post"
          style={{
            padding: "0.2rem",
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            color: "#fff",
            textDecoration: "none",
          }}
        >
          <BiPen />
          <p>Create Blog</p>
        </NavLink>
        <NavLink
          className="font14 opacity05"
          to="/profile/edit_profile"
          style={{
            padding: "0.2rem",
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            color: "#fff",
            textDecoration: "none",
          }}
        >
          <FaUser />
          <p>Profile</p>
        </NavLink>
        <NavLink
          className="font14 opacity05"
          to={`/blog/${currentUser.name}/all`}
          style={{
            padding: "0.2rem",
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            color: "#fff",
            textDecoration: "none",
          }}
        >
          <FaUser />
          <p>My articles</p>
        </NavLink>
      </nav>
    </div>
  );
};

export default BlogNav;
