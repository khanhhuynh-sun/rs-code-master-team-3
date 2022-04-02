import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Modal.scss";

const Modal = (props) => {
  const isShowModal = useSelector((state) => state.ui.isShowModal);

  return (
    <div className={`modal ${!isShowModal ? "hide" : ""}`}>
      {props.children}
    </div>
  );
};

export default Modal;
