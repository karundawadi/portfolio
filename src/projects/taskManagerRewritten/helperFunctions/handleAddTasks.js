import { v4 as uuidv4 } from "uuid";

export const handleAddTask = (
  event,
  taskName,
  taskEstimate,
  tasks,
  setError,
  setTaskName,
  setTaskEstimate,
  setTasks
) => {
  // To allow enter to add a task
  event.preventDefault();

  if (!taskName.trim() || !taskEstimate.trim() || isNaN(taskEstimate)) {
    setError();
    return;
  }

  if (taskName && taskEstimate && !isNaN(taskEstimate)) {
    const today = new Date();
    const offset = today.getTimezoneOffset() * 60000; // Offset in milliseconds
    const localISOTime = new Date(today - offset).toISOString().slice(0, 10);
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        name: taskName,
        estimate: taskEstimate,
        pomodoroWorked: 0,
        completed: false,
        date: localISOTime,
        completionDate: null,
      },
    ]);
    setTaskName();
    setTaskEstimate();
  }
};
