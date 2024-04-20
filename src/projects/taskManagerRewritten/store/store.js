import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../features/reducers/taskReducer';
import errorReducer from '../features/reducers/errorReducer';
export const store = configureStore({
  reducer: {
    taskReducer: taskReducer,
    errorReducer: errorReducer,
  },
})