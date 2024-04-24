import { combineReducers, configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/reducers/taskReducer";
import errorReducer from "../features/reducers/errorReducer";
import stateReducer from "../features/reducers/stateReducer";

export const store = configureStore({
  reducer: {
    taskReducer: taskReducer,
    errorReducer: errorReducer,
    stateReducer: stateReducer,
  },
});
