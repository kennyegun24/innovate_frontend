import React, { useState, useCallback } from "react";
import { FaEllipsisV } from "react-icons/fa";
import ImagePreview from "../postimageshow/ImagePreview";
import LazyImage from "../lazyimage/LazyImage";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const ProfilePosts = ({ data }) => {
  const [preview, setPreview] = useState(false);
  const [modal, setModal] = useState(false);

  const navigate = useNavigate();

  const postDetails = useCallback(
    (post) => {
      navigate(`/post_details/${post.id}`);
    },
    [navigate]
  );

  const [newData, setNewData] = useState(data);

  const handleSortPopular = (e) => {
    const sortedPopular = [...newData];
    if (e.target.value === "more-popular - less-popular") {
      sortedPopular.sort(
        (a, b) =>
          b.likes_count + b.comments_count - (a.likes_count + a.comments_count)
      );
      setNewData(sortedPopular);
    } else if (e.target.value === "less-popular - more-popular") {
      sortedPopular.sort(
        (a, b) =>
          a.likes_count + a.comments_count - (b.likes_count + b.comments_count)
      );
      setNewData(sortedPopular);
    }
  };

  const handleSortRecent = (e) => {
    const sortedRecent = [...newData];
    if (e.target.value === "more-popular - less-popular") {
      sortedRecent.sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at)
      );
      setNewData(sortedRecent);
    } else if (e.target.value === "less-popular - more-popular") {
      sortedRecent.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
      setNewData(sortedRecent);
    }
  };

  const handleNoSorting = () => {
    setNewData(data);
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="profilePostsHeaderDiv">
        <h4 className="font16 weight500">Posts</h4>

        <div className="flex gap1rem">
          <button
            onClick={handleNoSorting}
            className="profilePostsButton pointer"
          >
            Normal
          </button>

          <select
            onChange={handleSortPopular}
            name="popularity"
            id=""
            className="profilePostsButton pointer width_fit"
          >
            <option value="Popularity">Popularity</option>
            <option value="less-popular - more-popular">
              Least - Most popular
            </option>
            <option value="more-popular - less-popular">
              Most - Least popular
            </option>
          </select>

          <select
            onChange={handleSortRecent}
            name="Recent"
            id=""
            className="profilePostsButton pointer"
          >
            <option value="Recent">Recent</option>
            <option value="less-popular - more-popular">
              Least - Most recent
            </option>
            <option value="more-popular - less-popular">
              Most - Least recent
            </option>
          </select>
        </div>
      </div>
      <div style={{ width: "80%" }}>
        {preview && (
          <ImagePreview
            img={modal.image}
            creator={modal.author}
            text={modal.text}
            setPreview={setPreview}
          />
        )}
        {newData.map((each) => {
          const {
            id,
            created_at,
            creator_name,
            creator_image,
            image,
            text,
            likes_count,
            comments_count,
          } = each;
          const formatDate = created_at;
          const formattedDate = moment(formatDate).fromNow();

          return (
            <div className="postCardDiv" key={id}>
              <div className="flxCnterBtwn">
                <div className="postUserInfo">
                  <img
                    src={creator_image}
                    className="postUpdateFormImage"
                    alt=""
                  />
                  <div>
                    <p className="font14 weight700">{creator_name}</p>
                    <p className="font12 opacity05">{formattedDate}</p>
                  </div>
                </div>
                <FaEllipsisV />
              </div>
              <p
                className="font14 pointer hover line_breaks"
                onClick={() => postDetails(each)}
              >
                {text}
              </p>
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
                  <p className="interractionsText">
                    {comments_count} comments.
                  </p>
                  <p className="interractionsText">{likes_count} likes.</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfilePosts;
