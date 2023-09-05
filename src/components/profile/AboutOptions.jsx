import React, { useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { SlGraduation } from "react-icons/sl";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaBriefcase } from "react-icons/fa";
import Overview from "./Overview";
import PersonalInfo from "./PersonalInfo";
import Workexperience from "./Workexperience";

const AboutOptions = () => {
  const [tab, setTab] = useState(0);
  return (
    <div className="flex justify_between width90 editNavDivBg">
      <div className="flex column gap1rem editNavBtnDiv">
        <h5
          className="flex gap1rem align_center editNavBtn"
          onClick={() => setTab(0)}
          style={{ background: tab === 0 ? "#5596E6" : "transparent" }}
        >
          <BsCheckCircle />
          Overview
        </h5>
        <h5
          className="flex gap1rem align_center editNavBtn"
          onClick={() => setTab(1)}
          style={{ background: tab === 1 ? "#5596E6" : "transparent" }}
        >
          <AiOutlineInfoCircle />
          Personal Info
        </h5>
        <h5
          className="flex gap1rem align_center editNavBtn"
          onClick={() => setTab(2)}
          style={{ background: tab === 2 ? "#5596E6" : "transparent" }}
        >
          <SlGraduation />
          Education
        </h5>
        <h5
          className="flex gap1rem align_center editNavBtn"
          onClick={() => setTab(3)}
          style={{ background: tab === 3 ? "#5596E6" : "transparent" }}
        >
          <FaBriefcase />
          Work Experience
        </h5>
      </div>

      <div style={{ width: "65%" }}>
        {tab === 0 && <Overview />}
        {tab === 1 && <PersonalInfo />}
        {tab === 3 && <Workexperience />}
      </div>
    </div>
  );
};

export default AboutOptions;
