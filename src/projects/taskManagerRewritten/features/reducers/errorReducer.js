import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: false,
};

export const counterSlice = createSlice({
  name: "errors",
  initialState,
  reducers: {
    setError: (state) => {
      state.error = true;
    },
    removeError: (state) => {
      state.error = false;
    },
  },
});

export const { setError, removeError } = counterSlice.actions;

export default counterSlice.reducer;
