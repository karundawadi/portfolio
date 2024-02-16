import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Modal from "@mui/material/Modal";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Container,
} from "@mui/material";
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
import { Helmet } from "react-helmet";
import { v4 as uuidv4 } from "uuid";

function TaskManager(props) {
  const VERSION_NUMBER = "1.0.5";
  const [taskName, setTaskName] = useState("");
  const [taskEstimate, setTaskEstimate] = useState("");
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [openModal, setOpenModal] = useState(false);
  const [error, setError] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [showDialog, setDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editableTask, setEditableTask] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (event) => {
    // To allow enter to add a task
    event.preventDefault();

    if (!taskName.trim() || !taskEstimate.trim() || isNaN(taskEstimate)) {
      setError(true);
      return;
    }

    if (taskName && taskEstimate && !isNaN(taskEstimate)) {
      const today = new Date();
      const offset = today.getTimezoneOffset() * 60000; // Offset in milliseconds
      const localISOTime = (new Date(today - offset)).toISOString().slice(0, 10);
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
      setTaskName("");
      setTaskEstimate("");
    }
  };

  const handleCloseError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setError(false);
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      }
      return task;
    });
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    // Update selectedTask if it's the one being updated
    if (selectedTask && selectedTask.id === updatedTask.id) {
      setSelectedTask(updatedTask);
    }
  };

  const handleDeleteAllTasks = () => {
    setTasks([]);
    setDialogOpen(false);
  };

  const handleCompleteTask = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        const today = new Date();
        const offset = today.getTimezoneOffset() * 60000; // Offset in milliseconds
        const localISOTime = (new Date(today - offset)).toISOString().slice(0, 10);
  
        return {
          ...task,
          completed: !task.completed,
          completionDate: !task.completed ? localISOTime : task.completionDate,
        };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const handleOpenEditDialog = (task, index) => {
    setEditableTask({ ...task, index });
    setIsEditDialogOpen(true);
  };

  const handleSaveEditedTask = () => {
    const updatedTasks = tasks.map((task, i) =>
      i === editableTask.index ? { ...editableTask } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setIsEditDialogOpen(false);
  };

  const handleExportTasks = () => {
    const tasksData = JSON.stringify(tasks);
    const blob = new Blob([tasksData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "tasks.json";
    link.click();
  };

  const handleImportTasks = (event) => {
    const fileReader = new FileReader();
    fileReader.readAsText(event.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      const importedTasks = JSON.parse(e.target.result);
      if (Array.isArray(importedTasks)) {
        setTasks(importedTasks);
        localStorage.setItem("tasks", e.target.result);
      } else {
        alert("Invalid file format");
      }
    };
  };

  const handleOpenModal = (task) => {
    setSelectedTask(task);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTasks(items);
  };

  const getBackgroundColor = (pomodoroCount) => {
    if (pomodoroCount < 2) return props.dark ? "green" : "lightgreen";
    if (pomodoroCount < 5) return props.dark ? "#3131b5" : "lightblue";
    return props.dark ? "#cf4327" : "pink";
  };

  const aggregateDataByDate = (tasks) => {
    const data = {};
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7); // Calculate date for 7 days ago

    tasks.forEach((task) => {
      const taskDate = new Date(task.date);
      if (taskDate >= sevenDaysAgo) {
        // Only include tasks from the last 7 days
        if (data[task.date]) {
          data[task.date].Estimated += parseInt(task.estimate, 10);
          data[task.date].Worked += task.pomodoroWorked;
        } else {
          data[task.date] = {
            Estimated: parseInt(task.estimate, 10),
            Worked: task.pomodoroWorked,
          };
        }
      }
    });
    return Object.keys(data)
      .map((date) => ({
        date,
        ...data[date],
      }))
      .sort((a, b) => new Date(a.date) - new Date(b.date)); // Ensure data is sorted by date
  };

  const graphData = aggregateDataByDate(tasks);

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
          height: { xs: "auto", md: "50vh" }, // 'auto' height for xs to sm, '100vh' for md and up
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
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={handleImportTasks}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              onClick={handleExportTasks}
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
          <form onSubmit={handleAddTask}>
            <Box display="flex" flexDirection="column" justifyContent="center">
              <TextField
                label="Task Name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                variant="outlined"
                margin="normal"
                autoComplete="off"
              />
              <TextField
                label="Estimate (pomodoros)"
                type="number"
                value={taskEstimate}
                onChange={(e) => setTaskEstimate(e.target.value)}
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
                  onClick={handleAddTask}
                >
                  Add
                </Button>
              </Box>
            </Box>
          </form>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="tasks">
              {(provided) => (
                <List {...provided.droppableProps} ref={provided.innerRef}>
                  {tasks
                    .filter((task) => {
                      if (!task.completed) return true; // Show all uncompleted tasks
                      const completionDate = new Date(task.completionDate);
                      const currentDate = new Date();
                      const differenceInTime =
                        currentDate.getTime() - completionDate.getTime();
                      const differenceInDays =
                        differenceInTime / (1000 * 3600 * 24);
                      return differenceInDays <= 1; // Only show completed tasks if they were completed within the last day
                    })
                    .map((task, index) => (
                      <Draggable
                        key={index}
                        draggableId={String(index)}
                        index={index}
                      >
                        {(provided) => (
                          <ListItem
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              ...provided.draggableProps.style,
                              textDecoration: task.completed
                                ? "line-through"
                                : "none",
                              backgroundColor: getBackgroundColor(
                                task.estimate
                              ),
                              borderRadius: 6,
                              margin: 8,
                            }}
                          >
                            <Checkbox
                              checked={task.completed}
                              onChange={() => handleCompleteTask(index)}
                            />
                            <ListItemText
                              primary={task.name}
                              secondary={`Estimated: ${task.estimate}, Worked: ${task.pomodoroWorked}`}
                              onClick={() => handleOpenModal(task)}
                            />
                            <IconButton
                              edge="end"
                              aria-label="edit"
                              onClick={() => handleOpenEditDialog(task, index)}
                            >
                              <EditIcon />
                            </IconButton>
                            <IconButton
                              edge="end"
                              aria-label="delete"
                              onClick={() => handleDeleteTask(index)}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </ListItem>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </List>
              )}
            </Droppable>
          </DragDropContext>
          {tasks.length > 0 && (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={graphData}
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
              onClick={() => setDialogOpen(true)}
              color="error"
            >
              <DeleteIcon fontSize="large" />
            </IconButton>
          </Box>
          <Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            {/* Wrapping as div for testing */}
            <div>
              <PomodoroBox
                key={selectedTask?.id}
                selectedTask={selectedTask}
                updateTask={updateTask}
              />
            </div>
          </Modal>
          <Snackbar
            open={error}
            autoHideDuration={6000}
            onClose={handleCloseError}
            anchorOrigin={{ vertical: "top", horizontal: "center" }} // Positioning the Snackbar
          >
            <MuiAlert
              onClose={handleCloseError}
              severity="error"
              sx={{ width: "100%" }}
            >
              Task name and estimate (in pomodoros) are required!
            </MuiAlert>
          </Snackbar>
          <Dialog open={showDialog} onClose={() => setDialogOpen(false)}>
            <DialogTitle>Confirm Action</DialogTitle>
            <DialogContent>
              Are you sure you want to perform this action?
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => {
                  setDialogOpen(false);
                }}
              >
                No
              </Button>
              <Button onClick={() => handleDeleteAllTasks()} color="primary">
                Yes
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={isEditDialogOpen}
            onClose={() => setIsEditDialogOpen(false)}
          >
            <DialogTitle>Edit Task</DialogTitle>
            <DialogContent>
              <TextField
                label="Task Name"
                value={editableTask?.name || ""}
                onChange={(e) =>
                  setEditableTask({ ...editableTask, name: e.target.value })
                }
                margin="normal"
                fullWidth
              />
              <TextField
                label="Estimate (pomodoros)"
                type="number"
                value={editableTask?.estimate || ""}
                onChange={(e) =>
                  setEditableTask({ ...editableTask, estimate: e.target.value })
                }
                margin="normal"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setIsEditDialogOpen(false)}>Cancel</Button>
              <Button onClick={handleSaveEditedTask} color="primary">
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
    </Container>
  );
}

export default TaskManager;
