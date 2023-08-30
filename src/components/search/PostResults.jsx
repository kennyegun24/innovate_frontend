import React from "react";
import vic from "../../images/vic.jpg";
import kenny from "../../images/kenny.png";
import musk from "../../images/musk.jpg";
import kim from "../../images/kim.jpg";
import trump from "../../images/trump.png";
import gates from "../../images/gates.jpg";
import PostOptions from "../interractions/PostOptions";
import { FaShare } from "react-icons/fa";
import Likes from "../interractions/Likes";
import Comments from "../interractions/Comments";
import { convertTime } from "../../helpers/general";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LazyImage from "../lazyimage/LazyImage";
const PostResults = () => {
  const getUrl = document.location.search;
  const getSearchItem = getUrl
    .split("?")
    .join("")
    .split("query")
    .join("")
    .split("=")
    .join("");
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
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="flex gap1rem searchUsersDiv primaryColor width100 justify_start paddingLeft5 paddingTop1Rem">
      <div className="padding1rem flex column gap1rem width40 searchUsersSmDiv">
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
        </>
      </div>
    </div>
  );
};

export default PostResults;
