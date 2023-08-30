import React from "react";
import "./style.css";
import { FaWindowClose } from "react-icons/fa";

const ImagePreview = ({ img, setPreview, text, creator }) => {
  const closeModal = () => {
    setPreview(false);
  };
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 3,
        width: "100%",
        height: "90vh",
        background: "rgba(0,0,0,0.8)",
        backdropFilter: "blur(5px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: "10vh",
        left: 0,
      }}
    >
      <div
        style={{
          height: "90%",
          gap: "0.5rem",
          width: "70%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          position: "relative",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <img
          src={img}
          style={{ width: "80%", maxHeight: "90%", objectFit: "contain" }}
          alt=""
        />
        <div className="flex gap05rem">
          <>
            {text.length >= 85 ? (
              <p className="white font18">{text.slice(0, 85)}...</p>
            ) : (
              <p className="white font18">{text}</p>
            )}
          </>
          <p className="white font18">...-'{creator}'</p>
        </div>
        <FaWindowClose
          className="white pointer closeModal"
          style={{ position: "absolute", top: 0, right: 0 }}
          onClick={closeModal}
        />
      </div>
    </div>
  );
};

export default ImagePreview;
