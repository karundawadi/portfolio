import { setEditableTask, setIsEditDialogOpen } from "../features/reducers/stateReducer";

export const handleOpenEditDialog = (dispatch, task, index) => {
  dispatch(setEditableTask({ ...task, index }));
  dispatch(setIsEditDialogOpen(true));
};
