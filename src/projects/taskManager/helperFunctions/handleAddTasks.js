import { v4 as uuidv4 } from "uuid";
import {
  setTaskName,
  setTaskEstimate,
  setTasks,
} from "../features/reducers/taskReducer";
import { setError } from "../features/reducers/errorReducer";

export const handleAddTask = (
  event,
  taskName,
  taskEstimate,
  tasks,
  dispatch
) => {
  // To allow enter to add a task
  event.preventDefault();

  if (!taskName.trim() || !taskEstimate.trim() || isNaN(taskEstimate)) {
    dispatch(setError());
    return;
  }

  if (taskName && taskEstimate && !isNaN(taskEstimate)) {
    const today = new Date();
    const offset = today.getTimezoneOffset() * 60000; // Offset in milliseconds
    const localISOTime = new Date(today - offset).toISOString().slice(0, 10);
    dispatch(
      setTasks([
        ...tasks,
        {
          id: uuidv4(),
          name: taskName,
          estimate: taskEstimate,
          pomodoroWorked: 0,
          estimationError: 0 - taskEstimate,
          completed: false,
          date: localISOTime,
          completionDate: null,
        },
      ])
    );
    dispatch(setTaskName(""));
    dispatch(setTaskEstimate(""));
  }
};
