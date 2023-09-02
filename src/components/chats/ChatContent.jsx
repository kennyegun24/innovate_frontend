import React, { useState } from "react";
import "./chatContent.css";
import ChatInput from "./ChatInput";
import ChatHeader from "./chatHeader";

const ChatContent = () => {
  const currentUserId = 1;
  const chats = [
    {
      message: "oMCTngZ AnK tIVyq WISdLq lb uBdXUYW",
      time: "05:52:00",
      sender_id: 1,
    },
    {
      message: "ntewgqs oeq vlItI OBkvpP VN xtfepYL",
      time: "13:49:35",
      sender_id: 7,
    },
    {
      message: "HQfTnBt FvR oxzxQ TYUPQo gd lNEAgks",
      time: "21:22:35",
      sender_id: 4,
    },
    {
      message: "abCFSbC LIQ jsSVj eqWusH ri yARaBcI",
      time: "11:32:56",
      sender_id: 1,
    },
    {
      message: "OgHbuBd fHB fPbcq lufAXH JP EjXZTmb",
      time: "02:32:49",
      sender_id: 9,
    },
    {
      message: "TQNeHym xAn XazDz FgSmKq et kyzbUtl",
      time: "01:45:51",
      sender_id: 1,
    },
    {
      message: "FDwRymv qdU PLUpF MQIDEt pZ wWPBJgi",
      time: "14:16:12",
      sender_id: 1,
    },
    {
      message: "jnkahOG EbE wJtdV tBjZMC jQ Oxuolsb",
      time: "08:08:10",
      sender_id: 7,
    },
    {
      message: "dbwbsHX lUq vcQyn yqUVWB PE LYRoRqZ",
      time: "08:38:10",
      sender_id: 4,
    },
    {
      message: "LLBWnQa pwk kBZxi Zxdwpw tF lSRiyAK",
      time: "13:42:01",
      sender_id: 0,
    },
    {
      message: "NqwinfD CuK QMAWc FNKLuA hc TGOaOEM",
      time: "07:17:49",
      sender_id: 1,
    },
    {
      message: "MCGRruE NIe tdkLn ybbmnF ER LcQiRdP",
      time: "03:21:00",
      sender_id: 1,
    },
    {
      message: "eRBobVs LHq qIZZs UMHVkY dU DYIgKQX",
      time: "02:03:32",
      sender_id: 6,
    },
    {
      message: "fgyUoFF EcW Ugbjx jYbxIG Di pplWKnz",
      time: "09:20:32",
      sender_id: 3,
    },
    {
      message: "sggmmbZ RXr JkLCE bYfYHr tN eUVrqbl",
      time: "07:38:07",
      sender_id: 6,
    },
    {
      message: "adaDhDo rDL cPHrR qhveDc pK OazfwFJ",
      time: "03:46:12",
      sender_id: 3,
    },
    {
      message: "jmlJZFS FBY okFgE ascIDz fX UUCGMsr",
      time: "19:03:01",
      sender_id: 1,
    },
  ];

  return (
    <div className="chatContentMainDiv">
      <ChatHeader />
      <div className="scrollBar chatContentMessagesContainer">
        {chats.map((message) => (
          <div
            key={message.sender_id}
            className="padding05rem flex"
            style={{
              flexDirection:
                currentUserId === message.sender_id ? "row" : "row-reverse",
            }}
          >
            <div
              style={{
                borderRadius:
                  currentUserId === message.sender_id
                    ? "0 8px 8px 16px"
                    : "8px 0 16px 8px",
              }}
              className="padding05rem chatContentMessagesDiv"
            >
              <p
                style={{ whiteSpace: "pre-line", fontWeight: 600 }}
                className="font12"
              >
                {message.message}
              </p>
              <p className="font12 opacity05 chatContentTime">{message.time}</p>
            </div>
          </div>
        ))}
      </div>
      <ChatInput />
    </div>
  );
};

export default ChatContent;
