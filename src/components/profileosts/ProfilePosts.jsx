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

  return (
    <div style={{ width: "100%" }}>
      <div className="profilePostsHeaderDiv">
        <h4 className="font16 weight500">Posts</h4>

        <div className="flex gap1rem">
          <button className="profilePostsButton">Recent</button>
          <button className="profilePostsButton">Popular</button>
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
        {data.map((each) => {
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
                    setModal({ image: image, author: creator_name, text: text })
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
