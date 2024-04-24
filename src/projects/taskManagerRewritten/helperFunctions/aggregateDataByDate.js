export const aggregateDataByDate = (tasks) => {
    const data = {};
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7); // Calculate date for 7 days ago

    tasks.forEach((task) => {
      const taskDate = new Date(task.date);
      if (taskDate >= sevenDaysAgo) {
        // Only include tasks from the last 7 days
        if (data[task.date]) {
          data[task.date].Estimated += parseInt(task.estimate, 10);
          data[task.date].Worked += task.pomodoroWorked;
        } else {
          data[task.date] = {
            Estimated: parseInt(task.estimate, 10),
            Worked: task.pomodoroWorked,
          };
        }
      }
    });
    return Object.keys(data)
      .map((date) => ({
        date,
        ...data[date],
      }))
      .sort((a, b) => new Date(a.date) - new Date(b.date)); // Ensure data is sorted by date
  };