import React from "react";
import hrAvatar from "../../img/hr-admin.png";
import loadingGif from "../../img/typing-loading.gif";

import "./MessageList.scss";

const MessageList = (props) => {
  return (
    <ul className="message-list">
      {props.messageList.map((message, index) => (
        <li
          key={index}
          className={`message-list__item ${
            message.role === "client" ? "client" : ""
          }`}
        >
          <div className="message-list__avatar">
            <img src={hrAvatar} alt="" />
          </div>
          <div className="message-list__message">
            {message.type === "loading" && (
              <div className="message-list__loading">
                <img src={loadingGif} alt="" />
              </div>
            )}
            {message.message && <p>{message.message}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MessageList;
