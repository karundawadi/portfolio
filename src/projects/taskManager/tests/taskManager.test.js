import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaskManager from "../src/taskManager.js";

// jest.setup.js
global.ResizeObserver = require("resize-observer-polyfill");

// Mock localStorage
const localStorageMock = (function () {
  let store = {};
  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    clear() {
      store = {};
    },
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

describe("TimeManager Component", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  test("allows users to add tasks", () => {
    render(<TaskManager />);
    const taskInput = screen.getByLabelText(/Task Name/i);
    const estimateInput = screen.getByLabelText(/Estimate \(pomodoros\)/i);
    const addButton = screen.getByRole("button", { name: /Add/i });

    userEvent.type(taskInput, "New Task");
    userEvent.type(estimateInput, "3");
    userEvent.click(addButton);

    expect(screen.getByText("New Task")).toBeInTheDocument();
    expect(screen.getByText(/Estimated: 3/)).toBeInTheDocument();
  });

  test("shows error for invalid input", () => {
    render(<TaskManager />);
    const taskInput = screen.getByLabelText(/Task Name/i);
    const estimateInput = screen.getByLabelText(/Estimate \(pomodoros\)/i);
    const addButton = screen.getByRole("button", { name: /Add/i });

    userEvent.type(taskInput, "");
    userEvent.type(estimateInput, "abc"); // invalid estimate
    userEvent.click(addButton);

    expect(
      screen.getByText(/Task name and estimate \(in pomodoros\) are required!/)
    ).toBeInTheDocument();
  });

  test("allows users to delete a task", async () => {
    render(<TaskManager />);
    // First, add a task
    // ... similar steps as in the first test ...

    const deleteButton = screen.getByLabelText("delete");
    userEvent.click(deleteButton);

    expect(screen.queryByText("New Task")).not.toBeInTheDocument();
  });
});
