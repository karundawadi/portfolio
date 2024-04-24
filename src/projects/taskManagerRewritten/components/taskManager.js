import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTaskName, setTaskEstimate } from "../features/reducers/taskReducer";
import { removeError } from "../features/reducers/errorReducer";
import {
  setOpenModal,
  setShowDialog,
  setIsEditDialogOpen,
  setEditableTask,
  setSelectedTask,
} from "../features/reducers/stateReducer";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import {
  Box,
  Container,
  CssBaseline,
  Typography,
  Button,
  TextField,
  List,
  ListItem,
  Checkbox,
  ListItemText,
  IconButton,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Helmet } from "react-helmet";
import { handleImportTasks } from "../helperFunctions/handleImportTasks";
import { handleExportTasks } from "../helperFunctions/handleExportTasks";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { handleAddTask } from "../helperFunctions/handleAddTasks";
import { filterTask } from "../helperFunctions/filterTask";
import { getBackgroundColor } from "../helperFunctions/getBackgroundColorBasedOnCount";
import { handleCompleteTask } from "../helperFunctions/handleCompleteTask";
import { handleDeleteTask } from "../helperFunctions/handleDeleteTask";
import { handleOpenEditDialog } from "../helperFunctions/handleOpenEditDialog";
import { aggregateDataByDate } from "../helperFunctions/aggregateDataByDate";
import { handleSaveEditedTask } from "../helperFunctions/handleSaveEditedTask";
import { handleDeleteAllTasks } from "../helperFunctions/handleDeleteAllTasks";
import Modal from "@mui/material/Modal";
import PomodoroBox from "./pomodoroPopup";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function TaskManager(props) {
  const VERSION_NUMBER = "1.0.10";
  const taskName = useSelector((state) => state.taskReducer.taskName);
  const taskEstimate = useSelector((state) => state.taskReducer.taskEstimate);
  const tasks = useSelector((state) => state.taskReducer.tasks);
  const error = useSelector((state) => state.errorReducer.error);
  const editableTask = useSelector((state) => state.stateReducer.editableTask);
  const modalOpen = useSelector((state) => state.stateReducer.openModal);
  const selectedTask = useSelector((state) => state.stateReducer.selectedTask);
  const editDialogOpen = useSelector(
    (state) => state.stateReducer.isEditDialogOpen
  );
  const showDialog = useSelector((state) => state.stateReducer.showDialog);
  const dispatch = useDispatch();
  return (
    <Container maxWidth="md">
      <CssBaseline />{" "}
      <Helmet>
        <title>{props.title}</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: { xs: "auto", md: "50vh" },
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          maxWidth={500}
          width="100%"
          margin="auto"
        >
          <Typography variant="h4">Task Manager</Typography>
          <Typography variant="subtitle2">v{VERSION_NUMBER}</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              onClick={() => handleExportTasks(tasks)}
              startIcon={<CloudDownloadIcon />}
            >
              Export
            </Button>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleImportTasks}
            />
            <Button
              onClick={() => document.getElementById("fileInput").click()}
              startIcon={<CloudUploadIcon />}
            >
              Import
            </Button>
          </Box>
          <form>
            <Box display="flex" flexDirection="column" justifyContent="center">
              <TextField
                label="Task Name"
                value={taskName}
                onChange={(e) => dispatch(setTaskName(e.target.value))}
                variant="outlined"
                margin="normal"
                autoComplete="off"
              />
              <TextField
                label="Estimate (pomodoros)"
                type="number"
                value={taskEstimate}
                onChange={(e) => dispatch(setTaskEstimate(e.target.value))}
                variant="outlined"
                margin="normal"
                autoComplete="off"
              />
              <Box
                alignContent={"center"}
                justifyContent={"center"}
                margin={"auto"}
              >
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={(event) =>
                    handleAddTask(
                      event,
                      taskName,
                      taskEstimate,
                      tasks,
                      dispatch
                    )
                  }
                >
                  Add
                </Button>
              </Box>
            </Box>
          </form>
          <List>
            {tasks
              .filter((task) => filterTask(task))
              .map((task, index) => (
                <ListItem
                  id={task.id}
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                    backgroundColor: getBackgroundColor(props, task.estimate),
                    borderRadius: 6,
                    margin: 8,
                  }}
                >
                  <Checkbox
                    checked={task.completed}
                    onChange={() =>
                      handleCompleteTask(dispatch, tasks, task.id)
                    }
                  ></Checkbox>
                  <ListItemText
                    primary={task.name}
                    secondary={`Estimated: ${task.estimate}, Worked: ${task.pomodoroWorked}`}
                    onClick={() => {
                      dispatch(setSelectedTask(task))
                      dispatch(setOpenModal(true));
                    }}
                  />
                  <IconButton
                    edge="end"
                    aria-label="edit"
                    onClick={() => {
                      handleOpenEditDialog(dispatch, task, index);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => {
                      handleDeleteTask(dispatch, tasks, task.id);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              ))}
          </List>
          {tasks.length > 0 && (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={aggregateDataByDate(tasks)}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Estimated" fill="#8884d8" />
                <Bar dataKey="Worked" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          )}
          <Box
            alignContent={"center"}
            justifyContent={"center"}
            margin={"auto"}
          >
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => dispatch(setShowDialog(true))}
              color="error"
            >
              <DeleteIcon fontSize="large" />
            </IconButton>
            <Modal
              open={modalOpen}
              onClose={() => {
                dispatch(setOpenModal(false));
              }}
            >
              <PomodoroBox
                dispatch={dispatch}
                key={selectedTask?.id}
                selectedTask={selectedTask}
              />
            </Modal>
            <Snackbar
              open={error}
              autoHideDuration={6000}
              onClose={dispatch(removeError())}
              anchorOrigin={{ vertical: "top", horizontal: "center" }} // Positioning the Snackbar
            >
              <MuiAlert
                onClose={dispatch(removeError())}
                severity="error"
                sx={{ width: "100%" }}
              >
                Task name and estimate (in pomodoros) are required!
              </MuiAlert>
            </Snackbar>
            <Dialog
              open={showDialog}
              onClose={() => dispatch(setIsEditDialogOpen(false))}
            >
              <DialogTitle>Confirm Action</DialogTitle>
              <DialogContent>
                Are you sure you want to perform this action?
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={() => {
                    dispatch(setIsEditDialogOpen(false));
                  }}
                >
                  No
                </Button>
                <Button
                  onClick={() => handleDeleteAllTasks(dispatch)}
                  color="primary"
                >
                  Yes
                </Button>
              </DialogActions>
            </Dialog>
            <Dialog
              open={editDialogOpen}
              onClose={() => dispatch(setIsEditDialogOpen(false))}
            >
              <DialogTitle>Edit Task</DialogTitle>
              <DialogContent>
                <TextField
                  label="Task Name"
                  value={editableTask?.name || ""}
                  onChange={(e) =>
                    dispatch(
                      setEditableTask({ ...editableTask, name: e.target.value })
                    )
                  }
                  margin="normal"
                  fullWidth
                />
                <TextField
                  label="Estimate (pomodoros)"
                  type="number"
                  value={editableTask?.estimate || ""}
                  onChange={(e) =>
                    dispatch(
                      setEditableTask({
                        ...editableTask,
                        estimate: e.target.value,
                      })
                    )
                  }
                  margin="normal"
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={() => {
                    dispatch(setIsEditDialogOpen(false));
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    handleSaveEditedTask(dispatch, tasks, editableTask);
                  }}
                  color="primary"
                >
                  Save
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default TaskManager;
