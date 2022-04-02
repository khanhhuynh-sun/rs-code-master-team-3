import React from "react";
import hrAvatar from "../../img/hr-admin.png";
import { useDispatch } from "react-redux";
import { showModal } from "../../store/slices/uiSlice";
import "./ChatBox.scss";

const ChatBox = () => {
  const dispatch = useDispatch();
  const displayChatBoxHandler = () => {
    dispatch(showModal());
  };

  return (
    <div className="chatbox">
      <div className="chatbox__toggle" onClick={displayChatBoxHandler}>
        <img src={hrAvatar} alt="" />
      </div>
    </div>
  );
};

export default ChatBox;
