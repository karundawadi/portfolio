import {
    setTasks,
  } from "../features/reducers/taskReducer";

export const handleCompleteTask = (dispatch, tasks, taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        // Toggle the completion status and set the completion date if completing the task
        return {
          ...task,
          completed: !task.completed,
          completionDate: !task.completed ? new Date().toISOString().slice(0, 10) : null,
        };
      }
      return task;
    });
    dispatch(setTasks(updatedTasks));
  };