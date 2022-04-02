import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Hero from "../components/Hero/Hero";
import { showModal, modalToggle } from "../store/slices/uiSlice";

const HomePage = () => {
  // const dispatch = useDispatch();
  // const counter = useSelector((state) => state.ui.counter);
  // const clickHandler = () => {
  //   console.log(counter);
  //   dispatch(modalToggle());
  // };
  return (
    <main>
      <Hero />
    </main>
  );
};

export default HomePage;
