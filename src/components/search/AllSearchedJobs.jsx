import React from "react";
import AllJobs from "../../pages/jobs/AllJobs";
import vic from "../../images/vic.jpg";
import kenny from "../../images/kenny.png";

const AllSearchedJobs = () => {
  const jobs = [
    {
      location: "Hybrid, Lagos",
      company_name: "DeCellar",
      role: "AI Engineer",
      image: kenny,
      created_at: "Tue, 29 Aug 2023 20:07:50.701780000 UTC +00:00",
    },
    {
      location: "Remote, Venive Italy",
      company_name: "DeCellar",
      role: "Web3 Developer",
      image: vic,
      created_at: "Tue, 25 Aug 2023 20:07:50.701780000 UTC +00:00",
    },
  ];
  return <AllJobs data={jobs} />;
};

export default AllSearchedJobs;
