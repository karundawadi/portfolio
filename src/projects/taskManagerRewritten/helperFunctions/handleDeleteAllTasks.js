import { setShowDialog } from "../features/reducers/stateReducer";
import {
    deleteAllTasks,
} from "../features/reducers/taskReducer";

export const handleDeleteAllTasks = (dispatch) => {
  dispatch(deleteAllTasks());
  dispatch(setShowDialog(false));
};
