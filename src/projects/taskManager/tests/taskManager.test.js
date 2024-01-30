import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TaskManager from "../src/taskManager.js";
import 'resize-observer-polyfill';

describe("TaskManager Component", () => {
  beforeEach(() => {
    localStorage.clear(); // Clear local storage before each test
  });

  it("renders TaskManager component with initial state", () => {
    render(<TaskManager title="Test TaskManager" />);
    
    // Check if the component renders with a title
    expect(screen.getByText("Task Manager")).toBeInTheDocument();
    
    // Check if Add button is present
    expect(screen.getByText("Add")).toBeInTheDocument();
    
    // Check if the initial tasks list is empty
    expect(screen.queryByText("Estimated:")).toBeNull();
    
    // Check if the import and export buttons are present
    expect(screen.getByText("Export")).toBeInTheDocument();
    expect(screen.getByText("Import")).toBeInTheDocument();
  });

  it("displays an error when invalid input is provided", () => {
    render(<TaskManager title="Test TaskManager" />);
    
    // Enter an empty task name and an invalid estimate
    const taskNameInput = screen.getByLabelText("Task Name");
    const taskEstimateInput = screen.getByLabelText("Estimate (pomodoros)");
    const addButton = screen.getByText("Add");

    fireEvent.change(taskNameInput, { target: { value: "" } });
    fireEvent.change(taskEstimateInput, { target: { value: "abc" } });

    fireEvent.click(addButton);

    // Check if the error message is displayed
    expect(
      screen.getByText("Task name and estimate (in pomodoros) are required!")
    ).toBeInTheDocument();
  });

});
