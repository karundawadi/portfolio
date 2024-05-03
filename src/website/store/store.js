import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../../projects/taskManager/features/reducers/taskReducer";
import errorReducer from "../../projects/taskManager/features/reducers/errorReducer";
import stateReducer from "../../projects/taskManager/features/reducers/stateReducer";
import commentReducer from "../../projects/fireyComments/reducers/commentReducer";

export const store = configureStore({
  reducer: {
    taskReducer: taskReducer,
    errorReducer: errorReducer,
    stateReducer: stateReducer,
    commentReducer: commentReducer,
  },
});
