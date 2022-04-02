import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isShowModal: false,
    counter: 0,
  },
  reducers: {
    showModal: (state) => {
      state.isShowModal = true;
    },
    hideModal: (state) => {
      state.isShowModal = false;
    },
    modalToggle: (state) => {
      state.isShowModal = !state.isShowModal;
    },
    setCouter: (state, actions) => {
      state.counter += actions.payload.number;
    },
  },
});

export const { showModal, hideModal, modalToggle, setCouter } = uiSlice.actions;
export default uiSlice.reducer;
