import React, { useState } from "react";
import "./MainChat.scss";
import Modal from "../modal/Modal";
import MessageList from "./MessageList";
import InputMessage from "./InputMessage";
import AdminInfo from "./AdminInfo";
import ChatBoxHeader from "./ChatBoxHeader";
import { useSelector } from "react-redux";

const messageListInit = [
  {
    message:
      "Hi! I'm Phuong Huynh Thi Vi, the AI Assistant and the HR Admin of Rising Stars helping recruiting teams spend more time with people by automating tasks like screening, scheduling, and candidate Q&A. What's your first and last name?",
    role: "server",
  },
];

const MainChat = () => {
  const [messageList, setMessageList] = useState(messageListInit);
  const sendMessageHandler = (message) => {
    setMessageList([message, ...messageList]);
  };

  const responseMessageHandler = (responseDatas) => {
    const messagePackage = [];
    responseDatas.map((response) => {
      if (response.text) {
        messagePackage.push({ message: response.text, role: "server" });
      }
    });
    setMessageList((messageList) => [...messagePackage, ...messageList]);
  };
  const isShowChat = useSelector((state) => state.ui.isShowModal);
  return (
    <Modal>
      <div className={`main-chat ${isShowChat ? "show" : ""} `}>
        <ChatBoxHeader />
        <AdminInfo />
        <MessageList messageList={messageList} />
        <InputMessage
          onResponseMessage={responseMessageHandler}
          onUserSendMessage={sendMessageHandler}
        />
      </div>
    </Modal>
  );
};

export default MainChat;
