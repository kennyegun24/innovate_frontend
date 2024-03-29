import React, { useState, useEffect, useCallback } from "react";
import { FaShare } from "react-icons/fa";
import Likes from "../interractions/Likes";
import Comments from "../interractions/Comments";
import { useSelector } from "react-redux";
import "./postcard.css";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import PostsLoader from "../loadingAnimation/PostsLoader";
import LazyImage from "../lazyimage/LazyImage";
import ImagePreview from "../postimageshow/ImagePreview";
import PostOptions from "../interractions/PostOptions";

const PostCard = () => {
  const { allPostsUnAuthUser, pending } = useSelector(
    (state) => state.unAuthPost
  );
  const { allPostsForAuthUser } = useSelector((state) => state.authPost);
  const [allPosts, setAllPosts] = useState([]);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    currentUser
      ? setAllPosts(allPostsForAuthUser)
      : setAllPosts(allPostsUnAuthUser);
  }, [currentUser, allPostsForAuthUser, allPostsUnAuthUser]);

  const [toggle, setToggle] = useState(() => {
    if (!currentUser && allPosts && allPosts.length > 0) {
      return Array(allPosts.length).fill(false);
    } else if (currentUser && allPosts && allPosts.length > 0) {
      return Array(allPosts.length).fill(false);
    }
    return [];
  });

  const [preview, setPreview] = useState(false);
  const [modal, setModal] = useState({});

  const navigate = useNavigate();

  const postDetails = useCallback(
    (post) => {
      navigate(`/post_details/${post.id}`);
    },
    [navigate]
  );

  const toggleMore = (index) => {
    setToggle((previousState) => {
      const newState = [...previousState];
      if (newState[index] === undefined) {
        newState[index] = false;
      }
      newState[index] = true;

      return newState;
    });
  };

  const ReadMore = React.memo(({ index }) => {
    return (
      <p className="font12 opacity05 pointer" onClick={() => toggleMore(index)}>
        Read more...{" "}
      </p>
    );
  });
  useEffect(() => {
    if (preview) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [preview]);

  return (
    <>
      {pending === "pending and auth user" ? (
        <div style={{ width: "100%" }}>
          <PostsLoader />
        </div>
      ) : (
        <>
          {preview && (
            <ImagePreview
              img={modal.image}
              creator={modal.author}
              text={modal.text}
              setPreview={setPreview}
            />
          )}
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
            const formatDate = created_at;
            const formattedDate = moment(formatDate).fromNow();
            return (
              <div className="postCardDiv padding1rem" key={index}>
                <div className="flxCnterBtwn">
                  <div className="postUserInfo">
                    <Link
                      to={
                        currentUser?.data?.user_id === author_id
                          ? "/userprofile"
                          : `/user/${creator_name}/${author_id}/profile`
                      }
                      className="flex white decoration_none gap05rem"
                    >
                      <img
                        src={creator_image}
                        className="postUpdateFormImage"
                        alt=""
                      />
                      <div>
                        <p className="font14 weight700">{creator_name}</p>
                        <p className="font12 opacity05">{formattedDate}</p>
                      </div>
                    </Link>
                  </div>
                  <PostOptions id={author_id} />
                </div>
                <div className="font14">
                  {text && !toggle[index] && text.length >= 150 ? (
                    <>
                      <p
                        className="font14 pointer hover line_breaks"
                        onClick={() => postDetails(each)}
                      >
                        {text.slice(0, 100)}...
                      </p>
                      <ReadMore index={index} />
                    </>
                  ) : (
                    <p
                      className="font14 pointer hover line_breaks"
                      onClick={() => postDetails(each)}
                    >
                      {text}
                    </p>
                  )}
                </div>
                {image && (
                  <div
                    className="postImageDiv"
                    onClick={() =>
                      setModal({
                        image: image,
                        author: creator_name,
                        text: text,
                      })
                    }
                  >
                    <LazyImage image={image} setPreview={setPreview} />
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
      )}
    </>
  );
};

export default PostCard;
