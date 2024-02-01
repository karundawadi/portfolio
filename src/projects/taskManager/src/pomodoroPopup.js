import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  TextField,
} from "@mui/material";
import { Howl } from "howler";
import AlertSound from "../resources/alert.wav";

const PomodoroBox = ({ selectedTask, updateTask }) => {
  const [seconds, setSeconds] = useState(1500); // 25 minutes
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState("work"); // Modes: 'work', 'short break', 'long break', 'pomodoro'
  const [pomodoroCount, setPomodoroCount] = useState(0);
  const [taskNotes, setTaskNotes] = useState("");
  const worker = useRef(); // Web worker

  const alertSound = useMemo(
    () =>
      new Howl({
        src: [AlertSound],
        volume: 0.3,
      }),
    []
  );

  useEffect(() => {
    // Load saved notes when the selected task changes
    if (selectedTask) {
      const savedNotes = localStorage.getItem(selectedTask.name);
      setTaskNotes(savedNotes || "");
    }
  }, [selectedTask]);

  useEffect(() => {
    // Automatically save notes when they change
    if (selectedTask) {
      localStorage.setItem(selectedTask.name, taskNotes);
    }
  }, [taskNotes, selectedTask]);

  useEffect(() => {
    worker.current = new Worker(`${process.env.PUBLIC_URL}/timerWorker.js`);

    worker.current.onmessage = (e) => {
      if (e.data.type === "tick") {
        setSeconds(Math.ceil(e.data.remainingTime / 1000));
      } else if (e.data.type === "finished") {
        // handle the end of the timer
        endPomodoroSession();
      }
    };

    // Cleanup
    return () => {
      worker.current.terminate();
    };
  }, []);

  useEffect(() => {
    let interval = null;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((secs) => secs - 1);
      }, 1000);
    } else if (!isActive || seconds === 0) {
      clearInterval(interval);
      if (seconds === 0) {
        alertSound.play();
        if (mode === "work" || mode === "pomodoro") {
          const updatedTask = {
            ...selectedTask,
            pomodoroWorked: selectedTask.pomodoroWorked + 1,
          };
          updateTask(updatedTask);
        }
        switchMode(`short break`);
      }
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, mode, selectedTask, updateTask, alertSound]);

  const endPomodoroSession = () => {
    // Play the alert sound
    alertSound.play();

    // Update the task with an additional completed Pomodoro, if applicable
    if (mode === "work" || mode === "pomodoro") {
      const updatedTask = {
        ...selectedTask,
        pomodoroWorked: selectedTask.pomodoroWorked + 1,
      };
      updateTask(updatedTask);
    }

    // Determine the next mode based on the current mode and number of Pomodoros completed
    let nextMode;
    if (mode === "work" || mode === "pomodoro") {
      if (pomodoroCount % 4 === 3) {
        // Typically after every 4 pomodoros, a longer break is taken
        nextMode = "long break";
      } else {
        nextMode = "short break";
      }
      setPomodoroCount(pomodoroCount + 1);
    } else {
      // If currently in a break, switch back to work mode
      nextMode = "work";
    }

    // Switch to the next mode
    switchMode(nextMode);

    // Reset the timer for the next session
    reset(nextMode);
  };

  const toggle = () => {
    setIsActive(!isActive);
    if (worker.current) {
      const command = isActive ? "stop" : "start";
      const duration = !isActive ? seconds * 1000 : undefined; // Convert seconds to milliseconds only if starting
      worker.current.postMessage({ command, duration });
    }
  };

  const reset = useCallback(
    (mode = "work") => {
      const durations = {
        work: 1500, // 25 minutes
        "short break": 300, // 5 minutes
        "long break": 900, // 15 minutes
        pomodoro: 1500, // 25 minutes (same as work for simplicity)
      };
      setSeconds(durations[mode]);
      setIsActive(false);
      // If the worker is active, send a stop command
      if (worker.current) {
        worker.current.postMessage({ command: "stop" });
      }
    },
    [worker]
  );

  const switchMode = useCallback(
    (newMode) => {
      if (newMode === "pomodoro") {
        setPomodoroCount(0);
      }
      setMode(newMode);
      reset(newMode);
    },
    [reset]
  );

  useEffect(() => {
    if (mode === "pomodoro") {
      if (seconds === 0 && pomodoroCount % 4 === 0) {
        switchMode("long break");
      } else if (seconds === 0) {
        switchMode("short break");
      }
    }
  }, [seconds, mode, pomodoroCount, switchMode]);

  const formatTime = () => {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${minutes}:${secondsLeft < 10 ? "0" : ""}${secondsLeft}`;
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        maxWidth: { xs: "90%", sm: "80%", md: 600 },
        maxHeight: "90%",
        width: "100%",
        bgcolor: "background.paper",
        boxShadow: 24,
        p: { xs: 2, sm: 3, md: 4 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowY: "auto",
      }}
    >
      <Typography variant="h5" component="h2" textAlign={"center"}>
        {selectedTask && selectedTask.name}
      </Typography>
      <Typography variant="body1" textAlign={"center"}>
        {`Pomodoro Estimated: ${selectedTask.estimate}`}
      </Typography>
      <Typography variant="body1" textAlign={"center"}>
        {`Pomodoro Worked: ${selectedTask.pomodoroWorked}`}
      </Typography>
      <Typography variant="body1" textAlign={"center"}>
        {`Estimation Error: ${
          selectedTask.pomodoroWorked !== 0
            ? selectedTask.pomodoroWorked - selectedTask.estimate
            : 0
        }`}
      </Typography>

      <Box sx={{ position: "relative", display: "inline-flex", mt: 3 }}>
        <CircularProgress
          color="success"
          variant="determinate"
          value={(seconds / 1500) * 100}
          size={200}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5" component="div" color="text.secondary">
            {formatTime()}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          mt: 2,
          width: "100%",
        }}
      >
        <TextField
          label="Task Notes"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          value={taskNotes}
          onChange={(e) => setTaskNotes(e.target.value)}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          justifyContent: "center",
          mt: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            justifyContent: "center",
            mt: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 1,
              justifyContent: "center",
              mt: 3,
            }}
          >
            <Button variant="outlined" onClick={() => switchMode("pomodoro")}>
              Pomodoro
            </Button>
            <Button
              variant="outlined"
              onClick={() => switchMode("short break")}
            >
              Short Break
            </Button>
            <Button variant="outlined" onClick={() => switchMode("long break")}>
              Long Break
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 1,
              justifyContent: "center",
              mt: 3,
            }}
          >
            <Button variant="contained" color="primary" onClick={toggle}>
              {isActive ? "Pause" : "Start"}
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => reset(mode)}
            >
              Reset
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PomodoroBox;
