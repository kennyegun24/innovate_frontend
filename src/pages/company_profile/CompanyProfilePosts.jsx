import React, { useState, useCallback } from "react";
import { FaShare, FaEllipsisV } from "react-icons/fa";
// import Likes from '../interractions/Likes'
// import Comments from '../interractions/Comments'
import moment from "moment";
import { useNavigate } from "react-router-dom";
import LazyImage from "../../components/lazyimage/LazyImage";
import ImagePreview from "../../components/postimageshow/ImagePreview";
import ProfilePosts from "../../components/profileosts/ProfilePosts";

const CompanyProfilePosts = ({ data }) => {
  const [preview, setPreview] = useState(false);
  const [modal, setModal] = useState(false);

  const navigate = useNavigate();

  const postDetails = useCallback(
    (post) => {
      navigate(`/post_details/${post.id}`);
    },
    [navigate]
  );

  return <ProfilePosts data={[]} />;
};

export default CompanyProfilePosts;
