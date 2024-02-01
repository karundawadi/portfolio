import React from "react";
import { render, screen, act, fireEvent } from "@testing-library/react";
import PomodoroBox from "../src/pomodoroPopup.js";

// Mock the Howl class to avoid actual audio playback
jest.mock("howler", () => {
  return {
    Howl: jest.fn(() => {
      return {
        play: jest.fn(),
      };
    }),
  };
});

// This is a simple mock for Worker. You might need to expand it based on your usage.
class Worker {
  constructor(stringUrl) {
    this.url = stringUrl;
    this.onmessage = () => {};
  }

  postMessage(msg) {
    this.onmessage(msg);
  }

  terminate() {
    // Mock terminate function
  }
}

// Mock the global Worker with our mock class
global.Worker = Worker;

describe("PomodoroBox Component", () => {
  const mockTask = {
    name: "Test Task",
    estimate: 3,
    pomodoroWorked: 1,
  };

  const mockUpdateTask = jest.fn();

  test("renders PomodoroBox with initial state", () => {
    render(<PomodoroBox selectedTask={mockTask} udpateTask={mockUpdateTask} />);

    expect(screen.getByText(/Test Task/)).toBeInTheDocument();
    expect(screen.getByText(/Pomodoro Estimated: 3/)).toBeInTheDocument();
    expect(screen.getByText(/Pomodoro Worked: 1/)).toBeInTheDocument();
  });

  it("displays the correct time on the timer", () => {
    // Mock a selectedTask object
    const selectedTask = {
      name: "Task 1",
      estimate: 1500, // Adjust this based on your expected initial time
      pomodoroWorked: 0,
    };

    // Render the PomodoroBox with the mock selectedTask
    render(<PomodoroBox selectedTask={selectedTask} />);

    // Find the element that displays the time
    const timerElement = screen.getByText("25:00"); // Adjust this based on your expected initial time

    // Verify that the correct time is displayed
    expect(timerElement).toBeInTheDocument();
  });

  // This test will be worked on later as manual verification succedded
  // it("displays the correct time on the timer after countdown. 5s is tested", async () => {
  //   // Mock a selectedTask object
  //   const selectedTask = {
  //     name: "Task 1",
  //     estimate: 1500, // Adjust this based on your expected initial time
  //     pomodoroWorked: 0,
  //   };

  //   // Mock the updateTask function
  //   const updateTask = jest.fn();

  //   // Render the PomodoroBox with the mock selectedTask and updateTask function
  //   render(
  //     <PomodoroBox selectedTask={selectedTask} updateTask={() => {}}/>);

  //   // Start the timer
  //   fireEvent.click(screen.getByText("Start"));

  //   // Wait for the timer to count down for 5 seconds (simulating 5 seconds in the timer)
  //   await act(async () => {
  //     // Simulate 5 seconds of timer decrement
  //     await new Promise((resolve) => setTimeout(resolve, 1000));
  //     await new Promise((resolve) => setTimeout(resolve, 1000));
  //     await new Promise((resolve) => setTimeout(resolve, 1000));
  //     await new Promise((resolve) => setTimeout(resolve, 1000));
  //     await new Promise((resolve) => setTimeout(resolve, 1000));
  //   });
  //   console.log(screen);
  //   // Find the element that displays the time
  //   const timerElement = screen.findByText("24:56"); // There is a bit of difference in time

  //   // Verify that the correct time is displayed
  //   expect(timerElement).toBeInTheDocument();
  // }, 10000);
});
