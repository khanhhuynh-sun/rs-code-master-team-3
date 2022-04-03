import React, { useEffect, useState } from "react";
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

const errorMessage = [
  {
    message: "Sorry if I understood you incorrectly.",
    role: "server",
  },
  {
    message: "I'm still learning. I may misinterpret things from time to time.",
    role: "server",
  },
  {
    message: "Sorry about that. I'm still learning",
    role: "server",
  },
];

const MainChat = () => {
  const [messageList, setMessageList] = useState(messageListInit);

  let isLoading = useSelector((state) => state.ui.isWaitingRes);
  useEffect(() => {
    console.log(isLoading);
    if (isLoading === true) {
      setMessageList([{ role: "server", type: "loading" }, ...messageList]);
    } else if (isLoading === false) {
      const index = messageList.findIndex(
        (messageItem) => messageItem.type === "loading"
      );
      const messages = [...messageList];
      messages.splice(index, 1);
      setMessageList([...messages]);
    }
  }, [isLoading]);

  const sendMessageHandler = (message) => {
    setMessageList([message, ...messageList]);
  };

  const responseMessageHandler = (responseDatas) => {
    if (responseDatas.length === 0) {
      const random = Math.floor(Math.random() * 2);
      console.log(errorMessage[random]);

      setMessageList((messageList) => [errorMessage[random], ...messageList]);
    } else {
      const messagePackage = [];
      responseDatas.map((response) => {
        if (response.text) {
          messagePackage.unshift({ message: response.text, role: "server" });
        }
        if (response.custom) {
          let message = "";
          response.custom.data.map((customItem) => {
            message += `${customItem.title} (${customItem.remained_slots} slots), `;
          });
          messagePackage.unshift({ message: message, role: "server" });
        }
      });
      setMessageList((messageList) => [...messagePackage, ...messageList]);
    }
  };

  const resetMessageHandler = () => {
    setMessageList([]);
    console.log("reset");
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
          onResetMessage={resetMessageHandler}
        />
      </div>
    </Modal>
  );
};

export default MainChat;
