import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openModal: false,
  selectedTask: null,
  showDialog: false,
  isEditDialogOpen: false,
  editableTask: null,
};

export const counterSlice = createSlice({
  name: "states",
  initialState,
  reducers: {
    setOpenModal: (state, action) => {
      console.log(action.payload);
      state.openModal = action.payload;
    },
    setSelectedTask: (state, action) => {
      state.selectedTask = action.payload;
    },
    setShowDialog: (state, action) => {
      state.showDialog = action.payload;
    },
    setIsEditDialogOpen: (state, action) => {
      state.isEditDialogOpen = action.payload;
    },
    setEditableTask: (state, action) => {
      state.editableTask = action.payload;
    },
  },
});

export const {
  setOpenModal,
  setSelectedTask,
  setShowDialog,
  setIsEditDialogOpen,
  setEditableTask
} = counterSlice.actions;

export default counterSlice.reducer;
