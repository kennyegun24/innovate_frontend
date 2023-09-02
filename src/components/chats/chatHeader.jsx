import React, { useState } from "react";
import image from "../../images/noImage.png";
import { FaEllipsisV } from "react-icons/fa";
import ChatOptions from "./ChatOptions";
import { convertTime } from "../../helpers/general";

const ChatHeader = () => {
  const [show, setShow] = useState(false);
  const userDetails = {
    last_Seen: "Tue, 29 Aug 2023 20:07:50.701780000 UTC +00:00",
  };
  const url = document.location.pathname.split("/")[2];
  const userName = url.split("%20").join(" ");
  return (
    <div className="chatContentHeaderDiv">
      <div className="flex align_center gap1rem">
        <img src={image} alt="" className="chatContentHeaderImage" />
        <div>
          <h4>{userName}</h4>
          <p className="font12 opacity05">
            last seen {convertTime(userDetails.last_Seen)}
          </p>
        </div>
      </div>
      <div className="relative">
        <FaEllipsisV
          style={{ cursor: "pointer" }}
          onClick={() => setShow(!show)}
        />
        {show && (
          <div style={{ zIndex: 5 }}>
            <ChatOptions />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatHeader;
