import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskName: "",
  taskEstimate: "",
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
};

export const counterSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTaskName: (state, action) => {
      state.taskName = action.payload;
    },
    setTaskEstimate: (state, action) => {
      state.taskEstimate = action.payload;
    },
    setTasks: (state, action) => {
      state.tasks = action.payload;
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    deleteAllTasks: (state) => {
      localStorage.setItem("tasks", JSON.stringify([]));
      state.tasks = [];
    },
  },
});

export const { setTaskName, setTaskEstimate, setTasks, deleteAllTasks } =
  counterSlice.actions;

export default counterSlice.reducer;
