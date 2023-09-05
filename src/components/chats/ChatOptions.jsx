import React from "react";

const ChatOptions = () => {
  return (
    <div style={{ position: "absolute", right: 0, zIndex: 999 }}>
      <div
        style={{
          background: "#202836",
          width: "150px",
        }}
        className="flex column padding05rem font12 gap1rem"
      >
        <p>Clear Chat</p>
        <p>View Profile</p>
        <p>Block User</p>
      </div>
    </div>
  );
};

export default ChatOptions;
