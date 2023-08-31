import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const SearchBox = ({ setShow }) => {
  return (
    <div
      style={{
        // position: "fixed",
        position: "absolute",
        zIndex: 3,
        width: "100%",
        background: "rgba(1, 15, 34, 0.6)",
        height: "90vh",
        display: "flex",
        justifyContent: "right",
        // alignItems: "center",
        top: "10vh",
        left: 0,
      }}
      onClick={() => setShow(false)}
    >
      <div
        style={{
          height: "70vh",
          width: "35%",
          marginRight: "5%",
          color: "#fff",
        }}
        className="mainBackground padding1rem flex column gap15rem font14"
      >
        <Link
          to={"/search?query=hey"}
          className="pointer flex gap05rem align_center white decoration_none"
        >
          <FaSearch />
          Senior developer
        </Link>
        <Link
          to={"/search?query=hey"}
          className="pointer flex gap05rem align_center white decoration_none"
        >
          <FaSearch />
          Frontend web developer
        </Link>
        <Link
          to={"/search?query=hey"}
          className="pointer flex gap05rem align_center white decoration_none"
        >
          <FaSearch />
          Mobile software engineer
        </Link>
        <Link
          to={"/search?query=hey"}
          className="pointer flex gap05rem align_center white decoration_none"
        >
          <FaSearch />
          Artificial intelligence engineer
        </Link>
        <Link
          to={"/search?query=hey"}
          className="pointer flex gap05rem align_center white decoration_none"
        >
          <FaSearch />
          DevOps engineer
        </Link>
      </div>
    </div>
  );
};

export default SearchBox;
