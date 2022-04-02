import React from "react";
import "./InputMessage.scss";
import axios from "axios";
import { useForm } from "react-hook-form";

const InputMessage = (props) => {
  const { register, handleSubmit } = useForm();

  const callAPI = (sendPackest) => {
    axios
      .post(
        "https://9960-14-241-121-40.ngrok.io/webhooks/rest/webhook",
        sendPackest
      )
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          props.onResponseMessage(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onSubmit = (data) => {
    const sendPackest = { sender: "user-1", message: data.clientMessage };
    props.onUserSendMessage({
      message: data.clientMessage,
      role: "client",
    });
    setTimeout(() => {
      callAPI(sendPackest);
    }, 1000);
  };

  return (
    <form className="input-message" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("clientMessage")}
        type="text"
        placeholder="Write a reply..."
        className="input-message__input"
        autoComplete="off"
      />
    </form>
  );
};

export default InputMessage;
