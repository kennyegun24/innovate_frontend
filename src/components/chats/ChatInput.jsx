import TextArea from "antd/es/input/TextArea";
import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const ChatInput = () => {
  return (
    <div className="chatContentInputDiv">
      <TextArea
        style={{ resize: "none" }}
        className="scrollBar chatContentInput"
        placeholder="Write a message........"
      />
      <FaPaperPlane className="sendMessageIcon" />
    </div>
  );
};

export default ChatInput;
