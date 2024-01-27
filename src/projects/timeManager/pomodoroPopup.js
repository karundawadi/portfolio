import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { Howl } from 'howler';

const songURL = 'https://www.youtube.com/audiolibrary_download?vid=4c84ca8c7a995a5e';

const PomodoroPopup = ({ task, isOpen, onClose, setTasks }) => {
  const [secondsLeft, setSecondsLeft] = useState(task ? task.cycles * 25 * 60 : 0);
  const [currentCycle, setCurrentCycle] = useState(0);
  const [isBreak, setIsBreak] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [startButtonLabel, setStartButtonLabel] = useState('Start Pomodoro');
  const [pausedTime, setPausedTime] = useState(0);
  const [originalDuration, setOriginalDuration] = useState(0);

  useEffect(() => {
    let timer;
    if (isOpen && secondsLeft > 0 && isRunning && !isPaused) {
      timer = setInterval(() => {
        setSecondsLeft((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      handleCycleEnd();
    }
    return () => clearInterval(timer);
  }, [isOpen, secondsLeft, isRunning, isPaused, task]);

  const handleCycleEnd = () => {
    const sound = new Howl({ src: [songURL] });
    sound.play();

    if (isBreak) {
      setCurrentCycle(currentCycle + 1);
      setIsBreak(false);
    } else {
      if (currentCycle < 3) {
        setIsBreak(true);
      } else {
        setCurrentCycle(0);
      }
      if (task) {
        setTasks((prevTasks) => {
          const updatedTasks = prevTasks.map((t) => {
            if (t.id === task.id) {
              return { ...t, cycles: t.cycles - 1 };
            }
            return t;
          });
          return updatedTasks;
        });
      }
    }
    setIsRunning(false);
    setIsPaused(false);
    setStartButtonLabel('Start Pomodoro');
    setSecondsLeft(isBreak ? 5 * 60 : 25 * 60);
  };

  const startTimer = (duration) => {
    setIsBreak(duration !== 25 * 60);
    setIsRunning(true);
    setIsPaused(false);
    setSecondsLeft(duration - pausedTime);
    setPausedTime(0);
    setOriginalDuration(duration);
    setStartButtonLabel('Pause');
  };

  const pauseTimer = () => {
    setIsPaused(true);
    setStartButtonLabel('Resume');
    setPausedTime((duration) => duration + (originalDuration - secondsLeft));
  };

  const handleStartPomodoro = () => {
    if (task) {
      setTasks((prevTasks) => {
        const updatedTasks = prevTasks.map((t) => {
          if (t.id === task.id) {
            return { ...t, cycles: t.cycles - 1 };
          }
          return t;
        });
        return updatedTasks;
      });
    }
    startTimer(25 * 60);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  if (!task) {
    return null;
  }

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>{task.task} - Pomodoro Timer</DialogTitle>
      <DialogContent>
        <p>Cycles Remaining: {task.cycles}</p>
        <p>Time Remaining: {formatTime(secondsLeft)}</p>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={!isRunning || isPaused ? handleStartPomodoro : pauseTimer}
          color="primary"
        >
          {startButtonLabel}
        </Button>
        <Button onClick={() => startTimer(25 * 60)} color="primary">
          Start Pomodoro
        </Button>
        <Button onClick={() => startTimer(5 * 60)} color="primary" disabled={isRunning && !isPaused}>
          Start Short Break
        </Button>
        <Button onClick={() => startTimer(15 * 60)} color="primary" disabled={isRunning && !isPaused}>
          Start Long Break
        </Button>
        <Button onClick={onClose} color="secondary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PomodoroPopup;
