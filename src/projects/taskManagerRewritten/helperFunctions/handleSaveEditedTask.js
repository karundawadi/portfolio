import { setIsEditDialogOpen } from "../features/reducers/stateReducer";
import { setTasks } from "../features/reducers/taskReducer";

export const handleSaveEditedTask = (dispatch, tasks, editableTask) => {
  const updatedTasks = tasks.map((task, i) =>
    i === editableTask.index ? { ...editableTask } : task
  );
  dispatch(setTasks(updatedTasks));
  dispatch(setIsEditDialogOpen(false));
};
