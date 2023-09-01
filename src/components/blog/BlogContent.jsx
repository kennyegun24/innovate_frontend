import React from "react";
import image from "../../images/noImage.png";
import image1 from "../../images/musk.jpg";
import image2 from "../../images/gates.jpg";
import image3 from "../../images/vic.jpg";
import image4 from "../../images/Picture1.png";
import image5 from "../../images/kim.jpg";
import image6 from "../../images/images.png";
import "./blogContent.css";
import { Link } from "react-router-dom";
import { numberFormat } from "../../helpers/general";

const BlogContent = () => {
  const data = [
    {
      image: image,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsa repudiandae quasi. Excepturi voluptatibus sint quidem, necessitatibus fuga rem asperiores eos neque, libero voluptates inventore debitis natus, odio temporibus ad.",
      title: "A new html page I created while starting web development",
      id: 1,
      userImage: image1,
      userName: "Kenny",
      created_at: "1/1/2022",
      comments: 1087,
      likes: 1587,
    },
    {
      image: image1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsa repudiandae quasi. Excepturi voluptatibus sint quidem, necessitatibus fuga rem asperiores eos neque, libero voluptates inventore debitis natus, odio temporibus ad.",
      title: "My new html Page",
      userImage: image1,
      id: 2,
      userName: "Elias",
      created_at: "1/1/2022",
      comments: 1227,
      likes: 8022,
    },
    {
      image: image2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsa repudiandae quasi. Excepturi voluptatibus sint quidem, necessitatibus fuga rem asperiores eos neque, libero voluptates inventore debitis natus, odio temporibus ad.",
      title: "My new html Page",
      userImage: image1,
      id: 3,
      userName: "Sam",
      created_at: "1/1/2022",
      comments: 951,
      likes: 8516,
    },
    {
      image: image3,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsa repudiandae quasi. Excepturi voluptatibus sint quidem, necessitatibus fuga rem asperiores eos neque, libero voluptates inventore debitis natus, odio temporibus ad.",
      title: "My new html Page",
      userImage: image1,
      id: 4,
      userName: "Sam",
      created_at: "1/1/2022",
      comments: 1452,
      likes: 5754,
    },
    {
      image: image4,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsa repudiandae quasi. Excepturi voluptatibus sint quidem, necessitatibus fuga rem asperiores eos neque, libero voluptates inventore debitis natus, odio temporibus ad.",
      title: "My new html Page",
      userImage: image1,
      id: 5,
      userName: "Sam",
      created_at: "1/1/2022",
      comments: 1060,
      likes: 8438,
    },
    {
      image: image5,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsa repudiandae quasi. Excepturi voluptatibus sint quidem, necessitatibus fuga rem asperiores eos neque, libero voluptates inventore debitis natus, odio temporibus ad.",
      title: "My new html Page",
      userImage: image1,
      id: 6,
      userName: "Sam",
      created_at: "1/1/2022",
      comments: 1220,
      likes: 5679,
    },
    {
      image: image6,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsa repudiandae quasi. Excepturi voluptatibus sint quidem, necessitatibus fuga rem asperiores eos neque, libero voluptates inventore debitis natus, odio temporibus ad.",
      title: "My new html Page",
      userImage: image1,
      id: 7,
      userName: "Sam",
      created_at: "1/1/2022",
      comments: 1242,
      likes: 7216,
    },
  ];
  return (
    <div className="blogContentMainDiv">
      {data.map((each) => (
        <div
          key={each.id}
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "2.5rem",
            gap: "1rem",
          }}
        >
          <div className="blogUserPostImageDiv">
            <img className="blogUserPostImage" src={each.image} />
          </div>
          <Link
            to={`/blog/${each.id}`}
            style={{
              textAlign: "center",
              color: "#5596E6",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            {each.title.slice(0, 35)}...
          </Link>
          <div className="blogTextPreviewDiv">
            <p className="blogTextPreview">{each.desc.slice(0, 150)}...</p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <div className="blogNameTimePreview">
                <p>{each.userName}</p>
                <p className="font14 opacity05">{each.created_at}</p>
              </div>
              <div className="blogNameTimePreview">
                <p className="font14 opacity05">
                  {numberFormat(each.comments)}. comments
                </p>
                <p className="font14 opacity05">
                  {numberFormat(each.likes)}. likes
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogContent;
