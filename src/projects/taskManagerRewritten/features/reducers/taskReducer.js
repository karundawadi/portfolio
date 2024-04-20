import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  taskName: '',
  taskEstimate: '',
  tasks: [],
}

export const counterSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTaskName: (state, action) => {
        state.taskName = action.payload
    },
    setTaskEstimate: (state, action) => {
        state.taskEstimate = action.payload
    },
    setTasks: (state, action) => {
        state.tasks = action.payload
    },
  },
})

export const { setTaskName, setTaskEstimate, setTasks } = counterSlice.actions

export default counterSlice.reducer