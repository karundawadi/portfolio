import { setShowDialog } from "../features/reducers/stateReducer";
import {
    setTasks,
} from "../features/reducers/taskReducer";

export const handleDeleteAllTasks = (dispatch) => {
  dispatch(setTasks([]));
  dispatch(setShowDialog(false));
};
