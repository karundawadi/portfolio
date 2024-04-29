import {
  setTasks,
} from "../features/reducers/taskReducer";

export const handleDeleteTask = (dispatch, tasks, taskId) => {
  const newTasks = tasks.filter((task) => task.id !== taskId);
  dispatch(setTasks(newTasks));
};
