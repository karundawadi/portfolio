import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Modal,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Paper,
  Container,
  CssBaseline,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Checkbox,
} from "@mui/material";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useMediaQuery } from "@mui/material";
import TaskModal from "./taskModal";

function TimeManager() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [estimate, setEstimate] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);
  const [pomodoros, setPomodoros] = useState(0);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [completedTasks, setCompletedTasks] = useState([]);

  // Load tasks from local storage on component mount
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to local storage whenever the tasks state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleEstimateChange = (e) => {
    setEstimate(e.target.value);
  };

  const addTask = () => {
    if (taskName.trim() === "" || isNaN(estimate) || estimate <= 0) {
      alert("Invalid task or estimate");
      return;
    }

    const newTask = {
      name: taskName,
      estimate: Number(estimate),
    };

    setTasks([...tasks, newTask]);
    setTaskName("");
    setEstimate(0);
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedTasks = [...tasks];
    const [reorderedTask] = reorderedTasks.splice(result.source.index, 1);
    reorderedTasks.splice(result.destination.index, 0, reorderedTask);

    setTasks(reorderedTasks);
  };

  const openModal = (index) => {
    setSelectedTaskIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setPomodoros(0);
    setSelectedTaskIndex(null);
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const markAsComplete = (index) => {
    const completedTask = tasks[index];
    setCompletedTasks([...completedTasks, completedTask]);
    toggleCompleted(index);
  };

  const startPomodoro = () => {
    if (selectedTaskIndex === null) return;

    const selectedTask = tasks[selectedTaskIndex];

    if (selectedTask.estimate <= 0) {
      alert("Task completed!");
      closeModal();
      return;
    }

    setPomodoros(pomodoros + 1);

    selectedTask.estimate -= 1;

    const updatedTasks = [...tasks];
    updatedTasks[selectedTaskIndex] = selectedTask;

    setTasks(updatedTasks);
  };

  const openDeleteDialog = () => {
    setDeleteDialogOpen(true);
  };

  const closeDeleteDialog = () => {
    setDeleteDialogOpen(false);
  };

  const clearAllTasks = () => {
    localStorage.removeItem("tasks");
    setTasks([]);
    setDeleteDialogOpen(false);
  };

  const toggleCompleted = (index) => {
    const updatedCompletedTasks = [...completedTasks];
    const taskToToggle = tasks[index];

    if (completedTasks.includes(taskToToggle)) {
      // If the task is already in completedTasks, remove it
      const taskIndex = completedTasks.indexOf(taskToToggle);
      updatedCompletedTasks.splice(taskIndex, 1);
    } else {
      // Otherwise, add it to completedTasks
      updatedCompletedTasks.push(taskToToggle);
    }

    setCompletedTasks(updatedCompletedTasks);
  };

  // Determine the system's color scheme preference
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const themeMode = prefersDarkMode ? "dark" : "light";

  return (
    <Container maxWidth="sm" style={{ marginTop: "2rem", textAlign: "center" }}>
      <CssBaseline />
      <div>
        <TextField
          label="Task Name"
          value={taskName}
          onChange={handleTaskNameChange}
          fullWidth
          variant="outlined"
          margin="normal"
          autoComplete="off"
        />
        <TextField
          label="Estimate"
          type="number"
          value={estimate}
          onChange={handleEstimateChange}
          fullWidth
          variant="outlined"
          margin="normal"
          autoComplete="off"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={addTask}
          style={{ marginTop: "1rem" }}
        >
          Add Task
        </Button>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <Paper
              {...provided.droppableProps}
              ref={provided.innerRef}
              elevation={3}
              style={{ padding: "1rem", marginTop: "2rem" }}
            >
              <List>
                {tasks.map((task, index) => (
                  <Draggable
                    key={index}
                    draggableId={`task-${index}`}
                    index={index}
                  >
                    {(provided) => (
                      <ListItem
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        divider
                      >
                        <Checkbox
                          checked={completedTasks.includes(task)}
                          onChange={() => markAsComplete(index)} // Mark task as complete on checkbox change
                        />
                        <ListItemText
                          onClick={() => openModal(index)}
                          primary={task ? task.name : ""}
                          secondary={task ? `Est. ${task.estimate}` : ""}
                        />
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent the event from bubbling up to openModal
                            removeTask(index);
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </ListItem>
                    )}
                  </Draggable>
                ))}
              </List>
              {provided.placeholder}
            </Paper>
          )}
        </Droppable>
      </DragDropContext>

      <IconButton
        color="error"
        aria-label="delete all tasks"
        onClick={openDeleteDialog}
        style={{ marginTop: "1rem" }}
      >
        <DeleteForeverIcon fontSize="large" />
      </IconButton>

      <Dialog open={deleteDialogOpen} onClose={closeDeleteDialog}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Are you sure you want to delete all tasks? This action cannot be
            undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDeleteDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={clearAllTasks} color="secondary">
            Delete All
          </Button>
        </DialogActions>
      </Dialog>
      <TaskModal
        isOpen={modalOpen}
        closeModal={closeModal}
        task={tasks[selectedTaskIndex] || {}}
        pomodoros={pomodoros}
        startPomodoro={startPomodoro}
      />
    </Container>
  );
}

export default TimeManager;
