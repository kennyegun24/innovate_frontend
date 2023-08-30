import React from "react";
import vic from "../../images/vic.jpg";
import kenny from "../../images/kenny.png";
import images from "../../images/images.png";
import noImage from "../../images/noImage.png";
import musk from "../../images/musk.jpg";
import kim from "../../images/kim.jpg";
import trump from "../../images/trump.png";
import gates from "../../images/gates.jpg";
import { Row, Col } from "antd";
import { BsPatchCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { followersFormat } from "./suggestedListHelper";

const SuggestedList = () => {
  const data = [
    {
      image: vic,
      name: "Vittoria Ogundele",
      followers: 293343,
      verified: true,
      id: 10,
    },
    {
      image: kenny,
      name: "Kenny Egun",
      followers: 238278334,
      verified: true,
      id: 11,
    },
    {
      image: noImage,
      name: "Random",
      followers: 2312,
      verified: false,
      id: 15,
    },
    {
      image: images,
      name: "Gt official",
      followers: 223,
      verified: false,
      id: 5,
    },
    {
      image: musk,
      name: "Elon Musk",
      followers: 4353,
      verified: true,
      id: 3,
    },
    {
      image: kim,
      name: "Kim Jong un",
      followers: 544425,
      verified: true,
      id: 13,
    },
    {
      image: trump,
      name: "Donald Trump",
      followers: 4332,
      verified: true,
      id: 8,
    },
    {
      image: gates,
      name: "Bill Gates",
      followers: 9427386,
      verified: true,
      id: 5,
    },
    {
      image: vic,
      name: "Vittoria Ogundele",
      followers: 293283,
      verified: true,
      id: 16,
    },
    {
      image: kenny,
      name: "Kenny Egun",
      followers: 238278334,
      verified: true,
      id: 10,
    },
    {
      image: noImage,
      name: "Random",
      followers: 2312,
      verified: false,
      id: 15,
    },
    {
      image: images,
      name: "Gt official",
      followers: 223,
      verified: false,
      id: 19,
    },
    {
      image: musk,
      name: "Elon Musk",
      followers: 4353,
      verified: true,
      id: 15,
    },
    {
      image: kim,
      name: "Kim Jong un",
      followers: 544425,
      verified: true,
      id: 3,
    },
    {
      image: trump,
      name: "Donald Trump",
      followers: 4332,
      verified: true,
      id: 15,
    },
    {
      image: gates,
      name: "Bill Gates",
      followers: 9427386,
      verified: true,
      id: 11,
    },
    {
      image: vic,
      name: "Vittoria Ogundele",
      followers: 293283,
      verified: true,
      id: 2,
    },
    {
      image: kenny,
      name: "Kenny Egun",
      followers: 238278334,
      verified: true,
      id: 14,
    },
    {
      image: noImage,
      name: "Random",
      followers: 2312,
      verified: false,
      id: 15,
    },
    {
      image: images,
      name: "Gt official",
      followers: 223,
      verified: false,
      id: 11,
    },
    {
      image: musk,
      name: "Elon Musk",
      followers: 4353,
      verified: true,
      id: 17,
    },
    {
      image: kim,
      name: "Kim Jong un",
      followers: 544425,
      verified: true,
      id: 6,
    },
    {
      image: trump,
      name: "Donald Trump",
      followers: 4332,
      verified: true,
      id: 11,
    },
    {
      image: gates,
      name: "Bill Gates",
      followers: 9427386,
      verified: true,
      id: 1,
    },
    {
      image: vic,
      name: "Vittoria Ogundele",
      followers: 293283,
      verified: true,
      id: 6,
    },
    {
      image: kenny,
      name: "Kenny Egun",
      followers: 238278334,
      verified: true,
      id: 3,
    },
    {
      image: noImage,
      name: "Random",
      followers: 2312,
      verified: false,
      id: 14,
    },
    {
      image: images,
      name: "Gt official",
      followers: 223,
      verified: false,
      id: 12,
    },
    {
      image: musk,
      name: "Elon Musk",
      followers: 4353,
      verified: true,
      id: 19,
    },
    {
      image: kim,
      name: "Kim Jong un",
      followers: 544425,
      verified: true,
      id: 15,
    },
    {
      image: trump,
      name: "Donald Trump",
      followers: 4332,
      verified: true,
      id: 14,
    },
    {
      image: gates,
      name: "Bill Gates",
      followers: 9427386,
      verified: true,
      id: 9,
    },
    {
      image: vic,
      name: "Vittoria Ogundele",
      followers: 293283,
      verified: true,
      id: 9,
    },
    {
      image: kenny,
      name: "Kenny Egun",
      followers: 238278334,
      verified: true,
      id: 9,
    },
    {
      image: noImage,
      name: "Random",
      followers: 2312,
      verified: false,
      id: 13,
    },
    {
      image: images,
      name: "Gt official",
      followers: 223,
      verified: false,
      id: 1,
    },
    {
      image: musk,
      name: "Elon Musk",
      followers: 4353,
      verified: true,
      id: 9,
    },
    {
      image: kim,
      name: "Kim Jong un",
      followers: 544425,
      verified: true,
      id: 16,
    },
    {
      image: trump,
      name: "Donald Trump",
      followers: 4332,
      verified: true,
      id: 8,
    },
    {
      image: gates,
      name: "Bill Gates",
      followers: 9427386,
      verified: true,
      id: 12,
    },
  ];
  const currentUser = {
    data: {
      id: 1,
    },
  };

  return (
    <div
      className="marginTop15 marginBtm15 width50 relative"
      style={{ height: "95%" }}
    >
      <h4
        className="mainBackground white padding05rem"
        style={{ position: "sticky", top: "0", zIndex: 5 }}
      >
        Suggested Users to Follow
      </h4>
      <div className="scrollBar" style={{ overflowY: "auto", height: "90%" }}>
        <Row gutters={[32, 32]}>
          {data &&
            data.map((images, index) => (
              <Col xs={24} sm={12} lg={6} xl={6} key={index}>
                <div className="white gap05rem mainBackground padding1rem flex column align_center margin05">
                  <Link
                    to={
                      currentUser?.data?.id === images.id
                        ? "/profile"
                        : `/user/${images.name}/${images.id}/profile`
                    }
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                    }}
                    className="white gap05rem mainBackground flex column align_center margin05"
                  >
                    <div>
                      <img
                        className="friendsImage"
                        src={images.image}
                        style={{ objectFit: "cover" }}
                        alt=""
                      />
                    </div>
                    <div className="flex align_center gap05rem">
                      <p
                        className="font12"
                        style={{ fontFamily: "sans-serif" }}
                      >
                        {images.name.length > 12
                          ? images.name.slice(0, 12) + "..."
                          : images.name}
                      </p>
                      {images.verified && (
                        <BsPatchCheckFill style={{ color: "#5596E6" }} />
                      )}
                    </div>
                    <p className="opacity05 font10">
                      {followersFormat(images.followers)} followers
                    </p>
                  </Link>
                  <button
                    style={{
                      padding: "0.5rem",
                      border: "none",
                      borderRadius: "6px",
                      background: "#5596e6",
                      color: "#fff",
                    }}
                    className="pointer"
                  >
                    follow
                  </button>
                </div>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
};

export default SuggestedList;
