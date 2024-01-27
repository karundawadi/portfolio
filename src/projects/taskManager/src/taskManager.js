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
import DeleteIcon from "@mui/icons-material/Delete";
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

function TaskManager(props) {
  const [taskName, setTaskName] = useState("");
  const [taskEstimate, setTaskEstimate] = useState("");
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [openModal, setOpenModal] = useState(false);
  const [error, setError] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [showDialog, setDialogOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (!taskName.trim() || !taskEstimate.trim() || isNaN(taskEstimate)) {
      setError(true);
      return;
    }

    if (taskName && taskEstimate && !isNaN(taskEstimate)) {
      const today = new Date();
      setTasks([
        ...tasks,
        {
          name: taskName,
          estimate: taskEstimate,
          pomodoroWorked: 0,
          completed: false,
          date: today.toISOString().slice(0, 10),
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
    const updatedTasks = tasks.map(
      (task) => (task.id === updatedTask.id ? updatedTask : task) // Assuming each task has a unique 'id'
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Save to local storage
  };

  const handleDeleteAllTasks = () => {
    setTasks([]);
    setDialogOpen(false);
  };

  const handleCompleteTask = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task; // Corrected this line
    });
    setTasks(newTasks);
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

    tasks.forEach((task) => {
      if (data[task.date]) {
        data[task.date].Estimated += parseInt(task.estimate, 10);
        data[task.date].Worked += task.pomodoroWorked;
      } else {
        data[task.date] = {
          Estimated: parseInt(task.estimate, 10),
          Worked: task.pomodoroWorked,
        };
      }
    });
    return Object.keys(data).map((date) => ({
      date,
      ...data[date],
    }));
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
                variant="contained"
                color="primary"
                onClick={handleAddTask}
              >
                Add
              </Button>
            </Box>
          </Box>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="tasks">
              {(provided) => (
                <List {...provided.droppableProps} ref={provided.innerRef}>
                  {tasks.map((task, index) => (
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
                            backgroundColor: getBackgroundColor(task.estimate),
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
        </Box>
      </Box>
    </Container>
  );
}

export default TaskManager;
