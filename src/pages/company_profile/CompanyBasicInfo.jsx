import React from "react";
import {
  FaBlog,
  FaEllipsisV,
  FaGraduationCap,
  FaLocationArrow,
  FaSuitcase,
  FaUsers,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { followersFormat } from "../../components/suggestedUsers/suggestedListHelper";
import { company_capacity_converter } from "../../helpers/general";

const CompanyBasicInfo = () => {
  const { userDetails } = useSelector((state) => state.user);
  const companyDetails = {
    capacity: 293,
    creation_date: "1/1/2005",
    post_count: 29,
    followers_count: 3817381,
    open_jobs: 2,
    industry: "Technology",
    location: "Tokyo",
  };
  return (
    <div className="basicProfileInfo">
      <div className="basicProfileTitleDiv">
        <h4 className="font16 weight500">Basic Informations</h4>
        <FaEllipsisV className="opacity05" />
      </div>

      <div className="basicProfileInfoDiv">
        <div className="basicProfileInfoDivSm">
          <div>
            <h5>Industry</h5>
            <p className="opacity05 font12">{companyDetails.industry}</p>
          </div>
          <FaGraduationCap />
        </div>
        <>
          <hr />
          <div className="basicProfileInfoDivSm">
            <div>
              <h5>Company Location</h5>
              <p className="opacity05 font12">{companyDetails.location}</p>
            </div>
            <FaLocationArrow />
          </div>
        </>
        <hr />
        <div className="basicProfileInfoDivSm">
          <div>
            <h5>Followers</h5>
            <p className="opacity05 font12">
              {followersFormat(companyDetails.followers_count)} followers
            </p>
          </div>
          <FaUsers />
        </div>
        <>
          <hr />
          <div className="basicProfileInfoDivSm">
            <div>
              <h5>Number of employees</h5>
              <p className="opacity05 font12">
                {company_capacity_converter(companyDetails.capacity)}
              </p>
            </div>
            <FaUsers />
          </div>
        </>
        <hr />
        <div className="basicProfileInfoDivSm">
          <div>
            <h5>Number of open jobs</h5>
            <p className="opacity05 font12">{companyDetails.open_jobs}</p>
          </div>
          <FaSuitcase />
        </div>
        <hr />
        <div className="basicProfileInfoDivSm">
          <div>
            <h5>Number of Posts</h5>
            <p className="opacity05 font12">
              {followersFormat(companyDetails.post_count)}
            </p>
          </div>
          <FaBlog />
        </div>
      </div>
    </div>
  );
};

export default CompanyBasicInfo;
