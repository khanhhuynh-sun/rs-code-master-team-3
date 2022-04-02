import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCouter } from "../store/slices/uiSlice";

const Register = () => {
  const isShow = useSelector((state) => state.ui.isShowModal);
  const dispatch = useDispatch();
  dispatch(setCouter({ number: 3 }));
  console.log(isShow);
  return <main>register</main>;
};

export default Register;
