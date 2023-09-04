import React from "react";
import { FaUserPlus } from "react-icons/fa";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRecommendedUsers } from "../../redux/auth_redux/user_recommend/UserRecommend";
import { Link } from "react-router-dom";

const SuggestedFriends = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { recommendedUsers } = useSelector((state) => state.recommended_users);

  useEffect(() => {
    dispatch(
      fetchRecommendedUsers({
        TOKEN: currentUser?.data?.token,
      })
    );
  }, [dispatch, currentUser?.data?.token]);
  return (
    <>
      {recommendedUsers.map((each) => (
        <div
          className="white flex align_center justify_between suggestedFriendsPagesMainDiv"
          style={{}}
        >
          <Link
            to={`/user/${each.name}/${each.id}/profile`}
            className="flex align_center gap05rem white decoration_none"
          >
            <img src={each.image} className="postUpdateFormImage" alt="" />
            <div>
              <p className="font14 weight700">{each.name}</p>
              <p className="font12 opacity05">{each.profession}</p>
            </div>
          </Link>
          <FaUserPlus />
        </div>
      ))}
    </>
  );
};

export default SuggestedFriends;
