import React from "react";
import vic from "../../images/vic.jpg";
import kenny from "../../images/kenny.png";
import musk from "../../images/musk.jpg";
import kim from "../../images/kim.jpg";
import trump from "../../images/trump.png";
import gates from "../../images/gates.jpg";
import "./searchBox.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LazyImage from "../lazyimage/LazyImage";
// import ImagePreview from "../postimageshow/ImagePreview";
import PostOptions from "../interractions/PostOptions";
import { FaShare } from "react-icons/fa";
import Likes from "../interractions/Likes";
import Comments from "../interractions/Comments";
import { convertTime } from "../../helpers/general";

const SearchPage = () => {
  const { currentUser } = useSelector((state) => state.user);
  const getUrl = document.location.search;
  const getSearchItem = getUrl
    .split("?")
    .join("")
    .split("query")
    .join("")
    .split("=")
    .join("");
  const users = [
    {
      image: vic,
      name: "Vittoria Ogundele",
      followers: 293343,
      header:
        "I focus on developing near perfect solutions to customers problems. TDD, ",
      profession: "Software developer.",
      verified: true,
      id: 10,
    },
    {
      image: kenny,
      name: "Kenny Egun",
      followers: 238278334,
      header:
        "I focus on developing near perfect solutions to customers problems. TDD, ",
      profession: "Software developer.",
      verified: true,
      id: 11,
    },
    {
      image: musk,
      name: "Elon Musk",
      followers: 4353,
      header:
        "I focus on developing near perfect solutions to customers problems. TDD, ",
      profession: "Software developer.",
      verified: true,
      id: 3,
    },
    {
      image: kim,
      name: "Kim Jong un",
      followers: 544425,
      header:
        "I focus on developing near perfect solutions to customers problems. TDD, ",
      profession: "Software developer.",
      verified: true,
      id: 13,
    },
    {
      image: trump,
      name: "Donald Trump",
      followers: 4332,
      header:
        "I focus on developing near perfect solutions to customers problems. TDD, ",
      profession: "Software developer.",
      verified: true,
      id: 8,
    },
    {
      image: gates,
      name: "Bill Gates",
      followers: 9427386,
      header:
        "I focus on developing near perfect solutions to customers problems. TDD, ",
      profession: "Software developer.",
      verified: true,
      id: 5,
    },
  ];

  const allPosts = [
    {
      creator_name: "Kenny Elias",
      creator_image: kenny,
      likes_count: 1928,
      comments_count: 20,
      text: "Life is a journey of constant discovery, a symphony of moments that compose our unique stories. It's a delicate dance between time and experience, where each step shapes our identity. We traverse through seasons of joy and sorrow, weaving intricate threads of relationships and memories along the way.",
      image: vic,
      created_at: "Tue, 29 Aug 2023 20:07:50.701780000 UTC +00:00",
      id: 1,
      liked: true,
      author_id: 1,
    },
    {
      creator_name: "Ogundele Victoria",
      creator_image: vic,
      likes_count: 2534,
      comments_count: 32,
      text: "Life is a journey of constant discovery, a symphony of moments that compose our unique stories. It's a delicate dance between time and experience, where each step shapes our identity. We traverse through seasons of joy and sorrow, weaving intricate threads of relationships and memories along the way.",
      created_at: "Tue, 29 Mar 2023 20:07:50.701780000 UTC +00:00",
      id: 2,
      liked: true,
      author_id: "",
    },
    {
      creator_name: "Kenny Elias",
      creator_image: kenny,
      likes_count: 1928,
      comments_count: 20,
      text: "Life is a journey of constant discovery, a symphony of moments that compose our unique stories. It's a delicate dance between time and experience, where each step shapes our identity. We traverse through seasons of joy and sorrow, weaving intricate threads of relationships and memories along the way.",
      image: vic,
      created_at: "Tue, 29 Feb 2023 20:07:50.701780000 UTC +00:00",
      id: 1,
      liked: true,
      author_id: "",
    },
  ];

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

  return (
    <div className="flex column gap1rem searchUsersDiv primaryColor width100 height100 paddingLeft2rem paddingRight2rem paddingTop1Rem">
      <div className="padding1rem flex column gap1rem width100 searchUsersSmDiv">
        <h3 className="white">
          Users bearing the name{" "}
          <strong className="blue decoration_underline">
            #{getSearchItem.toUpperCase()}
          </strong>
        </h3>
        <div className="searchUsersSm2Div">
          <Swiper
            modules={[Navigation]}
            spaceBetween={15}
            slidesPerView={4}
            slidesPerGroup={4}
            navigation
          >
            {users.map((user) => (
              <SwiperSlide>
                <div className="padding1rem searchUsers">
                  <img src={user.image} className="img" alt="" />
                  <h3 className="searchUserName">{user.name}</h3>
                  <p className="searchUserHeader">{user.header}</p>
                  <button className="searchUserFollowButton pointer">
                    Follow
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="flex gap1rem searchUsersDiv primaryColor width100 justify_end">
        <div className="padding1rem flex column gap1rem width35 searchUsersSmDiv">
          <h3 className="white">
            Posts related to your search{" "}
            <strong className="blue decoration_underline">
              #{getSearchItem.toUpperCase()}
            </strong>
          </h3>
          <>
            {allPosts?.map((each, index) => {
              const {
                creator_name,
                creator_image,
                likes_count,
                comments_count,
                text,
                image,
                created_at,
                id,
                liked,
                author_id,
              } = each;
              return (
                <div className="postCardDiv" key={index}>
                  <div className="flxCnterBtwn">
                    <div className="postUserInfo">
                      <Link
                        to={
                          currentUser?.data?.user_id === author_id
                            ? "/userprofile"
                            : `/user/${creator_name}/${author_id}/profile`
                        }
                        className="white decoration_none flex gap1rem"
                      >
                        <img
                          src={creator_image}
                          className="postUpdateFormImage"
                          alt=""
                        />
                        <div>
                          <p className="font14 weight700">{creator_name}</p>
                          <p className="font12 opacity05">
                            {convertTime(created_at)}
                          </p>
                        </div>
                      </Link>
                    </div>
                    <PostOptions id={author_id} />
                  </div>
                  <div className="font14">
                    {text && text.length >= 150 ? (
                      <>
                        <p
                          className="font14 pointer hover line_breaks"
                          // onClick={() => postDetails(each)}
                        >
                          {text.slice(0, 100)}...
                        </p>
                      </>
                    ) : (
                      <p
                        className="font14 pointer hover line_breaks"
                        // onClick={() => postDetails(each)}
                      >
                        {text}
                      </p>
                    )}
                  </div>
                  {image && (
                    <div
                      className="postImageDiv"
                      // onClick={() =>
                      //   setModal({
                      //     image: image,
                      //     author: creator_name,
                      //     text: text,
                      //   })
                      // }
                    >
                      <LazyImage image={image} />
                    </div>
                  )}
                  <div className="interractionDiv">
                    <div className="interractionsDivSm">
                      <Likes count={likes_count} liked={liked} postId={id} />
                      <FaShare />
                      <Comments />
                    </div>
                    <div className="interractionsDivSm">
                      <p className="interractionsText">
                        {comments_count} comments.
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            <Link
              to={`/search/posts?query=${getSearchItem}`}
              className="searchUserFollowButton decoration_none textCenter pointer"
            >
              See all results
            </Link>
          </>
        </div>

        <div className="padding1rem flex column gap1rem width50 height_fit searchUsersSmDiv">
          <h3 className="white">
            Jobs related to your search{" "}
            <strong className="blue decoration_underline">
              #{getSearchItem.toUpperCase()}
            </strong>
          </h3>
          {jobs.map((job) => (
            <div className="white searchJobs flex gap1rem">
              <img className="searchJobsImage" src={job.image} alt="" />
              <div className="width100 flex column gap05rem">
                <h3 className="font14 weight700">{job.role}</h3>
                <h4 className="font12 weight700">{job.company_name}</h4>
                <p className="font14 weight700">{job.location}</p>
                <p className="font12 opacity05">
                  {convertTime(job.created_at)}
                </p>
                <hr className="searchJobLine" />
              </div>
            </div>
          ))}
          <Link
            to={`/search/jobs?query=${getSearchItem}`}
            className="searchUserFollowButton decoration_none textCenter pointer"
          >
            See all results
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
