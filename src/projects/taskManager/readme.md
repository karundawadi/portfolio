# Task Manager

Live at: https://karundawadi.com/#/taskManager

This web application is a task management tool designed to optimize a workday. Users can enter tasks along with an estimated number of Pomodoro cycles needed to complete each one. These tasks are then stored in a queue, with all data saved in the browser's local storage. Also, keep in mind that one can reorder tasks and arrange them how they want. This information is synced to the local storage. For mobile users, they may need to hold and drag to be able to rearrange a task.

Tasks are visually categorized by their Pomodoro cycle estimates: tasks requiring more than 10 cycles are colored in shades of red, those needing fewer than 5 cycles are in shades of blue, and tasks needing fewer than 2 cycles appear in shades of green. Users have the flexibility to reorder tasks based on priority.

Clicking on a task opens a modal that allows users to start a Pomodoro timer. Each completed Pomodoro cycle increments the 'worked' count for that task.

The application includes a graphical feature that tracks the estimated versus actual Pomodoro cycles (Y-axis) against the date each task was entered (X-axis). This historical data helps users make more accurate estimates over time.

Additionally, the UI features a master delete button, enabling users to clear all tasks and effectively clean the local storage. This function serves as a reset mechanism for the application.

## Is this effective ?

The primary goal of this web application is to enhance productivity and efficiency. How does it achieve this? By treating tasks as mini goals for the day, and completing these goals, users optimize their time and resources, leading to high-quality outputs. The application enables users to set and track goals, and allocate time effectively. Utilizing the Pomodoro technique, it allows for regular breaks, helping users accomplish tasks more swiftly. Additionally, the integrated graph aids in making accurate estimates, ensuring that goals are realistic and achievable.

Color coding in the app further boosts efficiency. By tackling green tasks first (those requiring less than 2 Pomodoro cycles), then progressing to blue and finally red tasks, users can systematically approach their workload. A predominance of red tasks in the queue signals a need for careful task management and possibly more time allocation.

Here are some strategies to increase productivity and effectivness:

- Start with green tasks that take less than 2 minutes as this quick completion creates momentum. Be sure to mark them as '0' since they don't require a full Pomodoro cycle. 
- Organize tasks by color and priority for easier problem-solving. The app’s drag-and-drop feature facilitates this grouping.
- Remove unrealistic tasks from the queue. Often, tasks linger in our queue without ever being addressed. Regularly evaluate and clear out unattainable tasks.
- Always set realistic goals to maintain a practical and achievable workflow.

## How to report issues ?

Please feel free to open any bugs that you find on issues for this repository. 

### Updated 
01/27/2024
