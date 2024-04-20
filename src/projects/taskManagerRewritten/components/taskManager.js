import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setTaskName,
  setTaskEstimate,
  setTasks,
} from "../features/reducers/taskReducer";
import {setError, removeError} from "../features/reducers/errorReducer";
import {
  Box,
  Container,
  CssBaseline,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import { Helmet } from "react-helmet";
import { handleImportTasks } from "../helperFunctions/handleImportTasks";
import { handleExportTasks } from "../helperFunctions/handleExportTasks";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { handleAddTask } from "../helperFunctions/handleAddTasks";

function TaskManager(props) {
  const VERSION_NUMBER = "1.0.9";
  const taskName = useSelector((state) => state.taskReducer.taskName);
  const taskEstimate = useSelector((state) => state.taskReducer.taskEstimate);
  const tasks = useSelector((state) => state.taskReducer.tasks);
  const error = useSelector((state) => state.errorReducer.error);
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
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
    </Container>
  );
}

export default TaskManager;
