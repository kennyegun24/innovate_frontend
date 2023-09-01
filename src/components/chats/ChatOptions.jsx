import React from "react";

const ChatOptions = () => {
  return (
    <div style={{ position: "absolute", right: 0, zIndex: 999 }}>
      <div
        style={{
          background: "#202836",
          padding: "0.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "150px",
        }}
      >
        <p>Clear Chat</p>
        <p>View Profile</p>
        <p>Block User</p>
      </div>
    </div>
  );
};

export default ChatOptions;
