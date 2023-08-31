import React from "react";
import "./jobs.css";
import { Link, useNavigate } from "react-router-dom";

const JobDetails = () => {
  const navigate = useNavigate();
  const job = {
    job_title: "Backend Developer",
    location: "USA, New York City Metropolitan Area (Hybrid)",
    time: "1 Month ago",
    job_type: "Full-time",
    employees_count: "232",
    company_name: "DeCellar",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor dolores, suscipit eius ad eaque itaque eligendi quis dignissimos vero numquam pariatur, odit velit labore aliquam, modi error nam hic. Doloremque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae tenetur, neque ut tempore dolor repellendus voluptatum inventore ab minima dolores unde dolorem odio iusto cum placeat nisi illum aut ducimus! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor dolores, suscipit eius ad eaque itaque eligendi quis dignissimos vero numquam pariatur, odit velit labore aliquam, modi error nam hic. Doloremque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae tenetur, neque ut tempore dolor repellendus voluptatum inventore ab minima dolores unde dolorem odio iusto cum placeat nisi illum aut ducimus! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor dolores, suscipit eius ad eaque itaque eligendi quis dignissimos vero numquam pariatur, odit velit labore aliquam, modi error nam hic. Doloremque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae tenetur, neque ut tempore dolor repellendus voluptatum inventore ab minima dolores unde dolorem odio iusto cum placeat nisi illum aut ducimus! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor dolores, suscipit eius ad eaque itaque eligendi quis dignissimos vero numquam pariatur, odit velit labore aliquam, modi error nam hic. Doloremque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae tenetur, neque ut tempore dolor repellendus voluptatum inventore ab minima dolores unde dolorem odio iusto cum placeat nisi illum aut ducimus! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor dolores, suscipit eius ad eaque itaque eligendi quis dignissimos vero numquam pariatur, odit velit labore aliquam, modi error nam hic. Doloremque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae tenetur, neque ut tempore dolor repellendus voluptatum inventore ab minima dolores unde dolorem odio iusto cum placeat nisi illum aut ducimus!",
    requirements:
      "1. Familiarity with frontend tech such as React.js, Vue.js, Angular.js. \n 2. Atleast 1year experience with any frontend technology. \n 3. Familiar with any backend technology (Ruby on Rails preferred). \n 4. API development and maintenance. \n 5. Resident or has work permit of either USA or Canada. \n 6. Can commute to an hybrid setting, with 2days in-office. \n 7. Exeprience using Amazon Web Service",
  };
  const urlId = document.location.pathname.split("/")[3];
  const urlName = document.location.pathname.split("/")[2];
  return (
    <div
      style={{
        padding: "0 1rem 0 1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        alignItems: "flex-start",
      }}
    >
      <div>
        <h2 style={{ fontSize: "35px" }}>{job.job_title}</h2>
        <p style={{ fontSize: "16px" }}>{job.company_name}</p>
        <p style={{ fontSize: "16px" }}>{job.location}</p>
        <p style={{ fontSize: "16px" }}>{job.time}</p>
        <p>{job.job_type}</p>
        <p>{job.employees_count} Employees</p>
        <button
          onClick={() => navigate("/company/1")}
          className="companyProfileButton pointer"
        >
          Check company Profile
        </button>
      </div>
      <div>
        <h3>Description</h3>
        <p>{job.desc}</p>
      </div>
      <div>
        <h3>Job Requirements</h3>
        <p style={{ whiteSpace: "pre-line" }}>{job.requirements}</p>
      </div>
      <Link
        to={`/jobs/${urlName}/${urlId}/apply`}
        style={{
          justifySelf: "flex-start",
          color: "#fff",
          background: "#5596E6",
          padding: "0.5rem",
          borderRadius: "10px",
          textDecoration: "none",
        }}
      >
        Apply Now
      </Link>
    </div>
  );
};

export default JobDetails;
