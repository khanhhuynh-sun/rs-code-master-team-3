import React from "react";
import "./InputMessage.scss";
import axios from "axios";
import { useForm } from "react-hook-form";
import { BiReset, BiSend } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { setWaitingRes, removeWaitingRes } from "../../store/slices/uiSlice";

let random = Math.floor(Math.random() * 100000 + 1);
console.log(random);

const InputMessage = (props) => {
  const { register, handleSubmit, resetField } = useForm();
  const dispatch = useDispatch();

  const callAPI = (sendPackest) => {
    dispatch(setWaitingRes());
    axios
      .post(
        "https://9960-14-241-121-40.ngrok.io/webhooks/rest/webhook",
        sendPackest
      )
      .then((res) => {
        if (res.status === 200) {
          props.onResponseMessage(res.data);
        } else {
          props.onResponseMessage([]);
        }
        dispatch(removeWaitingRes());
      })
      .catch((err) => {
        props.onResponseMessage([]);
        dispatch(removeWaitingRes());
        console.log(err);
      });
  };

  const onSubmit = (data) => {
    console.log(random);
    resetField("clientMessage");
    const sendPackest = { sender: random, message: data.clientMessage };
    props.onUserSendMessage({
      message: data.clientMessage,
      role: "client",
    });
    callAPI(sendPackest);
  };

  const resetMessageHandler = () => {
    random = Math.floor(Math.random() * 100000 + 1);
    props.onResetMessage();
  };

  return (
    <div className="input-message">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("clientMessage", {
            required: true,
            validate: (value) => !!value.trim(),
          })}
          type="text"
          placeholder="Write a reply..."
          className="input-message__input"
          autoComplete="off"
        />
        <div className="input-message__button">
          <button className="input-message__submit" type="submit">
            <BiSend />
          </button>
          <button
            className="input-message__reset"
            onClick={resetMessageHandler}
          >
            <BiReset />
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputMessage;
