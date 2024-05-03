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
import { useSelector, useDispatch } from "react-redux";
import { setTasks } from "../features/reducers/taskReducer";
import { setSelectedTask } from "../features/reducers/stateReducer";

const PomodoroBox = () => {
  const webWorker = useRef();
  const durations = {
    pomodoro: 1500, // 25 minutes
    "short break": 300, // 5 minutes
    "long break": 900, // 15 minutes
  };

  const [seconds, setSeconds] = useState(durations["pomodoro"]);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [mode, setMode] = useState("pomodoro");
  const [pomodoroCount, setPomodoroCount] = useState(0);
  const [taskNotes, setTaskNotes] = useState("");

  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.taskReducer.tasks);
  const selectedTask = useSelector((state) => state.stateReducer.selectedTask);

  const updateTask = (newTask) => {
    const newTasks = tasks.map((task) => {
      if (task.id === newTask.id) {
        newTask.estimationError = newTask.estimate - newTask.pomodoroWorked;
        dispatch(setSelectedTask(newTask));
        return newTask;
      }
      return task;
    });
    dispatch(setTasks(newTasks));
  };

  const alertSound = useMemo(
    () =>
      new Howl({
        src: [AlertSound],
        volume: 0.3,
      }),
    []
  );

  const endPomodoroSession = () => {
    alertSound.play();

    if (mode === "pomodoro") {
      const updatedTask = {
        ...selectedTask,
        pomodoroWorked: selectedTask.pomodoroWorked + 1,
      };
      updateTask(updatedTask);
    }

    let nextMode;
    if (mode === "pomodoro") {
      if (pomodoroCount % 4 === 3) {
        nextMode = "long break";
      } else {
        nextMode = "short break";
      }
      setPomodoroCount(pomodoroCount + 1);
    } else {
      nextMode = "pomodoro";
    }
    switchMode(nextMode);
    reset(nextMode);
  };

  const reset = useCallback(
    (mode = "pomodoro") => {
      setSeconds(durations[mode]);
      setIsTimerActive(false);
      if (webWorker.current) {
        webWorker.current.postMessage({ command: "stop" });
      }
    },
    [webWorker]
  );

  const switchMode = useCallback(
    (newMode) => {
      setMode(newMode);
      reset(newMode);
    },
    [reset]
  );

  const formatTime = () => {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${minutes}:${secondsLeft < 10 ? "0" : ""}${secondsLeft}`;
  };

  const toggle = () => {
    setIsTimerActive(!isTimerActive);
    if (webWorker.current) {
      const command = isTimerActive ? "stop" : "start";
      const duration = !isTimerActive ? seconds * 1000 : undefined;
      webWorker.current.postMessage({ command, duration });
    }
  };

  useEffect(() => {
    let interval = null;

    if (isTimerActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((secs) => secs - 1);
      }, 1000);
    } else if (!isTimerActive || seconds === 0) {
      clearInterval(interval);
      if (seconds === 0) {
        alertSound.play();
        if (mode === "pomodoro") {
          endPomodoroSession();
        }
        switchMode(`short break`);
      }
    }
    return () => clearInterval(interval);
  }, [isTimerActive, seconds, mode, selectedTask, alertSound]);

  useEffect(() => {
    webWorker.current = new Worker(`${process.env.PUBLIC_URL}/timerWorker.js`);

    webWorker.current.onmessage = (e) => {
      if (e.data.type === "tick") {
        setSeconds(Math.ceil(e.data.remainingTime / 1000));
      }
    };

    return () => {
      webWorker.current.terminate();
    };
  }, []);

  useEffect(() => {
    if (selectedTask) {
      const savedNotes = localStorage.getItem(selectedTask.name);
      setTaskNotes(savedNotes || "");
    }
  }, [selectedTask]);

  useEffect(() => {
    if (selectedTask) {
      localStorage.setItem(selectedTask.name, taskNotes);
    }
  }, [taskNotes, selectedTask]);

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
      <Typography
        style={{ paddingTop: "1%" }}
        variant="body1"
        textAlign={"center"}
      >
        {`Pomodoro Estimated: ${selectedTask.estimate}`}
      </Typography>
      <Typography variant="body1" textAlign={"center"}>
        {`Pomodoro Worked: ${selectedTask.pomodoroWorked}`}
      </Typography>
      <Typography variant="body1" textAlign={"center"}>
        {`Estimation Error: ${
          selectedTask.estimationError < 0
            ? -selectedTask.estimationError
            : selectedTask.estimationError
        }`}
      </Typography>

      <Box sx={{ position: "relative", display: "inline-flex", mt: 3 }}>
        <CircularProgress
          color="success"
          variant="determinate"
          value={(seconds / 1500) * 100} // Change seconds here
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
              <Button
                variant="outlined"
                onClick={() => switchMode("long break")}
              >
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
                {isTimerActive ? "Pause" : "Start"}
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
    </Box>
  );
};

export default PomodoroBox;
