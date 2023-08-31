import React from "react";
import { Link } from "react-router-dom";

const AllJobs = ({ data }) => {
  return (
    <div>
      {data.map((job) => (
        <Link
          to={`/jobs/${job.company_name}/${job.id}`}
          style={{ color: "#d1cdcd", textDecoration: "none" }}
        >
          <div
            key={job.id}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
              marginBottom: "1rem",
            }}
          >
            <div>
              <img
                style={{ width: "50px", objectFit: "cover", height: "50px" }}
                src={job.image}
                alt=""
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.2rem",
              }}
            >
              <h2 style={{ fontSize: "14px" }}>{job.job_title}</h2>
              <p style={{ fontSize: "12px" }}>{job.company_name}</p>
              <p style={{ fontSize: "12px" }}>{job.created_date}</p>
              <p style={{ fontSize: "12px" }}>{job.location}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AllJobs;
