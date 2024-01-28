import React from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
} from "@mui/material";

function TaskModal({ isOpen, closeModal, task, pomodoros, startPomodoro }) {
  return (
    <Modal open={isOpen} onClose={closeModal}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h5">Pomodoro Timer</Typography>
        <Typography variant="body1">
          Task: {task.name || ""}
        </Typography>
        <Typography variant="body1">
          Estimate: {task.estimate || ""}
        </Typography>
        <Typography variant="body1">
          Pomodoros Completed: {pomodoros}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={startPomodoro}
          style={{ marginTop: "1rem" }}
        >
          Start Pomodoro
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={closeModal}
          style={{ marginTop: "1rem" }}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
}

export default TaskModal;