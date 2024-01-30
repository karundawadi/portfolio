# Task Manager

***Note: This is not created to replace your task manager. This just incorporates pomodoro and other things that many task managers do not do.***

Live at: https://karundawadi.com/#/taskManager


This web application serves as an effective task management tool, specifically tailored to enhance productivity throughout a workday. It allows users to input tasks and associate them with an estimated number of Pomodoro cycles required for completion. These tasks are organized in a queue and all relevant data is securely stored in the browser's local storage. Moreover, the application supports task reordering, enabling users to prioritize as per their needs, with changes immediately updated in the local storage. On mobile devices, users can rearrange tasks with a simple hold-and-drag action.

The tasks are color-coded based on the estimated Pomodoro cycles: tasks requiring more than 10 cycles are displayed in shades of red, those needing fewer than 5 cycles in shades of blue, and tasks with less than 2 cycles in shades of green. This color-coding allows for easy categorization and prioritization of tasks.

Clicking on a task triggers a modal window where users can initiate a Pomodoro timer. Each Pomodoro cycle completed is automatically added to the task's 'worked' count. The modal also includes a feature to store notes specific to each task, with the data preserved in the local storage.

An integral feature of the application is its graphical tracking system, which compares the estimated Pomodoro cycles against the actual cycles on the Y-axis, plotted against the date of task entry on the X-axis. This historical tracking aids in making more accurate future estimates.

For enhanced data management, users have the option to export and import tasks, providing a backup option and flexibility in managing local storage data.

The application also streamlines task entry; simply pressing enter after typing a task adds it to the queue.

Additionally, the user interface includes a master delete button. This feature allows users to erase all tasks from the queue and clear the local storage, serving as a convenient reset mechanism for the entire application.

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

### Changelog 
#### 01/30/2024
- Fixed case in which if a pomodoro is started on a task it updates all other tasks 
- Pressing enter alows one to input a task to the queue 
- Huge improvement in timer and how pomodoro is counted. Now, it is counted after a pomodoro ends. 
- Edit funtionality introduced 

### Updated 
01/30/2024
