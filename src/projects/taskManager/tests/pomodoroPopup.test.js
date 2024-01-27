import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PomodoroBox from "../src/pomodoroPopup.js";

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
});
