import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: null,
};

export const counterSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments: (state, action) => {
      state.comments = action.payload;
    }
  },
});

export const {setComments, setAuthState} = counterSlice.actions;

export default counterSlice.reducer;
