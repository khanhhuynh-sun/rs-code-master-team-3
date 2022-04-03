import React from "react";
import adminAvatar from "../../img/hr-admin.png";
import Logo from "../../img/rs-logo.png";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { hideModal } from "../../store/slices/uiSlice";
import "./ChatBoxHeader.scss";

const ChatBoxHeader = () => {
  const dispatch = useDispatch();
  const closeModalHandler = () => {
    dispatch(hideModal());
  };
  return (
    <div className="chatbox-header">
      <div className="chatbox-header__admin">
        <div className="chatbox-header__avatar">
          <img src={adminAvatar} alt="" />
        </div>
        <div className="chatbox-header__name">Genesis Bot</div>
      </div>
      <div className="chatbox-header__direction">
        <div className="chatbox-header__logo">
          <img src={Logo} alt="" />
        </div>
        <div
          onClick={closeModalHandler}
          className="chatbox-header__close-modal"
        >
          <IoMdClose />
        </div>
      </div>
    </div>
  );
};

export default ChatBoxHeader;
